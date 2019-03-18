import React, { Component } from 'react';
import PlayerStats from '../PlayerStats/PlayerStats';
import axios from 'axios';

class Player extends Component {
	state = {
		stats: []
	};

	componentDidMount() {
		if (this.props.playerID) {
			this.getStats();
		}
	}

	getStats = () => {
		axios
			.get(
				`https://www.balldontlie.io/api/v1/stats/?seasons[]=2018&player_ids[]=${
					this.props.playerID
				}&per_page=82`
			)
			.then(res => {
				console.log('c', this.props.playerID);
				const stats = res.data;
				this.setState({ stats: stats.data });
				console.log('stats', this.state.stats);
			})
			.catch(err => {
				console.log(err);
			});
	};

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
					<button onClick={this.getStats} type="button">
						Get Stats
					</button>
					<PlayerStats />
				</div>
			</div>
		);
	}
}

export default Player;
