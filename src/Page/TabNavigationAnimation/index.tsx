import React from 'react'

import HomeIcon from '@mui/icons-material/Home'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import MessageIcon from '@mui/icons-material/Message'
import Person2Icon from '@mui/icons-material/Person2'
import SettingsIcon from '@mui/icons-material/Settings'

import './style.css'

const TabNavigationAnimation = () => {
  const onClick = (e?: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const listItem = document.querySelectorAll('.list')
    listItem.forEach((item) => {
      item.classList.remove('active')
    })

    e?.currentTarget.classList.add('active')
  }

  return (
    <div className="navigation_container">
      <div className="navigation">
        <ul>
          <li className="list active" onClick={(e) => onClick(e)}>
            <a href="#d">
              <span className="icon">
                <HomeIcon fontSize="large" />
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list" onClick={onClick}>
            <a href="#d">
              <span className="icon">
                <Person2Icon fontSize="large" />
              </span>
              <span className="text">Profile</span>
            </a>
          </li>
          <li className="list" onClick={onClick}>
            <a href="#d">
              <span className="icon">
                <MessageIcon fontSize="large" />
              </span>
              <span className="text">Message</span>
            </a>
          </li>
          <li className="list" onClick={onClick}>
            <a href="#d">
              <span className="icon">
                <InsertPhotoIcon fontSize="large" />
              </span>
              <span className="text">Photos</span>
            </a>
          </li>
          <li className="list" onClick={onClick}>
            <a href="#d">
              <span className="icon">
                <SettingsIcon fontSize="large" />
              </span>
              <span className="text">Settings</span>
            </a>
          </li>
          <div className="indicator"></div>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  )
}

export default TabNavigationAnimation
