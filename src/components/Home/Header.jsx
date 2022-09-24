import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="left">
          <a href="https://www.gracg.com/" target="_blank" rel="noreferrer">
            <div className="logo"></div>
          </a>
          <ul className="link-list">
            <li className="item light">
              <a
                href="https://www.gracg.com/download"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-mobile icon"></i>
                <span className="text">小程序</span>
              </a>
            </li>
            <li className="item">
              <a
                href="https://weibo.com/poocg"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text">微博</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <i className="fa fa-search icon"></i>
          <ul className="btns">
            <li className="item">
              <span>登录</span>
            </li>
            <li className="item">
              <span>注册</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
