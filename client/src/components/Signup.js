import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'

import "./Signup.css"

function Signup () {
    const [createAccountFormData, setCreateAccountFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        admin: false
    })

    const [signInFormData, setSignInFormData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState([])
    const history = useHistory()

    const { name, email, password } = createAccountFormData
    const { signInEmail, signInPassword } = signInFormData

    function onCreate(e){
        e.preventDefault()
        const user = {
            name,
            email,
            password,
            admin: false
        }

        console.log(user)
       
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    history.push(`/login`)
                })
            }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
       
    }

    const handleCreateAccountChange = (e) => {
        const { name, value } = e.target
        setCreateAccountFormData({ ...createAccountFormData, [name]: value })
      }

    return (
        <div className="login-form">

            <h1>Create Account</h1>

            <label>Name</label>
            <input type='text' name='name' value={name} onChange={handleCreateAccountChange} />

            <label>Email</label>
            <input type='text' name='email' value={email} onChange={handleCreateAccountChange} />
            
            <label>Password</label>
            <input type='password' name='password' value={password} onChange={handleCreateAccountChange} />
            
            <input className='button' type='submit' value='Create Account'  onClick={onCreate}/>
            {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}

        </div>
    )
}

export default Signup