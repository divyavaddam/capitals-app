import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onCapitalClick = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            className="select-tag"
            id="capitals"
            value={activeCapitalId}
            onChange={this.onCapitalClick}
          >
            {countryAndCapitalsList.map(item => (
              <option
                key={item.id}
                className="capital"
                value={item.id}
                onClick={this.onCapitalClick}
              >
                {item.capitalDisplayText}
              </option>
            ))}
          </select>
          <label className="label" htmlFor="capitals">
            is capital of which country?
          </label>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
