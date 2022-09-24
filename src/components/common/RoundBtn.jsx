import React from 'react'
import './RoundBtn.css'

export default function RoundBtn(props) {
  return (
    <a className="round-btn" target="_blank" {...props}>
      {props.children}
    </a>
  )
}
