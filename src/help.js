import React from 'react';
import './help.css';

export default class Help extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			clicked: false
		}
	}

	render() {
		if (this.state.clicked) {
			return(
				<div onClick={ () => this.setState({clicked:false})} className="help-overlay">
					<div className="content">
					<h2>What do I do?</h2>
		     		<p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
		      		<ol>
		       			<li>I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
		        		<li>You need to <strong>guess</strong> until you can find the hidden secret number.</li>
		    		    <li>You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
		      		</ol>
		      		</div>
				</div>
			)
		} else {
			return (
				<div onClick={ () => this.setState({clicked:true})} className="help">
					Help
				</div>
			)
		}
	}
}
