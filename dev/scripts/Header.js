import React from 'react';

class Header extends React.Component {
	constructor(){
		super();
		this.play=this.play.bind(this);
		this.state={
			played:false
		}
	}

	play() {
		if (this.state.played === false){
		const audio = new Audio(`assets/audio_files/gentlemen.m4a`)
		audio.pause();
		audio.currentTime=0;
		audio.play();
		this.props.startQuiz();
		this.setState({
			played:true
			})
		}
	}

	render (){
		return (
			<header>
				<div className="wrapper">
					<div className="header__container">
						<div className="header__left">
							<img src="assets/rupaul1.jpg" alt="image of RuPaul" className="rupaul__image"/>
						</div>
						<div className="header__right">
							<h1 className="header__right-title">Who's Your Fairy Drag Mother?</h1>
							<h2 className="header__right-tagline">Spill the T to find your Drag Queen spirit guide</h2>
				
							<button onClick={this.play}>Take Quiz</button>
				
						</div>
					</div>
				</div>
			</header>
			)
	}
}

export default Header;