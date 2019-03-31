import React from 'react';
import './playerStats.scss';
import { Card } from 'react-bootstrap';

const PlayerStats = props => {
	const { games, points, assists, rebounds, blocks, freeThrow, steals } = props;
	return (
		<Card className="player-stats-card">
			<Card.Body>
				<Card.Title>2018-19 Game Avg Stats</Card.Title>
				<ul>
					<li className="player-stats">Games played: {games}</li>
					<li className="player-stats">Points: {points}</li>
					<li className="player-stats">Assists: {assists}</li>
					<li className="player-stats">Rebounds: {rebounds}</li>
					<li className="player-stats">Blocks: {blocks}</li>
					<li className="player-stats">Steals: {steals}</li>
					<li className="player-stats">Free Throws: {freeThrow}%</li>
				</ul>
			</Card.Body>
		</Card>
	);
};

export default PlayerStats;

/* TODO
create card
delete stats
*/
