import "./ProductCard.css"

function ProductCard(props){
    return(
        <div className="ProductCard">
            <h3>{props.id}</h3>
            <h3>{props.title}</h3>
            <h3>{props.price}</h3>
        </div>
    )
}

export default ProductCard;