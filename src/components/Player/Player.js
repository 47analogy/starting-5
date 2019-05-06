import React, { Component } from 'react';
import './player.scss';
import PlayerStats from '../PlayerStats/PlayerStats';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

class Player extends Component {
	state = {
		stats: []
	};

	componentDidMount() {
		if (this.props.playerID) {
			this.getStats();
		}
	}
	// TODO: Validation
	getStats = () => {
		axios
			.get(
				`https://www.balldontlie.io/api/v1/stats/?seasons[]=2018&player_ids[]=${
					this.props.playerID
				}&per_page=82`
			)
			.then(res => {
				const stats = res.data;
				this.setState({ stats: stats.data });
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
		let freethrowMde = this.state.stats
			.map(freethrow => freethrow.ftm)
			.reduce((tot, made) => {
				return tot + made;
			}, 0);
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
			<div className="player">
				<div className="player-info">
					<Card className="player-info-card">
						{this.props.playerInfo.map(player => (
							<div key={player.id}>
								<Card.Body>
									<Card.Title>Player Info</Card.Title>
									<div>
										Name:&nbsp;
										{player.first_name}
										<span> {player.last_name}</span>
									</div>
									<div>Team: {player.team.full_name}</div>
									<div>Position: {player.position}</div>
								</Card.Body>
							</div>
						))}
					</Card>
					<Button
						className="submit-button"
						onClick={this.getStats}
						variant="primary">
						Get Stats
					</Button>
				</div>
				<div classname="player-stats">
					{/* don't display stats until button is clicked */}
					{this.state.stats.length > 1 && this.getStats ? (
						<PlayerStats
							statsPlayer={this.state.stats}
							games={this.gamesPyd()}
							points={this.avgPts()}
							assists={this.avgAst()}
							rebounds={this.avgRebounds()}
							blocks={this.avgBlocks()}
							freeThrow={this.freeTrws()}
							steals={this.avgSteals()}
						/>
					) : null}
				</div>
			</div>
		);
	}
}

export default Player;
