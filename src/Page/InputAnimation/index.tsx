import React from 'react'

import './style.css'
const InputAnimation = () => {
  return (
    <div className="input_container">
      <div className="input_box">
        <input type="text" required />
        <span>First name</span>
      </div>
    </div>
  )
}

export default InputAnimation
