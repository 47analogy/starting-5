import React, { Component } from 'react';
import Player from '../Player/Player';
import axios from 'axios';

class PlayerList extends Component {
	state = {
		players: [],
		ID: '',
		playerName: ''
	};
	// https://www.balldontlie.io/api/v1/teams/<ID>
	// componentDidMount() {
	// 	axios
	// 		.get(
	// 			`https://www.balldontlie.io/api/v1/players/?search=${
	// 				this.state.playerName
	// 			}`
	// 		)
	// 		.then(res => {
	// 			// console.log(res);
	// 			const players = res.data;
	// 			this.setState({ players: players.data });
	// 			console.log(players);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// }

	getPlayer = () => {
		axios
			.get(
				`https://www.balldontlie.io/api/v1/players/?search=${
					this.state.playerName
				}`
			)
			.then(res => {
				const players = res.data;
				this.setState({ players: players.data });
			})
			.catch(err => {
				console.log(err);
			});
	};

	handleSearchChange = event => {
		this.setState({ playerName: event.target.value });
	};

	onSearchSubmit = event => {
		// TODO: Fix submit validation
		// if (this.state.playerName && this.state.playerName > 1) {
		// 	if (this.state.playerName.length % 2 === 0) {
		// 		this.getPlayer();
		// 	}
		// }
		this.getPlayer();
		event.preventDefault();
	};

	render() {
		console.log(this.state.players);
		return (
			<div>
				{/* <div>{this.state.playerName}</div> */}
				<div className="search-player">
					<form onSubmit={this.onSearchSubmit}>
						<input
							type="text"
							placeholder="Enter a player name..."
							value={this.state.playerName}
							onChange={this.handleSearchChange}
						/>
					</form>
				</div>
			</div>
		);
	}
}

export default PlayerList;
