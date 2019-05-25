import React from 'react';
import './number-input.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


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
				<Input inputProps={{min:"1", max: '100'}}
				id={this.props.id}
				type='number' 
				placeholder="Enter number"
				value={this.state.value}
				onChange={e => this.handleChange(e.target.value)}
				 /><br /><br />
				
			
				
				<Button variant='contained' type='submit' value='Submit'>Check</Button>

			</form>
		</div>
		

	)
	}
	
}