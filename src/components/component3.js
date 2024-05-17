import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className="component3-container">
      <svg viewBox="0 0 1024 1024" className="component3-icon">
        <path d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
      </svg>
      <span>{props.text}</span>
    </div>
  )
}

Component3.defaultProps = {
  text: 'Free for 1 user',
}

Component3.propTypes = {
  text: PropTypes.string,
}

export default Component3
