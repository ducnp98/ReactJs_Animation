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
        <div className="button" onClick={() => navigation('BasicAnimation')}>
          Basic Animation
        </div>
      </div>
    </div>
  )
}

export default Page
