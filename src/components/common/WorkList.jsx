import React from 'react'
import './WorkList.css'

export default function WorkList(props) {
  return (
    <div className="work-list-wrapper">
      {props.list.map((item) => (
        <a
          key={item.id}
          className="list-item"
          href={item.linkUrl}
          target="_blank"
          rel="noreferrer"
        >
          <img src={item.imgUrl} alt="" />
        </a>
      ))}
    </div>
  )
}
