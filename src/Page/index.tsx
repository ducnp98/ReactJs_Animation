import React from 'react'
import { useNavigate } from 'react-router-dom'

import './page.css'

const Page = () => {
  const navigate = useNavigate()
  const navigation = (route: string) => {
    navigate(route)
  }
  return (
    <div className="container">
      <div className="wrap_container">
        <div className="button pink_300" onClick={() => navigation('BasicAnimation')}>
          Basic Animation
        </div>
        <div className="button pink_400" onClick={() => navigation('InputAnimation')}>
          Input Animation
        </div>
        <div className="button pink_500" onClick={() => navigation('ButtonRippleAnimation')}>
          Button Ripple Animation
        </div>
        <div className="button pink_600" onClick={() => navigation('TabNavigationAnimation')}>
          Tab Navigation Animation
        </div>
        <div className="button pink_700" onClick={() => navigation('ToggleButtonAnimation')}>
          Toggle Button Animation
        </div>
        <div className="button pink_800" onClick={() => navigation('Ribbon')}>
          Ribbon
        </div>
        <div className="button pink_900" onClick={() => navigation('ListAnimation')}>
          List Animation
        </div>
      </div>
    </div>
  )
}

export default Page
