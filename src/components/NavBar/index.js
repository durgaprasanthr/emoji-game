// Write your code here.
import './index.css'

const NavBar = props => {
  const {gameOver, score, topScore} = props
  const hideScoresClassName = gameOver && 'hide-scores-container'

  return (
    <div className="navbar-container">
      <div className="navbar-content-container">
        <div className="logo-container">
          <img
            className="game-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="game-name">Emoji Game</h1>
        </div>
        <div className={`score-container ${hideScoresClassName}`}>
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
