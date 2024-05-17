import React from 'react'

import PropTypes from 'prop-types'

import './pasted-image.css'

const PastedImage = (props) => {
  return (
    <div className="pasted-image-container">
      <img
        alt={props.pastedImageAlt}
        src={props.pastedImageSrc}
        className="pasted-image-pasted-image"
      />
    </div>
  )
}

PastedImage.defaultProps = {
  pastedImageSrc: '/pastedimage-zc3-200w.png',
  pastedImageAlt: 'pastedImage',
}

PastedImage.propTypes = {
  pastedImageSrc: PropTypes.string,
  pastedImageAlt: PropTypes.string,
}

export default PastedImage
