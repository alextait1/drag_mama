import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Form from './Form';
import Dynamic from './Dynamic'
import { ajax } from 'jquery';

import { 
    BrowserRouter as Router, 
    Route, Link } from 'react-router-dom';



const highQueenIds= {
	bebe:12,
	tyra:24,
	raja:36,
	chad:48,
	sharon:49,
	alaska:62,
	jinkx:63,
	bianca:80,
	violet:94,
	bob:106,
	sasha:124
}

	
class App extends React.Component {
	constructor(){
		super();
		this.state ={
			radio:{
				qOne: '',
				qTwo: '',
				qThree: '',
				qFour: ''
			},
			yourQueen: '',
			queensScore: {
			bebe:0,
			tyra:0,
			raja:0,
			sharon:0,
			jinkx:0,
			bianca:0,
			violet:0,
			bob:0,
			sasha:0,
			chad:0,
			alaska:0
			},
			queenName:'',
			queenImg:'',
			queenQuote:'',
			page:0
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.getQueen = this.getQueen.bind(this);
		this.startQuiz =this.startQuiz.bind(this);
	};	

	getQueen(id){
		ajax({
			url: 'https://proxy.hackeryou.com',
			data: {
				reqUrl:`http://nokeynoshade.party/api/queens/${id}`,
			},
			method: 'GET',
			dataType: 'json'
		}).then((res)=>{
			this.setState({
				queenName: res.name,
				queenImg:res.image_url,
				queenQuote:res.quote	
			})
			console.log(res)
		})
	}

	handleClick(event){
		event.preventDefault();
		let page = this.state.page
		let myPage = page +1
		this.setState({
			page: myPage
		})
		console.log(this.state.page)
	}

	handleChange(event){
		
		const radioState = Object.assign(this.state.radio);
		console.log(radioState[event.target.name])
		radioState[event.target.name] = event.target.dataset.queens;
		console.log(event.target.dataset.queens);
		this.setState({
			radio: radioState
		});
	}

	handleSubmit(event){
		event.preventDefault();
		let answers = this.state.radio 
		for (let answer in answers) {
		    let result = answers[answer].split(',');
			result.forEach((queenName)=>{
				console.log(queenName)
				let queensScore = this.state.queensScore;
				queensScore[queenName] +=1;
				console.log(queensScore);
				this.setState({
					queensScore: queensScore
			})	
		})	    
	}

	

    let highScore=0;
    let highQueen='';
    let queensScore = this.state.queensScore
    for (let queen in queensScore){
    	if (queensScore[queen] >= highScore) {
    		highScore = queensScore[queen]
    		highQueen = queen
    		}
   		} 
    	console.log(highScore, highQueen)
   		console.log('queenId', highQueenIds[highQueen]) 
    	this.getQueen(highQueenIds[highQueen])
    	this.setState({
    		yourQueen: highQueen
    		})   
	}

	startQuiz(){
		console.log("starting")
		this.setState({
			page: 1,
			queenImg: '',
			queenName: '',
			queenQuote: ''
		})


	}

	render (){
		return (
			<div>
				<Header startQuiz={this.startQuiz}/>
				<Form 
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
				radioState={this.state.radio} 
				handleClick={this.handleClick}
				page={this.state.page}
				/>
				<Dynamic 
				queenName={this.state.queenName} 
				queenImg={this.state.queenImg}
				queenQuote={this.state.queenQuote}
				startQuiz={this.startQuiz}
				/>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));







