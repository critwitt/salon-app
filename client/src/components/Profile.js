import { useEffect, useSyncExternalStore } from 'react';
import { NavLink } from 'react-router-dom'
import "./Profile.css"

function Profile ({ setUser, user }) {

    useEffect(() => {
        fetch(`/authorized_user`).then((response) => {
          response.json().then((user) => setUser(user))
        })
    },[])

    function logout () {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => setUser(''));
    }

    // useEffect (() => {
    //     fetch(`/user/${user.id}`)
    //     .then(res => res.json())
    //     .then(data => setUser(data))
    // },[])
    let totalf

    if (user) {
    const total = user.products.map(product => parseFloat(product.price))
    totalf = total.reduce((p,c) => p + c, 0)
    }

    function handleRemove (e) {
        fetch(`/purchases/${e.target.value}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        window.location.reload()
    }

    return (
        <div>
            <NavLink exact to='/' onClick={logout}>Log Out</NavLink>
            <h1>Hi, {user.name}</h1>
            <div className='schedule'>
                <h2 className='schedule-title'>Here are your upcoming appointments</h2>
                <div>{user ? user.appointments.map(app => <div className='appts'>{app.date} @ {app.time.slice(11,16) } - {app.description}</div>) : "No Content"}</div>
            </div>
            <div className='my-cart'>
                <h2 className='cart-title'>Here is your cart</h2>
                <div className='items'>{user ? user.products.map(prod => <div className='card'>
                        <h3 className="title">{prod.name}</h3>
                        <img src={prod.image} className='image'/>
                        <div>${prod.price}</div>
                        <p>{prod.description.slice(0,140)}...</p>
                        <button className="button" value={user.purchases[user.products.indexOf(prod)].id} onClick={handleRemove}>Remove From Cart</button>
                    </div>) : "No Content"}</div>
                <h2>Total: {totalf}</h2>
            </div>
        </div>
    )
}

export default Profile