import AddToCart from "../AddToCart";
import Rating from "../Rating";
import "./ProductCard.css"

function ProductCard(props) {
    return (
        <div className="ProductCard">
            <h3>{props.product.id}</h3>
            <h3>{props.product.title}</h3>
            <h3>{props.product.price}</h3>
            <Rating rating={3} maxRating={5} size={1} />
            <AddToCart
                product={props.product}
                cart={props.cart}
                increaseQuantity={props.increaseQuantity}
                decreaseQuantity={props.decreaseQuantity}
            />
        </div>
    )
}

export default ProductCard;