import ProductCard from "../ProductCard";
import "./ProductList.css";
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
//state variabe ? how do we create this state variable ??
//state varible --whose value when set will rerender thte whole component
// react hooks -- its a helper funcitons --there are some custom hooks--one can also create some hooks
//useNameofhook
// e.g. useState
//useState(default) -- re-render the component and child components
//state variable value will be persist even after re-render-- it will change only when the value is changed

//useEffect hook
//

function ProductList() {
    // const isLoadingState = useState(true);
    // let isLoading=isLoadingState[0];
    // let setIsLoading=isLoadingState[1];
    const [isLoading, setIsLoading] = useState(true);
    // const productState = useState([]);
    // let allProducts = productState[0];
    // let setAllProducts = productState[1];
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getProductsApi(function (resp) {
            console.log("api call started");
            setAllProducts(resp); // will re-render the ProductList fuction re-render will happen only when there will be change in the value of allProducts
            setIsLoading(false);
            console.log("allProducts===========", allProducts);
            console.log("api call ended")
        });
    }, [setAllProducts]);


    if (isLoading) {
        return (<Loader />)
    } else {
        return (
            <div className="products">
                {allProducts.map(
                    function (product) {
                        return (<ProductCard key={product.id} id={product.id} title={product.title} price={product.price} />);
                    }
                )}
            </div>
        )
    }
}
export default ProductList;













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


// fetch-----------------

// fetch is wraper on promise and ajax call--> fetch =ajax + promise
//fetch("url").then(function(res){
//     console.log(res);
// })

