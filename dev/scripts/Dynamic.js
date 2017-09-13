import React from 'react';
import ScrollToTop from 'react-scroll-up';
class Dynamic extends React.Component {
	
	redoQuiz(){
		this.props.startQuiz();
	}
	render(){
		return (
			// add empty function (see proj5)
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

// method based on prop names to return things
export default Dynamic;

// Youtube links:
// bebe https://www.youtube.com/watch?v=6-k1gK2hsy4
// tyra https://www.youtube.com/watch?v=TICsuDUO5qA
// raja https://www.youtube.com/watch?v=6PqUpTjbWaQ
// sharon https://www.youtube.com/watch?v=ae18_QpaQLE
// jinkx https://www.youtube.com/watch?v=pKtqj2mtbM0
// bianca https://www.youtube.com/watch?v=Ffl9b4wIPFg
// violet
// Bob https://www.youtube.com/watch?v=M2E4twywatA
// sasha https://www.youtube.com/watch?v=SYxImfmbvHc
// chad https://www.youtube.com/watch?v=8nFnz81EOJ4
// alaska https://www.youtube.com/watch?v=k2A2EQYccOY