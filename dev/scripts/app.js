import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router, 
    Route, Link } from 'react-router-dom';

class App extends React.Component {
	render (){
		return (
			<div>hi I'm working</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));