import React, { Component } from 'react';
import Team from '../Team/Team';

class TeamList extends Component {
	state = {};

	render() {
		return (
			<div>
				TEAM LIST
				<div>
					<Team />
				</div>
			</div>
		);
	}
}

export default TeamList;
