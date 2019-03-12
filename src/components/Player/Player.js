import React, { Component } from 'react';
import PlayerStats from '../PlayerStats/PlayerStats';
import axios from 'axios';

class Player extends Component {
	// state: {
	// 	id: ''
	// };
	// https://www.balldontlie.io/api/v1/teams/<ID>
	componentDidMount() {
		const id = 237;
		axios
			.get(
				`https://www.balldontlie.io/api/v1/stats/?seasons[]=2018&player_ids[]=${id}&per_page=82`
			)
			.then(res => {
				// console.log(res);
				const stats = res.data;
				console.log(stats);
			})
			.catch(err => {
				console.log(err);
			});
	}

	getPlayerID = () => {};

	render() {
		return (
			<div>
				{this.props.playerInfo.map(player => (
					<div key={player.id}>
						<div>
							Name:
							{player.first_name}
							<span> {player.last_name}</span>
						</div>

						<div>Team: {player.team.full_name}</div>
						<div>Position: {player.position}</div>
					</div>
				))}
				<div>
					<PlayerStats />
				</div>
			</div>
		);
	}
}

export default Player;
