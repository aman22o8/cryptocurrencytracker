// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {mydata} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = mydata
  return (
    <li className="mylist">
      <img className="images" src={currencyLogo} alt={currencyName} />
      <p className="name">{currencyName}</p>
      <p className="name">{usdValue}</p>
      <p className="name">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
