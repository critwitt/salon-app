import "./Product.css"

function Product ({ product }) {

    function handleClick () {
        fetch(`/purchases`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: {product}
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className="card">
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <p>{product.description.slice(0,140)}...</p>
            <button onClick={handleClick}>Add To Cart</button>
        </div>
    )
}

export default Product