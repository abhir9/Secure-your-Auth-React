import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className="component4-container">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="component4-image"
      />
      <h5 className="component4-text">{props.heading}</h5>
      <span className="component4-text1">{props.text}</span>
    </div>
  )
}

Component4.defaultProps = {
  imageSrc: '/rocket1.svg',
  imageAlt: 'image',
  heading: 'Network analysis',
  text: 'Spot network of bad user activity',
}

Component4.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Component4
