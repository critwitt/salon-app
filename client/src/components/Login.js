import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { Form } from './Form'
import './Login.css'

function Login ({setUser}) {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {name, password} = formData

    function onSubmit (e) {
        e.preventDefault()
        const user = {
            name,
            password
        }

        console.log(user)

        fetch(`/login`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    history.push(`/profile`)
                    setUser(user)
                })
            } else {
                res.json().then(json => setErrors(json.errors))
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    return (
        <div> 
        <Form onSubmit={onSubmit}>
        <label>
          Username
          </label>
        <input type='text' name='name' value={name} onChange={handleChange} />
      
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
       
       
        <input type='submit' value='Log in' />
      </Form>
      {errors? <div>{errors}</div>:null}
      <h2 className='alternate'>Or...<NavLink exact to="/signup">Create An Account</NavLink></h2>
        </div>
    )
}

export default Login