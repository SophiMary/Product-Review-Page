import React from 'react'
import Input from '../Input/Input';
import "./Form.css"

export default function Form() {
    
    let productID = [];
    let viewID = [];

	for (let i = 1; i <= 20; i++) {
		productID.push(i);
	}

	for (let j = 1; j <= 10; j++) {
		viewID.push(j);
    }
    
    return (
		<div>
			<h1 className="heading">Product Review Page</h1>
			<h4 className="subHeading"> Check your Product's Review</h4>
			{/* Product ID */}
			<form className="product">
				<div className="form">
					<div className="prod">
						<label className="name">
							Choose the Product ID{" "}
							<span className="num">[between 1- 20]</span>:{" "}
						</label>
						<select name="product">
							{productID.map((num) => {
								return <Input key={num} val={num} />;
							})}
						</select>
					</div>

					<div>
						{/* View ID */}
						<label className="name">
							Choose the Viewer ID{" "}
							<span className="num">[between 1- 10]</span>:{" "}
						</label>
						<select name="product">
							{viewID.map((num) => {
								return <Input key={num} val={num} />;
							})}
						</select>
					</div>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
