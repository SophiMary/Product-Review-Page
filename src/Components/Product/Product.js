import React from "react";
import "./Product.css";

export default function Product(props) {
	console.log("data" + props.data);
	return (
		<div className="prodPage">
			<h4> Product Review</h4>
			<div className="content">
				<ul>
					{/* <li>
						{props.data.reviews[0].friend === true &&
							`Name : ${props.data.reviews[0].reviewer.name}`}
					</li>
					<li>`Comment: ${props.data.reviews[0].comment} `</li> */}
				</ul>
			</div>
		</div>
	);
}