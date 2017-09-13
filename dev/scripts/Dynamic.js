import React from 'react';
import ScrollToTop from 'react-scroll-up';
class Dynamic extends React.Component {
	
	redoQuiz(){
		this.props.startQuiz();
	}
	render(){
		return (
	       <div className="wrapper">
	       	 	<div className={this.props.queenName !== "" ? "dynamic__container show" : "dynamic__container"}>
	       			<img src={this.props.queenImg} alt="your drag queen image" className="dynamic__left"/>
	       				<div className="dynamic__right">
	       					<h2 className="winner">Con<span className="drag">DRAG</span>ulations!! Your fairy drag mother is {this.props.queenName}</h2>
	       					<h3>Quote:"{this.props.queenQuote}"</h3>
	       					<ScrollToTop showUnder={160}>
	       						<button className="redo" onClick={this.props.startQuiz}>Redo Quiz</button>
	       					</ScrollToTop>	
	       				</div>
	       		</div>
	       </div>
			)
		}
}

export default Dynamic;