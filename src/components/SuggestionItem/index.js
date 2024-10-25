import './index.css'

const SuggestionItem = props => {
  const {suggestionsDetails, displaySuggestion} = props
  const {suggestion} = suggestionsDetails
  const onSuggestionDisplay = () => {
    displaySuggestion(suggestion)
  }

  return (
    <li className="suggestion-item-container" onClick={onSuggestionDisplay}>
      <p className="suggestion-text">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
      />
    </li>
  )
}
export default SuggestionItem