import React from 'react'
import RoundBtn from '../common/RoundBtn'
import RecommendListItem from './RecommendListItem'
import './RecommendList.css'

export default function RecommendList(props) {
  return (
    <div className="recommend-wrapper">
      <div className="container">
        <div className="row">
          <div className="title">首页推荐</div>
          <div className="btns">
            <RoundBtn
              style={{ marginRight: '6px' }}
              href="https://www.gracg.com/works/best.more?type=tuijian"
            >
              推荐
            </RoundBtn>
            <RoundBtn href="https://www.gracg.com/works/best.more?type=jingxuan">
              精选
            </RoundBtn>
          </div>
        </div>
        <div className="list">
          {props.list.map((item) => (
            <RecommendListItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
