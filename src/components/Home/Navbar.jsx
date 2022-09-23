import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <ul className="nav-list">
          <li className="nav-item">
            <a
              href="https://www.gracg.com/feed"
              target="_blank"
              rel="noreferrer"
            >
              关注更新
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.gracg.com/works"
              target="_blank"
              rel="noreferrer"
            >
              作品
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.gracg.com/works/best"
              target="_blank"
              rel="noreferrer"
            >
              推荐
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.gracg.com/home/artist"
              target="_blank"
              rel="noreferrer"
            >
              作者
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.gracg.com/hd/list"
              target="_blank"
              rel="noreferrer"
            >
              活动比赛
            </a>
          </li>
          <li className="nav-item droppable">
            <span>插画外包合作平台</span>
            <i className="fa fa-angle-down icon"></i>
            <ul className="dropdown-menu" style={{ width: '138px' }}>
              <li className="dropdown-item">
                <a
                  href="https://pro.gracg.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  首页
                </a>
              </li>
              <li className="dropdown-item">
                <a
                  href="https://pro.gracg.com/art"
                  target="_blank"
                  rel="noreferrer"
                >
                  作品出售
                </a>
              </li>
              <li className="dropdown-item">
                <a
                  href="https://pro.gracg.com/case"
                  target="_blank"
                  rel="noreferrer"
                >
                  插画服务
                </a>
              </li>
              <li className="dropdown-item">
                <a
                  href="https://pro.gracg.com/authors"
                  target="_blank"
                  rel="noreferrer"
                >
                  插画师列表
                </a>
              </li>
              <li className="dropdown-item">
                <a
                  href="https://pro.gracg.com/svip"
                  target="_blank"
                  rel="noreferrer"
                >
                  SVIP权益
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item droppable">
            <span>王国绘画学院</span>
            <i className="fa fa-angle-down icon"></i>
            <ul
              className="dropdown-menu"
              style={{ width: '170px', left: '-26px' }}
            >
              <li className="dropdown-item">
                <a
                  href="https://www.procg.cn/index.php?&m=ke&c=index"
                  target="_blank"
                  rel="noreferrer"
                >
                  直播课程
                </a>
              </li>
              <li className="dropdown-item">
                <a
                  href="https://www.procg.cn/index.php?&m=video&c=index"
                  target="_blank"
                  rel="noreferrer"
                >
                  插画视频
                </a>
              </li>
              <li className="dropdown-item">
                <a
                  href="https://www.procg.cn/index.php?m=teacher"
                  target="_blank"
                  rel="noreferrer"
                >
                  师资力量
                </a>
              </li>
              <li className="dropdown-item">
                <a
                  href="https://www.procg.cn//index.php?m=gallerywork"
                  target="_blank"
                  rel="noreferrer"
                >
                  学员作业
                </a>
              </li>
              <li className="dropdown-item">
                <a
                  href="https://www.procg.cn/index.php?m=howto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="btn">我要报名</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
