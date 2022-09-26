import React from 'react'
import './RecentActiveRaceListItem.css'

export default function RecentActiveRaceListItem(props) {
  return (
    <div className="recent-active-race-list-item">
      <a href={props.linkUrl} target="_blank" rel="noreferrer">
        <img src={props.imgUrl} alt="" />
      </a>
      <div className="title-row">{props.title}</div>
      <div className="info-row">
        <i className="icon-gift"></i>
        <span>奖励规模</span>
        <span>{props.awardScale}</span>
      </div>
    </div>
  )
}
