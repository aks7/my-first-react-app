import './AddToCart.css'



function AddToCart({ product, cart, increaseQuantity, decreaseQuantity }) {
    function addQuantity() {
        increaseQuantity(product);
    }
    function removeQuantity() {
        decreaseQuantity(product);
    }
    console.log(cart);
    // console.log("cart in AddToCart component=", cart);
    let quantity = cart[product.id] ? cart[product.id].quantity : 0;
    console.log(cart['{product.id}']);
    if (quantity > 0) {
        return (
            <div className="quantity-controls1">
                <button type="button" onClick={removeQuantity} > -</button>
                <span  >{quantity}</span>
                <button type="button" onClick={addQuantity} > +</button>
            </div>
        )
    } else {
        return (
            <button type="button" onClick={addQuantity} > AddToCart</button>
        )
    }
}

export default AddToCart;