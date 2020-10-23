import React from 'react'

export default function Input(props) {
    return (
			<option required name ={props.name} value={props.val}>{props.val}</option>
	);
}

