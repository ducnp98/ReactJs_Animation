import React from 'react'

import './style.css'

const ButtonRippleAnimation = () => {
  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    var button = document.getElementById('button_ripple')
    // @ts-ignore
    let x = e.clientX - e.target.offsetLeft
    // @ts-ignore
    let y = e.clientY - e.target.offsetTop

    let ripple = document.createElement('span')
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    button?.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 1000)
  }

  return (
    <div className="button_ripple_container">
      <div className="button" onClick={onClick} id="button_ripple">
        Button
      </div>
    </div>
  )
}

export default ButtonRippleAnimation
