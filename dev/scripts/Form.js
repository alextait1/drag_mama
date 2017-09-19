import React from 'react';
import { scrollToElement, scrollWindowToElement } from 'scroll-element';
import $ from 'jquery';

class Form extends React.Component {
	render (){
		return (
			<div className="wrapper">
				<form onSubmit={this.props.handleSubmit} className="form" id="form">
					<div className={this.props.page === 1 ? "show question__one question" : "question__one question"}>
									
						<h3 id="scrollQuestion">At a party where you don’t really know anyone, you are most likely to:</h3>
						
						<div className="input__container">
							<label htmlFor="question__one-A">
							<input type="radio" id="question__one-A" name="qOne" onChange={this.props.handleChange} value="fierce"   checked={this.props.radioState.qOne === "bebe,raja,tyra,violet"} data-queens="bebe,raja,tyra,violet"/>
								Sashay in like you’re that bitch everyone should want to talk to 
							</label>
						</div>
				
						<div className="input__container">
							<label htmlFor="question__one-B"><input type="radio" id="question__one-B" name="qOne" onChange={this.props.handleChange} value="macabre" checked={this.props.radioState.qOne === "sharon"?true:false} data-queens="sharon"/>
							Sulk in a corner on your phone googling images of baby-eating clowns
							</label>
							
						</div>
				
						<div className="input__container">
							<label htmlFor="question__one-C">
							<input type="radio" id="question__one-C" name="qOne" onChange={this.props.handleChange} value="funny" checked={this.props.radioState.qOne === "bob,chad,alaska,bianca"} data-queens="bob,chad,alaska,bianca"/>
							Bust into an impromptu standup routine about your ridiculous subway ride to the party
							</label>
						</div>
				
						<div className="input__container">
							<label htmlFor="question__one-D">
							<input type="radio" id="question__one-D" name="qOne" onChange={this.props.handleChange} value="quirky" checked={this.props.radioState.qOne === "jinkx,sasha"} data-queens="jinkx,sasha"/>
								Repurpose the nearest lamp shade as a hat and act like a goof to break the ice
							</label>
						</div>
				
						<button onChange={this.props.handleChange} onClick={this.props.handleClick} className="next">Next Question</button>
					</div>

					<div className={this.props.page === 2 ? "show question__two question" : "question__two question"}>
						<h3>If you were a contestant in a Miss/Mr Universe pageant, your special skill would be:</h3>
						
						<div className="input__container">
							<label htmlFor="question__two-A"><input type="radio" id="question__two-A" name="qTwo" onChange={this.props.handleChange} value="comedy" checked={this.props.radioState.qTwo === "jinkx,bianca,bob,alaska"} data-queens="jinkx,bianca,bob,alaska"/>
							Stand up comedy
							</label>
							
						</div>
				
						<div className="input__container">
							<label htmlFor="question__two-B">
							<input type="radio" id="question__two-B" name="qTwo" onChange={this.props.handleChange} value="impersonator" checked={this.props.radioState.qTwo === "chad"} data-queens="chad"/>
							Celebrity impersonation
							</label>
					
						</div>
				
						<div className="input__container">
							<label htmlFor="question__two-C">
							<input type="radio" id="question__two-C" name="qTwo" onChange={this.props.handleChange} value="lipsync" checked={this.props.radioState.qTwo === "tyra,sasha"} data-queens="tyra,sasha"/>
							 Belting a sweet sweet serenade
							</label>
							
						</div>
				
						<div className="input__container">
							<label htmlFor="question__two-D">
							<input type="radio" id="question__two-D" name="qTwo" onChange={this.props.handleChange} value="runway" checked={this.props.radioState.qTwo === "bebe,raja,sharon,violet"} data-queens="bebe,raja,sharon,violet"/>
							Bitch please, I don’t need no extra skills with a runway walk like this, mmmmkay?
							</label>
						</div>
				
						<button onChange={this.props.handleChange} onClick={this.props.handleClick} className="next">Next Question</button>
				
					</div>
				
					<div className={this.props.page === 3 ? "show question__three question" : "question__three question"}>
						<h3>Pick a celebrity style icon!</h3>
						
						<div className="input__container">
							<label htmlFor="question__three-A">
							<input type="radio" id="question__three-A" name="qThree" onChange={this.props.handleChange} value="highFashion" checked={this.props.radioState.qThree === "bebe,alaska,violet"} data-queens="bebe,alaska,violet"/>
							Naomi Campbell
							</label>
							
						</div>
				
						<div className="input__container">
							<label htmlFor="question__three-B">
							<input type="radio" id="question__three-B" name="qThree" onChange={this.props.handleChange} value="glam" checked={this.props.radioState.qThree === "tyra,raja"} data-queens="tyra,raja"/>
							Kim Kardashian
							</label>
							
						</div>
				
						<div className="input__container">
							<label htmlFor="question__three-C">
							<input type="radio" id="question__three-C" name="qThree" onChange={this.props.handleChange} value="classic" checked={this.props.radioState.qThree === "jinkx,bianca,bob,chad"} data-queens="jinkx,bianca,bob,chad"/>
							Audrey Hepburn
							</label>
							
						</div>

						<div className="input__container">
							<label htmlFor="question__three-D">
							<input type="radio" id="question__three-D" name="qThree" onChange={this.props.handleChange} value="avantGarde" checked={this.props.radioState.qThree === "sharon,sasha"} data-queens="sharon,sasha"/>
							Lady Gaga
							</label>
						</div>
				
						<button onChange={this.props.handleChange} onClick={this.props.handleClick} className="next">Next Question</button>
				
					</div>
				
					<div className={this.props.page === 4 ? "show question__four question" : "question__four question"}>
						<h3>Which diva best resonates with your inner badass?</h3>
						
						<div className="input__container">
							<label htmlFor="question__four-A">
							<input type="radio" id="question__four-A" name="qFour" onChange={this.props.handleChange} value="fish" checked={this.props.radioState.qFour === "bebe,violet"} data-queens="bebe,violet"/>
							Madonna
							</label>
							
						</div>
				
						<div className="input__container">
							<label htmlFor="question__four-B">
							<input type="radio" id="question__four-B" name="qFour" onChange={this.props.handleChange} value="shady" checked={this.props.radioState.qFour === "tyra,alaska"} data-queens="tyra,alaska"/>
							Rihanna
							</label>
							
						</div>

						<div className="input__container">
							<label htmlFor="question__four-C">
							<input type="radio" id="question__four-C" name="qFour" onChange={this.props.handleChange} value="artistic" checked={this.props.radioState.qFour === "raja,sharon,sasha"} data-queens="raja,sharon,sasha"/>
							Bjork
							</label>
							
						</div>
				
						<div className="input__container">
							<label htmlFor="question__four-D">
							<input type="radio" id="question__four-D" name="qFour" onChange={this.props.handleChange} value="oldSchool" checked={this.props.radioState.qFour === "jinkx,bianca,bob,chad"} data-queens="jinkx,bianca,bob,chad"/>
							Ella Fitzgerald
							</label>
							
						</div>
				
						<label htmlFor="submit"></label>
						<input type="submit" id="submit" onClick={this.loadQueenInfo} value="Find Yo' Queen" className="next"/>
				
					</div>
				
				
				</form>
			</div>
			)
	}
}


export default Form;