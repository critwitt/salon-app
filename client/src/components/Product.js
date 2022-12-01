import "./Product.css"

function Product ({ user, product }) {

    function handleClick () {
        fetch(`/purchases`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id: user.id,
                product_id: product.id
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))

        window.location.reload()
    }

    console.log(product)

    return (
        <div className="card">
            <h3 className="title">{product.name}</h3>
            <img src={product.image} className='image'/>
            <div>${product.price}</div>
            <p>{product.description.slice(0,140)}...</p>
            <button className='button' onClick={handleClick}>Add To Cart</button>
        </div>
    )
}

export default Product