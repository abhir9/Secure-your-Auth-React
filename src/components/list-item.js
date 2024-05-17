import React from 'react'

import PropTypes from 'prop-types'

import './list-item.css'

const ListItem = (props) => {
  return (
    <div className="list-item-container">
      <h5 className="list-item-text HeadingThree">{props.newProp}</h5>
      <span>{props.description}</span>
    </div>
  )
}

ListItem.defaultProps = {
  description: 'Integrate Castle as easily as adding a CAPTCHA',
  newProp: 'Lightweight integration',
}

ListItem.propTypes = {
  description: PropTypes.string,
  newProp: PropTypes.string,
}

export default ListItem
