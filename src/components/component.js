import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <span>{props.text}</span>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'Integrate Castle as easily as adding a CAPTCHA',
}

AppComponent.propTypes = {
  text: PropTypes.string,
}

export default AppComponent
