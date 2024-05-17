import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <nav className="header-nav">
        <div className="header-container">
          <img
            alt={props.pastedImageAlt}
            src={props.pastedImageSrc}
            className="header-pasted-image"
          />
          <div className="header-menu">
            <Link to="/" className="header-navlink Large">
              Product
            </Link>
            <span className="header-text Large">Feature</span>
            <span className="header-text1 Large">Comapny</span>
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <PrimaryPinkButton
                button="Login"
                className=""
              ></PrimaryPinkButton>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path
                  d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink1 Large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink2 Large">
              Home
            </Link>
            <span className="header-text2 Large">Profile</span>
            <span className="header-text3 Large">Coming Soon</span>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now" className=""></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  pastedImageAlt: 'pastedImage',
  pastedImageSrc: '/pastedimage-n5hh-1500w-200w.png',
  rootClassName: '',
}

Header.propTypes = {
  pastedImageAlt: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header
