import React from 'react'
import './CourseList.css'

export default function CourseList(props) {
  return (
    <div className="course-list-wrapper">
      <div className="container">
        {props.list.map((item) => (
          <a
            className="item-box"
            key={item.id}
            href={item.linkUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.imgUrl} alt="" />
            <p>{item.title}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
