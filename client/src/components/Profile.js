import { NavLink } from 'react-router-dom'

function Profile ({ setUser, user }) {

    function logout () {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => setUser(''));
    }

    console.log(user)

    return (
        <div>
            <NavLink exact to='/' onClick={logout}>Log Out</NavLink>
            <h1>Hi, {user.name}</h1>
            <h2>Here are your upcoming appointments</h2>
            <div>{user.appointments.map(app => <div>{app.date} @ {app.time.slice(11,16) } - {app.description}</div>)}</div>
            <h2>Here is your cart</h2>
            <div></div>
        </div>
    )
}

export default Profile