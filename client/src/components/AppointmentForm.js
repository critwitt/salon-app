import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import Calendar from "react-calendar"

import "./AppointmentForm.css"
import 'react-calendar/dist/Calendar.css';

function AppointmentForm ({ user }) {
    const [stylists, setStylists] = useState([])
    const [stylist, setStylist] = useState('')
    const [appointment, setAppointment] = useState({
        date: '',
        time: '',
        description: '',
        user_id: user.id,
        hair_stylist_id: ''
    })

    const history = useHistory()

    useEffect(() => {
        fetch(`/hair_stylists`)
        .then(res => res.json())
        .then(data => setStylists(data))
    },[])


    function onStylistChange (e) {
        console.log(e.target.value)
        // setStylist(stylists.find(p => p.name === e.target.value))
        setAppointment({...appointment, hair_stylist_id: stylists.find(p => p.name === e.target.value).id})
    }

    function onDateChange (value) {
        setAppointment({...appointment, date: value})
    }

    function onTimeChange (e) {
        console.log(e.target.value)
        const { name, value } = e.target
        setAppointment({...appointment, [name]: value})
    }

    function onSubmit (e) {
        e.preventDefault()

        fetch(`/appointments`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(appointment)
        }).then(res => res.json()).then(data => {
            user.appointments.push(data)
            history.push('/profile')
        })
    }

    let timeArr = []

    function timeLoop () {
        for (let i=8; i<19; ++i) {
            if (i%12 && i < 12) {timeArr.push(`${i%12}:00 am`)}
            else if (i%12) {timeArr.push(`${i%12}:00 pm`)}
            else {timeArr.push(`12:00 pm`)} 
        }
    }
    timeLoop()

    return(
        <div className="flexible">
            <img src="https://media.istockphoto.com/vectors/women-long-hair-style-icon-icon-women-on-white-background-vector-id915356872?k=20&m=915356872&s=612x612&w=0&h=ysieSku8gUnYUjIHYkX7noB0LJMNXAoQNi3K6mI0IDk=" />
            <div className="scheduler">
                <h1 className="title-testing">Schedule an appointment</h1>
                <Calendar className="calendar" name='date' onChange={onDateChange}/>
                <form className="selectors"  onSubmit={onSubmit}>
                    <div className="selector-box">
                        <div>Select Hair Stylist</div>
                        <select className="stylist" onChange={onStylistChange}>
                            {stylists.map(stylist => <option key={stylist.id}>{stylist.name}</option>)}
                        </select>
                    </div>
                    <div className="selector-box">
                        <div>Select Available Time</div>
                        <select className="time" name="time" onChange={onTimeChange}>
                            {timeArr.map(hour => <option key={hour.id}>{hour}</option>)}
                        </select>
                    </div>
                    <div className="description">
                        <div>Description</div>
                        <input name="description" onChange={onTimeChange}></input>
                    </div>
                    <input className='button' type='submit' value="Make Appointment"></input>
                </form>
            </div>
            <img src="https://media.istockphoto.com/vectors/women-long-hair-style-icon-icon-women-on-white-background-vector-id915356872?k=20&m=915356872&s=612x612&w=0&h=ysieSku8gUnYUjIHYkX7noB0LJMNXAoQNi3K6mI0IDk=" />
        </div>
    )
}

export default AppointmentForm