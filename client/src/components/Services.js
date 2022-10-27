import { useEffect, useState } from "react"
import Product from "./Product"

function Services () {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div>
            <h1 className="appointments">BOOK AN APPOINTMENT</h1>
            <h1 className="product-title">PRODUCTS</h1>
            {products.map(product => <Product key={product.id} product={product}/>)}
        </div>
    )
}

export default Services