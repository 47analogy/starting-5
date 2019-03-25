import React from 'react';
import { Card } from 'react-bootstrap';

const PlayerStats = props => {
	const { games, points, assists, rebounds, blocks, freeThrow, steals } = props;
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Title>2018-19 Player Stats</Card.Title>
					<Card.Text>
						<div className="player-stats">Games played: {games}</div>
						<div className="player-stats">Points: {points}</div>
						<div className="player-stats">Assists: {assists}</div>
						<div className="player-stats">Rebounds: {rebounds}</div>
						<div className="player-stats">Blocks: {blocks}</div>
						<div className="player-stats">Free Throw%: {freeThrow}</div>
						<div className="player-stats">Steals: {steals}</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default PlayerStats;

/* TODO
create card
delete stats
*/
