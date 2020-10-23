import React, { useEffect, useState } from 'react'
import { baseURL } from "../API"
import Product from '../Product/Product'

export default function ProductPage(props) {

    const [ products, setProducts ] = useState({});
    let URL = `${baseURL}${props.product}/${props.viewer}`;

    useEffect(() => {
        async function api() {
			try {
				const response = await fetch(URL);
				return await response.json();
			} catch (error) {
				return console.log("Error :", error);
			}
		}
		api()
			.then((data) => setProducts(data))
			.catch((error) => alert("couldn't load data"));
    }, [URL]); 

    console.log(products);
    return (
        <div>
            <Product data={products}/> 
        </div>
    )
}

