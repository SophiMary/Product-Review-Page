import React, { useState } from 'react'
import Input from '../Input/Input';
import ProductPage from '../Product-Page/ProductPage';
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
	
	const [ selectProduct, setSelectProduct ] = useState('');
	const [ selectView, setSelectView ] = useState('');
	const [ state, setState] = useState({

		isSubmitted: false
	})

	function handleChange(e) {
		let selectProd = e.target.value;
		setSelectProduct(selectProd);
	}
	function handleChangeView(e) {
		let selectVal = e.target.value;
		setSelectView(selectVal);
	}

	function handleSubmit(e) {
		e.preventDefault()
		setState({isSubmitted: true})
	}

	
    
    return (
		<div>
			<h1 className="heading">Product Review Page</h1>
			<h4 className="subHeading"> Check your Product's Review</h4>
			{/* Product ID */}
			<form onSubmit={handleSubmit}>
				<div className="form">
					<div className="prod">
						<label className="name">
							Choose the Product ID{" "}
							<span className="num">[between 1- 20]</span>:{" "}
						</label>
						<select
							name="prod"
							onChange={handleChange}
							value={selectProduct}
						>
							{productID.map((num) => {
								return (
									<Input
										key={num}
										name="productID"
										val={num}
									/>
								);
							})}
						</select>
					</div>

					<div>
						{/* View ID */}
						<label className="name">
							Choose the Viewer ID{" "}
							<span className="num">[between 1- 10]</span>:{" "}
						</label>
						<select
							name="viewer"
							onChange={handleChangeView}
							value={selectView}
						>
							{viewID.map((num) => {
								return (
									<Input
										key={num}
										name="viewerID"
										val={num}
									/>
								);
							})}
						</select>
					</div>
				</div>
				<input className="button" type="submit" value="submit" />
			</form>

			{ state.isSubmitted && <ProductPage product={selectProduct} viewer={selectView} /> }
		</div>
	);
}
