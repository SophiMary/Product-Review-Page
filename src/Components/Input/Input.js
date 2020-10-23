import React from 'react'

export default function Input(props) {
    return (
			<option required value={props.val}>{props.val}</option>
	);
}

