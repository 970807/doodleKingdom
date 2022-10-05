import React from 'react'
import './CopyrightRow.css'

export default function CopyrightRow() {
  return (
    <div className="copyright-row">
      <div className="container">
        <span>Copyright © 2019 涂鸦王国</span>
        <span>
          互联网ICP备案：
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
            桂ICP备20006161号
          </a>
        </span>
      </div>
    </div>
  )
}
