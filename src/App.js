import React, { Component } from 'react';
import './App.scss';
import PlayerList from './components/PlayerList/PlayerList';
import Header from './components/Header/Header';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<PlayerList />
			</div>
		);
	}
}

export default App;
