import React from 'react'
import './RecommendListItem.css'

export default function RecommendListItem(props) {
  const goWorkDetail = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="recommend-list-item">
      <div
        className="image-box"
        style={{
          background: `url(${props.coverUrl}) no-repeat center`,
          backgroundSize: 'cover'
        }}
        onClick={() => goWorkDetail(props.linkUrl)}
      >
        <div className="icons-wrapper">
          {props.isHot && <i className="icon_work_hot"></i>}
          {props.isRecommend && <i className="icon_work_tuijian"></i>}
        </div>
        <div className="search-btn"></div>
      </div>
      <div className="info-box">
        <div className="row-1">
          <div className="browse-count">5192</div>
          <div className="fav-count">58</div>
          <div className="comment-count">2</div>
          <div className="pic-count">7图</div>
        </div>
        <div className="work-name">熊店村</div>
        <div className="publish-info">
          <div className="left">
            <div
              className="avatar"
              style={{
                background: `url(https://photo7n.gracg.com/2001349543_3_fbdf4d4c6c40228883d948a07ba33a85.png!50x50) no-repeat`,
                backgroundSize: 'cover'
              }}
            ></div>
            <div className="nickname">周大西</div>
          </div>
          <div className="right">3天前</div>
        </div>
      </div>
    </div>
  )
}
