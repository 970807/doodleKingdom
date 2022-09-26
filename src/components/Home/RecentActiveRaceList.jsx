import React from 'react'
import RoundBtn from '../common/RoundBtn'
import TitleRow from '../common/TitleRow'
import RecentActiveRaceListItem from './RecentActiveRaceListItem'
import './RecentActiveRaceList.css'

export default function RecentActiveRaceList(props) {
  return (
    <div className="recent-active-race-wrapper">
      <div className="container">
        <div className="title-wrap">
          <TitleRow
            title="近期活动比赛"
            rightBtns={
              <RoundBtn href="https://www.gracg.com/huodong">更多</RoundBtn>
            }
          />
        </div>
        <div className="list-wrap">
          {props.list.map((item) => (
            <RecentActiveRaceListItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
