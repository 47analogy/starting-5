import React from 'react'
import './playerStats.scss'
import { Card } from 'react-bootstrap'

const PlayerStats = props => {
  const { games, points, assists, rebounds, blocks, freeThrow, steals } = props
  return (
    <Card className='player-stats-card'>
      <Card.Body>
        <Card.Title>2018-19 Game Avg Stats</Card.Title>
        <ul className='player-stats'>
          <li>Games played: {games}</li>
          <li>Points: {points}</li>
          <li>Assists: {assists}</li>
          <li>Rebounds: {rebounds}</li>
          <li>Blocks: {blocks}</li>
          <li>Steals: {steals}</li>
          <li>Free Throws: {freeThrow}%</li>
        </ul>
      </Card.Body>
    </Card>
  )
}

export default PlayerStats

/* TODO
delete stats
*/
