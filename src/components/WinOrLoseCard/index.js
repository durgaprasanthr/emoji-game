// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, restartGame} = props
  const isWin = score === 12
  const cardImgUrl = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickPlayAgainButton = () => {
    restartGame()
  }

  return (
    <div className="card-container">
      <div className="results-container">
        <h1 className="heading">You {isWin ? 'Won' : 'Lose'}</h1>
        <p className="score-text">{isWin ? 'Best Score' : 'Score'}</p>
        <p className="result-score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgainButton}
        >
          Play Again
        </button>
      </div>
      <img className="img" src={cardImgUrl} alt="result img" />
    </div>
  )
}

export default WinOrLoseCard
