import React from 'react';
import './core.css';
import Feedback from './feedback';
import NumberInput from './number-input';
import TextLink from './text-link';
import CheckedNumbers from './checked-numbers';

export default class Core extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			triedNumbers: [],
			triedNumbersFeedback: [],
			isCorrect: false,
			isHot: false,
			isWarm: false
		}
	}

	setTriedNumbers(newNumber) {
		if (!(newNumber===this.state.triedNumbers[this.state.triedNumbers.length-1])){
			this.setState({
				triedNumbers: [...this.state.triedNumbers, newNumber]
			});
		}
	}


	setTriedNumbersFeedback(newNumberFeedback) {
		this.setState({
			triedNumbersFeedback: [...this.state.triedNumbersFeedback, newNumberFeedback]
		})
	}


	checkNumber(newNumber) {
		const difference = Math.abs(this.props.correctNumber - newNumber);
		switch(true) {
			case difference===0:
				this.setIsCorrect(true);
				this.setTriedNumbersFeedback('correct');
				break;
			case difference<10:
				this.setIsHot(true);
				this.setTriedNumbersFeedback('hot');
				break;
			case difference<20:
				this.setIsWarm(true);
				this.setIsHot(false);
				this.setTriedNumbersFeedback('warm');
				break;
			default:
				this.setIsWarm(false);
				this.setIsHot(false);
				this.setTriedNumbersFeedback('cold');

		}
	}


	setIsCorrect(isCorrect) {
		this.setState({
			isCorrect
		});

	}

	setIsHot(isHot) {
		this.setState({
			isHot
		});

	}

	setIsWarm(isWarm) {
		this.setState({
			isWarm
		});

	}

	getFeedback() {
		let feedback;
		if (this.state.triedNumbers.length === 0) {
			feedback = 'Make a guess!';
		} else if (this.state.isCorrect) {
			feedback = 'Correct!';
		} else if (this.state.isHot) {
			feedback = 'Hot!';
		} else if (this.state.isWarm) {
			feedback = 'Warm';
		}	else {
			feedback = 'Cold';
		}

		return feedback
	}
	


	render() {

		const correctNumber = this.props.correctNumber;

		const feedback = this.getFeedback();

		
		if (this.state.isCorrect) {
			return (
				<div className="core">
					<Feedback feedback={feedback} />
					<button onClick={ () => window.location.reload()}>Restart</button>
					<TextLink content={'Number of tries:'+this.state.triedNumbers.length}/>
					<CheckedNumbers checkedNumbers={this.state.triedNumbers} feedback={this.state.triedNumbersFeedback} />
				</div>
			)
		} else {
			return (
				<div className="core">
					<Feedback feedback={feedback} />
					<NumberInput id="number-input" onSubmit={input => {this.setTriedNumbers(input); this.checkNumber(input)}}/>
					<TextLink content={'Winning number: '+correctNumber}/>
					<TextLink content={'Number of tries: '+this.state.triedNumbers.length}/>
					<CheckedNumbers checkedNumbers={this.state.triedNumbers} feedback={this.state.triedNumbersFeedback} />
				</div>
		
			)
		}
 		
	}
}