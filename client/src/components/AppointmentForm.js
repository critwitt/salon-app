import { useState, useEffect } from "react"
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

    console.log(appointment)

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
            body: {appointment}
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
        <div className="scheduler">
            <h1>Schedule an appointment</h1>
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
                <div>
                    <div>Description</div>
                    <input name="description" onChange={onTimeChange}></input>
                </div>
                <input type='submit' value="Make Appointment"></input>
            </form>

        </div>
    )
}

export default AppointmentForm