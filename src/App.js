import React, { Component } from 'react';
import './App.css';
import TeamList from './components/TeamList/TeamList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TeamList />
			</div>
		);
	}
}

export default App;
