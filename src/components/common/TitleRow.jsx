import React from 'react'
import './TitleRow.css'

export default function TitleRow(props) {
  return (
    <div className="title-row-wrapper">
      <div className="title">{props.title}</div>
      <div className="btns">{props.rightBtns}</div>
    </div>
  )
}
