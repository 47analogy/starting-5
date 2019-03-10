import React, { Component } from 'react';
import './App.css';
import TeamList from './components/TeamList/TeamList';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<TeamList />
			</div>
		);
	}
}

export default App;
