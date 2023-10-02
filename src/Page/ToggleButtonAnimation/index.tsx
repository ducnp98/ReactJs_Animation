import React from 'react'

import './style.css'

const ToggleButtonAnimation = () => {
  const leftClick = () => {
    let btn = document.getElementsByClassName('btn-indicator')
    // @ts-ignore
    btn[0].style.left = '0px'
  }

  const rightClick = () => {
    let btn = document.getElementsByClassName('btn-indicator')
    // @ts-ignore
    btn[0].style.left = '110px'
  }

  return (
    <div className="toggle-button-container">
      <div className="form-box">
        <div className="button-box">
          <div className="btn-indicator"></div>
          <button type="button" className="toggle-btn" onClick={leftClick}>
            Left
          </button>
          <button type="button" className="toggle-btn" onClick={rightClick}>
            Right
          </button>
        </div>
      </div>
    </div>
  )
}

export default ToggleButtonAnimation
