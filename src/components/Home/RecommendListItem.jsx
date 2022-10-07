import React from 'react'
import { Link } from 'react-router-dom'
import './RecommendListItem.css'

export default function RecommendListItem(props) {
  return (
    <div className="recommend-list-item">
      <Link
        className="image-box"
        style={{
          background: `url(${props.coverUrl}) no-repeat center`,
          backgroundSize: 'cover'
        }}
        to={`/work/${props.id}`}
      >
        <div className="icons-wrapper">
          {props.isHot && <i className="icon_work_hot"></i>}
          {props.isRecommend && <i className="icon_work_tuijian"></i>}
        </div>
        <div className="search-btn"></div>
      </Link>
      <div className="info-box">
        <div className="row-1">
          <div className="browse-count">{props.browseCount}</div>
          <div className="fav-count">{props.favConut}</div>
          <div className="comment-count">{props.commentCount}</div>
          {props.pictureCount && (
            <div className="pic-count">{props.pictureCount}图</div>
          )}
        </div>
        <div className="work-name">{props.title}</div>
        <div className="publish-info">
          <div className="left">
            <div
              className="avatar"
              style={{
                background: `url(${props.avatarUrl}) no-repeat`,
                backgroundSize: 'contain'
              }}
            ></div>
            <div className="nickname">{props.nickname}</div>
            {props.isAuth && <i className="icon-auth"></i>}
          </div>
          <div className="right">{props.publishDate}</div>
        </div>
      </div>
    </div>
  )
}
