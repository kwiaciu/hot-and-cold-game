import React from 'react';
import './number-input.css';

export default class NumberInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}


  	handleChange(value) {
    	this.setState({value});
  	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(typeof this.state.value)
		if (!(this.state.value === '')) {
			this.props.onSubmit(this.state.value);
		}

		
	}

	render() {
		return (
		<div className="pick-number">
			<form id={this.props.id} 
			onSubmit={ (e) => this.handleSubmit(e)}>
				<input 
				id={this.props.id}
				type='number' 
				min="1" max="100" 
				placeholder="Enter number between 1 and 100"
				value={this.state.value}
				onChange={e => this.handleChange(e.target.value)}
				 /><br />
				
			
				
				<input type='submit' value='Submit' />

			</form>
		</div>
		

	)
	}
	
}