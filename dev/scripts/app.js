import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form'
import { 
    BrowserRouter as Router, 
    Route, Link } from 'react-router-dom';

class App extends React.Component {
	render (){
		return (
			<header>
				<img src="assets/rupaul1.jpg" alt="image of RuPaul" className="rupaul__image"/>
				<h1>Who's Your Fairy Drag Mother?</h1>
				<h2>Spill the T to find your drag spirit guide.</h2>
			<header>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

// Queens:

// Create the App component to hold everything
// set up components and and initial state
// components: top level: header, results
// header components: image div (simple), animated speech bubble with questions in it (form)
// RuPaul image component maybe with an animated mouth?
// Speech bubble complex component with dynamic questions being animated, 
// include a button to store that data and call the next question
// Submit quiz or have the dynamic content fire on the completion of the last question
// dynamically append new components to the page based on quiz results
// components include: img, name, season, quote, youtube link

// Quiz questions:
// 1. How much time does it take you to get ready for a night out?
// 2. How much money do you spend on clothes per month
// 3. Do you prefer homecooked meals, take out or fine dining?
// 4. Do you like to argue?
// 5. If you had to choose a lipsync battle song which would it be? Beyonce-Crazy In Love, CeCe Peniston-Finally, Somewhere Over the Rainbow- Judy Garland, Paparrazi-Lady Gaga, Material Girl- Madonna 
// 6. If you had to, would you rather dance, sing or act for an audience?
// 7. On a Saturday night would you rather go to an art gallery wine and cheese, a jazz club or an all-night dance party?
// 8. Do you attract a lot of drama in your personal life?

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




