import React from 'react';
import './core.css';
import NumberInput from './number-input';
import CheckedNumbers from './checked-numbers';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';



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
				<Card className="core">
					<CardHeader title={feedback} />
					<Button variant='contained' onClick={ () => window.location.reload()}>Restart</Button>
					<Typography variant="subtitle1" color="textSecondary">
            		Number of tries: {this.state.triedNumbers.length}
          			</Typography>
					<CheckedNumbers checkedNumbers={this.state.triedNumbers} feedback={this.state.triedNumbersFeedback} />
				</Card>
			)
		} else {
			return (
				<Card className="core">
					<CardHeader title={feedback} />
					<Divider/>
					<NumberInput id="number-input" onSubmit={input => {this.setTriedNumbers(input); this.checkNumber(input)}}/>
					<Typography variant="subtitle1" color="textSecondary">
					Winning number: {correctNumber}
          			</Typography>
					<Typography variant="subtitle1" color="textSecondary">
            		Number of tries: {this.state.triedNumbers.length}
          			</Typography>
					<CheckedNumbers checkedNumbers={this.state.triedNumbers} feedback={this.state.triedNumbersFeedback} />
				</Card>
		
			)
		}
 		
	}
}