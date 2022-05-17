import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './Header.css'

const Header = ({title, onShow, text, color}) => {
  return (
    <div className="task-header">
        <h2>{title}</h2>
        <Button onShow={onShow} text={text} color={color}/>
    </div>
  )   
}

Header.defaultProps = {
  title: 'Task Manager',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header