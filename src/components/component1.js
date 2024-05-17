import React from 'react'

import PropTypes from 'prop-types'

import Component2 from './component2'
import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <div className="component1-container1">
        <svg viewBox="0 0 1024 1024" className="component1-icon">
          <path d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
        </svg>
      </div>
      <div className="component1-container2">
        <h5 className="component1-text HeadingThree">{props.heading1}</h5>
        <Component2></Component2>
      </div>
    </div>
  )
}

Component1.defaultProps = {
  heading: 'Device Intelligence',
  heading1: 'Device Intelligence ',
}

Component1.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
}

export default Component1
