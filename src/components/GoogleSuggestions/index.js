import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChageSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const value = searchInput.toLowerCase()
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.toLowerCase().includes(value),
    )
    const displaySuggestion = suggestion => {
      this.setState({searchInput: suggestion})
    }

    return (
      <div className="suggestions-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="google-logo"
        />
        <div className="suggestion-items-card">
          <div className="search-box-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-input"
              value={searchInput}
              onChange={this.onChageSearchInput}
            />
          </div>
          <ul className="suggestions-list">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                suggestionsDetails={eachSuggestion}
                key={eachSuggestion.id}
                displaySuggestion={displaySuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions