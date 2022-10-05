import React from 'react'
import TitleRow from '../common/TitleRow'
import RoundBtn from '../common/RoundBtn'
import './RecentStartCourseList.css'

export default function RecentStartCourseList(props) {
  return (
    <div className="recent-start-course-wrapper">
      <div className="container">
        <div className="title-wrap">
          <TitleRow
            title="最近开课"
            rightBtns={<RoundBtn href="https://www.procg.cn">更多</RoundBtn>}
          />
        </div>
        <ul className="list-wrap">
          {props.list.map((item) => (
            <li key={item.id}>
              <a href={item.linkUrl} target="_blank" rel="noreferrer">
                <img src={item.imgUrl} alt='' />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
