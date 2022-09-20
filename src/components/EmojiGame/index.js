/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    selectedEmojis: [],
    score: 0,
    topScore: 0,
    gameOver: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickedEmojis = id => {
    const {selectedEmojis} = this.state
    const isSelected = selectedEmojis.find(eleId => eleId === id)
    if (isSelected !== undefined) {
      this.setState(prevState => ({
        gameOver: true,
        topScore:
          prevState.topScore < prevState.score
            ? prevState.score
            : prevState.topScore,
      }))
    } else {
      this.setState(prevState => ({
        selectedEmojis: [...prevState.selectedEmojis, id],
        score: prevState.score + 1,
        gameOver: prevState.score === 11,
      }))
    }
  }

  displayEmojis = () => {
    const shuffleEmojis = this.shuffledEmojisList()
    return (
      <ul className="emojis-container">
        {shuffleEmojis.map(emoji => (
          <EmojiCard
            emoji={emoji}
            key={emoji.id}
            clickedEmojis={this.clickedEmojis}
          />
        ))}
      </ul>
    )
  }

  restartGame = () => {
    this.setState({
      selectedEmojis: [],
      score: 0,
      gameOver: false,
    })
  }

  render() {
    const {gameOver, score, topScore} = this.state

    return (
      <div className="app-container">
        <NavBar gameOver={gameOver} score={score} topScore={topScore} />
        {!gameOver ? (
          this.displayEmojis()
        ) : (
          <WinOrLoseCard score={score} restartGame={this.restartGame} />
        )}
      </div>
    )
  }
}

export default EmojiGame
