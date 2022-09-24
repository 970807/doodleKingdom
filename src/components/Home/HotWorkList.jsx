import React from 'react'
import TitleRow from '../common/TitleRow'
import RoundBtn from '../common/RoundBtn'
import WorkList from '../common/WorkList'

export default function HotWorkList(props ) {
  return (
    <div className="hot-work-wrapper">
      <div className="container">
        <div className="title-wrap">
          <TitleRow
            title="热门作品"
            rightBtns={
              <RoundBtn href="https://www.gracg.com/works?type=hot">
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
