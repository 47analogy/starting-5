import React, { Component } from 'react';
import './App.scss';
import PlayerList from './components/PlayerList/PlayerList';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <NavBar /> */}
				<Header />
				<PlayerList />
			</div>
		);
	}
}

export default App;
