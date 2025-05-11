import ProductCard from "../ProductCard";
import "./ProductList1.css";
import { useState } from "react";
import { useEffect } from "react";

import Loader from "../Loader";

const products = [
    {
        "id": "1",
        title: "Apple iPhone 14",
        price: "Rs. 1,00,000"
    },
    {
        "id": "2",
        title: "Apple iPhone 13",
        price: "Rs. 70,000"
    },
    {
        "id": "3",
        title: "Google Pixel 7",
        price: "Rs. 50,000"
    },
    {
        "id": "4",
        title: "Nokia 1100",
        price: "Rs. 2,000"
    },
    {
        "id": "5",
        title: "Samsung Galaxy S10",
        price: "Rs. 1,08,080"
    },
    {
        "id": "6",
        title: "Sony Xperia 510",
        price: "Rs. 1,18,080"
    },
    {
        "id": "7",
        title: "Samsung A55",
        price: "Rs. 38,080"
    }
];

//use of closure
function getProductsApi(callback) {
    setTimeout(function () {
        callback(products);
    }, 2000);
    // callback(products);


}

let productPromise = new Promise(function (resolve, reject) {
    if (true) {
        resolve(products);
    } else {
        reject(products);
    }
});

function ProductList1({ cart, increaseQuantity }) {

    const [isLoading, setIsLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);

    // useEffect(() => {

    //     productPromise
    //         .then(function (result) {
    //             console.log("Resolved with:", result);
    //             setAllProducts(result);
    //             setIsLoading(false);
    //         })
    //         .catch(function (error) {
    //             console.error("Rejected with:", error);
    //             setAllProducts([]);
    //             setIsLoading(false);
    //         });
    // }, []);

    useEffect(() => {
        console.log("cart ==", cart);
        fetch("http://localhost:8080/getProducts")
            .then(function (response) {
                return response.json();
            })
            .then((result) => {
                console.log("Response from fetch call =", result);
                setAllProducts(result);
                setIsLoading(false);
            })
    }, []);


    if (isLoading) {
        return (<Loader />)
    } else {
        return (
            <div className="products">
                {allProducts.map(
                    function (product) {
                        return (<ProductCard
                            key={product.id}
                            product={product}
                            cart={cart}
                            increaseQuantity={increaseQuantity}
                        />);
                    }
                )}
            </div>
        )
    }
}
export default ProductList1;













//AJAX-- asynchronous Javascript and XML
// why do we need ajax ?
//dynamically getting date from server and uisng it on client is the use case of Ajax



// Promises in java script
//Promis is a constructor function
// let promise = new Promise(function (resolve, reject) {
//     let x = sendEmail(emamilId);
//     if (x) {
//         resolve("album sent");
//     }
//     else {
//         reject("almbum not sent as email is invalid")
//     }
// });

// //state pending, fulfilled, rejected
// promise.then(
//     function (res) {
//         //called when resolve happens
//     },
//     function (res) {
//         //when rejecte happens
//     }
// )


