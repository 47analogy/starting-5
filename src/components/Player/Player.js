import React, { Component } from 'react';
import './player.scss';
import PlayerStats from '../PlayerStats/PlayerStats';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

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
				// console.log('c', this.props.playerID);
				const stats = res.data;
				this.setState({ stats: stats.data });
				console.log('stats', this.state.stats);
			})
			.catch(err => {
				console.log(err);
			});
	};

	gamesPyd = () => {
		let gamesPlayed = this.state.stats.length;
		return gamesPlayed;
	};

	avgPts = () => {
		let averagePoints = this.state.stats
			.map(points => points.pts)
			.reduce((tot, points) => {
				return tot + points;
			}, 0);
		averagePoints = (averagePoints / this.state.stats.length).toFixed(1);
		return averagePoints;
	};

	avgRebounds = () => {
		let averageRebounds = this.state.stats
			.map(rebounds => rebounds.reb)
			.reduce((tot, rebounds) => {
				return tot + rebounds;
			}, 0);
		averageRebounds = (averageRebounds / this.state.stats.length).toFixed(1);
		return averageRebounds;
	};

	avgBlocks = () => {
		let avgBlocks = this.state.stats
			.map(blocks => blocks.blk)
			.reduce((tot, blocks) => {
				return tot + blocks;
			}, 0);
		avgBlocks = (avgBlocks / this.state.stats.length).toFixed(1);
		return avgBlocks;
	};

	freeTrws = () => {
		let freethrowAtt = this.state.stats
			.map(freethrow => freethrow.fta)
			.reduce((tot, attempted) => {
				return tot + attempted;
			}, 0);

		console.log('att', freethrowAtt);

		let freethrowMde = this.state.stats
			.map(freethrow => freethrow.ftm)
			.reduce((tot, made) => {
				return tot + made;
			}, 0);

		console.log('made', freethrowMde);

		let freeThrowAvg = ((freethrowMde / freethrowAtt) * 100).toFixed(1);
		return freeThrowAvg;
	};

	avgAst = () => {
		let totalAsists = this.state.stats
			.map(assist => assist.ast)
			.reduce((tot, assist) => {
				return tot + assist;
			}, 0);
		totalAsists = (totalAsists / this.state.stats.length).toFixed(1);
		return totalAsists;
	};

	avgSteals = () => {
		let averageSteals = this.state.stats
			.map(steals => steals.stl)
			.reduce((tot, steals) => {
				return tot + steals;
			}, 0);
		averageSteals = (averageSteals / this.state.stats.length).toFixed(1);
		return averageSteals;
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
					{/* <PlayerStats /> */}
				</div>
				<div className="player-stats">Games Played: {this.gamesPyd()}</div>
				<div className="player-stats">Points: {this.avgPts()}</div>
				<div className="player-stats">Assists: {this.avgAst()}</div>
				<div className="player-stats">Rebounds: {this.avgRebounds()}</div>
				<div className="player-stats">Blocks: {this.avgBlocks()}</div>
				<div className="player-stats">Free Throw %: {this.freeTrws()}</div>
				<div className="player-stats">Steals: {this.avgSteals()}</div>
			</div>
		);
	}
}

export default Player;
