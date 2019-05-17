import React from 'react';
import './checked-numbers.css';

export default function CheckedNumbers(props) {
	const feedback = props.feedback;
	const numbers = props.checkedNumbers.map((element, index) => (
		<li className={feedback[index]} key={index}>{element}</li>
	));

	return (
		<ul className="checked-numbers">
			{numbers}
		</ul>
	)
}