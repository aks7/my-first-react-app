import AddToCart from "../AddToCart";
import "./ProductCard.css"

function ProductCard(props) {
    return (
        <div className="ProductCard">
            <h3>{props.product.id}</h3>
            <h3>{props.product.title}</h3>
            <h3>{props.product.price}</h3>
            <AddToCart
                product={props.product}
                cart={props.cart}
                increaseQuantity={props.increaseQuantity} />
        </div>
    )
}

export default ProductCard;