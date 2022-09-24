import React from 'react'
import RoundBtn from '../common/RoundBtn'
import TitleRow from '../common/TitleRow'
import WorkList from '../common/WorkList'

export default function RecentRecommendList(props) {
  return (
    <div className="recent-recommend-wrapper">
      <div className="container">
        <div className="title-wrap">
          <TitleRow
            title="最近推荐作品"
            rightBtns={
              <RoundBtn href="https://www.gracg.com/works/best.more?type=tuijian">
                更多
              </RoundBtn>
            }
          />
        </div>
        <div className="list-wrap">
          <WorkList list={props.list} />
        </div>
      </div>
    </div>
  )
}
