import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import Product from "./Product"
import "./Services.css"

function Services ({user}) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/products')
        .then(res => {
            if(res.ok) {
                res.json().then(data => setProducts(data))
            } else {
                setProducts([''])
            }
        })
    },[])

    return (
        <div>
            <div  className="services-pls">
                <NavLink exact to="/appointments" className="button">BOOK AN APPOINTMENT</NavLink>
                <h2 className="product-title">PRODUCTS</h2>
            </div>
            {products[0] ? products.map(product => <Product user={user} key={product.id} product={product}/>) : <div className="services-pls">Please login to view all of our products</div>}
        </div>
    )
}

export default Services