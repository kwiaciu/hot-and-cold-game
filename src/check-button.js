import React from 'react';
import './check-button.css';

export default function CheckButton(props) {
	return(
		<button 
		className="check-button"
		form={props.formId} 
		>Check</button>
	)
}