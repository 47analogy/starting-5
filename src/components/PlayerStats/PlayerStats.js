import React from 'react';

const PlayerStats = props => {
	const { games, points, assists, rebounds, blocks, freeThrow, steals } = props;

	return (
		<div>
			<div>Player Stats</div>
			<div className="player-stats">Games Played: {games}</div>
			<div className="player-stats">Points: {points}</div>
			<div className="player-stats">Assists: {assists}</div>
			<div className="player-stats">Rebounds: {rebounds}</div>
			<div className="player-stats">Blocks: {blocks}</div>
			<div className="player-stats">Free Throw %: {freeThrow}</div>
			<div className="player-stats">Steals: {steals}</div>
		</div>
	);
};

export default PlayerStats;

/* TODO
create card
delete stats
*/
