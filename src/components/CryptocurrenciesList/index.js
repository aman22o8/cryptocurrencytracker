// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrencyList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.gettheData()
  }

  gettheData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({cryptoData: updatedData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="crypto_container">
            <h1 className="main_heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="image1"
            />
            <div className="my_tracker">
              <div className="header_container">
                <p className="para">Coin Type</p>
                <p className="para">USD</p>
                <p className="para">EURO</p>
              </div>
              <div className="footer_container">
                {cryptoData.map(each => (
                  <CryptocurrencyItem key={each.id} mydata={each} />
                ))}
              </div>
            </div>
            <p className="para">
              WebApp built by Aman{' '}
              <a
                href="https://www.linkedin.com/in/amandhiman22"
                target="_blank"
                rel="noreferrer"
              >
                Click Here
              </a>{' '}
              to see my Linked Profile
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyList
