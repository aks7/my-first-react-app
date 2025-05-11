import './AddToCart.css'



function AddToCart({ product, cart, increaseQuantity }) {
    function addQuantity() {
        increaseQuantity(product);
    }
    console.log(cart);
    // console.log("cart in AddToCart component=", cart);
    let quantity = cart[product.id] ? cart[product.id].quantity : 0;
    console.log(cart['{product.id}']);
    if (quantity > 0) {
        return (
            <div className='cart-wrapper'>
            <div className="quantity-controls">
                <button type="button" onClick={addQuantity} > +</button>
                <h4>{quantity}</h4>
                <button type="button" onClick={addQuantity} > -</button>
            </div>
            </div>
        )
    } else {
        return (
            <button type="button" onClick={addQuantity} > AddToCart</button>
        )
    }
}

export default AddToCart;