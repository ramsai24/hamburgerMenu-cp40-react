// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div>
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button data-testid="hamburgerIconButton" type="button">
          <GiHamburgerMenu />
        </button>
      }
    >
      {close => (
        <div className="popup">
          <button type="button" onClick={close}>
            <IoMdClose />
          </button>
          <div>
            <button type="button" onClick={close}>
              <Link to="/">
                <AiFillHome />
                Home
              </Link>
            </button>

            <button type="button" onClick={close}>
              <Link to="/about">
                <BsInfoCircleFill />
                About
              </Link>
            </button>
          </div>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
