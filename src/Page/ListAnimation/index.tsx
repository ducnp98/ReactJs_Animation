import React from 'react'

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

import './style.css'

const ListAnimation = () => {
  return (
    <div className="list-item-container">
      <div className="list-item-box">
        <div className="box-header">
          <p>List hover </p>
        </div>
        <ul className="list">
          {[...Array(10)].map((x, index) => (
            <li className="item" key={index}>
              <CircleOutlinedIcon fontSize="small" id="select-icon" />
              <div>List item hover effect {x}</div>
              <DeleteOutlinedIcon id="delete-icon" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ListAnimation
