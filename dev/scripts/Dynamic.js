import React from 'react';
import { scrollToElement, scrollWindowToElement } from 'scroll-element';

class Dynamic extends React.Component {
	render(){
		return (
	       <div className="wrapper">
	       	 	<div className={this.props.queenName !== "" ? "dynamic__container show" : "dynamic__container"}>
	       			<img src={this.props.queenImg} alt="your drag queen image" className="dynamic__left"/>
	       				<div className="dynamic__right">
	       					<h2 className="winner">Con<span className="drag" id="queenName">DRAG</span>ulations!! </h2>
	       					<h2>Your fairy drag mother is</h2> 
	       					<h2 className="queenName">{this.props.queenName}</h2>
	       					<h3 id="quote">Quote:"{this.props.queenQuote}"</h3>
	       					<button className="redo" onClick={() => this.props.startQuiz(true)}>Redo Quiz</button>
	       					
	       				</div>
	       		</div>
	       </div>
			)
		}
}

export default Dynamic;