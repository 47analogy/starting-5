import React, { Component } from 'react'
import './playerList.scss'
import Player from '../Player/Player'
import axios from 'axios'

class PlayerList extends Component {
  state = {
    players: [],
    id: 0,
    playerName: '',
    isPlayerName: false,
    form: React.createRef()
  }

  componentDidMount () {
    if (this.state.player) {
      this.getPlayer()
    }
  }

  validate = () => {
    this.form.current.reportValidity()
  }

  getPlayer = () => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/players/?search=${
          this.state.playerName
        }`
      )
      .then(res => {
        const players = res.data
        this.setState({ players: players.data })
        this.setState({ id: this.state.players.map(player => player.id) })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleSearchChange = event => {
    this.setState({ playerName: event.target.value })
  }

  onSearchSubmit = event => {
    this.getPlayer()
    this.setState({ isPlayerName: true })
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <div className='search-player'>
          <form ref={this.form} onSubmit={this.onSearchSubmit}>
            <input
              type='text'
              placeholder='Enter a first and last name...'
              value={this.state.playerName}
              onChange={this.handleSearchChange}
              required
              pattern='\w+\s\w+'
              title='Player name should contain a first and last name'
            />
          </form>
        </div>
        <div>
          {this.state.isPlayerName ? (
            <Player
              playerInfo={this.state.players}
              playerID={this.state.id[0]}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

export default PlayerList
