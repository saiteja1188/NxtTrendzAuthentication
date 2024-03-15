// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-header">
      <div className="nav-mobile-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <button type="button" className="nav-mobile-logout-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="nav-mobile-logout"
          />
        </button>
      </div>
      <div className="nav-large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="nav-menu">
          <li className="nav-link">Home</li>
          <li className="nav-link">Products</li>
          <li className="nav-link">Cart</li>
        </ul>
        <button type="button" className="logout-btn">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-mobile-menu">
      <ul className="nav-mobile-list">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-img"
          />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-img"
          />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-img"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
