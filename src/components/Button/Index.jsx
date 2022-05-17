import React from 'react'
import PropTypes from 'prop-types'
import './Style.css'

const Button = ({text, onShow, color}) => {
  return (
    <>
       <button className="btn-add" onClick={onShow} style={{backgroundColor: color}}>{text}</button> 
    </>
  )
}

Button.defaultProps = {
  text: 'Close'
}

Button.propTypes = {
  text: PropTypes.string,
}

export default Button