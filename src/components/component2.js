import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <span>{props.text}</span>
    </div>
  )
}

Component2.defaultProps = {
  text: 'Integrate Castle as easily as adding a CAPTCHA',
}

Component2.propTypes = {
  text: PropTypes.string,
}

export default Component2
