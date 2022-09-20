// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, clickedEmojis} = props
  const {id, emojiName, emojiUrl} = emoji

  const onClickEmoji = () => {
    clickedEmojis(id)
  }

  return (
    <li className="emoji-container" onClick={onClickEmoji}>
      <img src={emojiUrl} alt={emojiName} className="emoji" />
    </li>
  )
}

export default EmojiCard
