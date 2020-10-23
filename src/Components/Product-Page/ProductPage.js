import React, { useEffect, useState } from 'react'
import { baseURL } from "../API"

export default function ProductPage(props) {

    const [ products, setProducts ] = useState([]);
    let URL = `${baseURL}${props.product}/${props.viewer}`;

    async function api() {
		try {
			const response = await fetch(URL);
			return await response.json();
		} catch (error) {
			return console.log("Error :", error);
		}
	}

    useEffect(() => {
        console.log(URL);
		api()
			.then((data) => setProducts(data))
			.catch((error) => alert("couldn't load data"));
	}, []);

    console.log(products);
    return (
        <div>
            <p>{props.product}</p>
            <p>{props.viewer}</p>
        </div>
    )
}

