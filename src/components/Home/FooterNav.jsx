import React from 'react'
import './FooterNav.css'

const listData = [
  {
    title: '关于我们',
    list: [
      {
        name: '关于我们',
        url: 'https://www.gracg.com/about?call=company'
      },
      {
        name: '合作联系',
        url: 'https://www.gracg.com/about?call=service'
      },
      {
        name: '申请认证',
        url: 'https://www.gracg.com/rz'
      }
    ]
  },
  {
    title: '网站政策',
    list: [
      {
        name: '用户协议',
        url: 'https://www.gracg.com/about?call=infos&catid=16'
      },
      {
        name: '隐私政策',
        url: 'https://www.gracg.com/about?call=infos&catid=17'
      },
      {
        name: '版权声明',
        url: 'https://www.gracg.com/about?call=infos&catid=18'
      }
    ]
  },
  {
    title: '帮助',
    list: [
      {
        name: '新手入门',
        url: 'https://www.gracg.com/about/xuexi'
      },
      {
        name: '帮助',
        url: 'https://www.gracg.com/about/help'
      },
      {
        name: '举报',
        url: 'https://www.gracg.com/jubao/my'
      }
    ]
  },
  {
    title: '传送门',
    list: [
      {
        name: '找画师',
        url: 'https://pro.gracg.com'
      },
      {
        name: '王国绘画学院',
        url: 'https://www.procg.cn'
      }
    ]
  }
]

const qrCodeData = [
  {
    name: '微信公众号',
    imgUrl: 'https://photo7n.gracg.com/f08bfba5fbfb95d07713abbf8848c0cd.png'
  },
  {
    name: '王国菌微信',
    imgUrl: 'https://gracg.com/home/wgzQrcode'
  },
  {
    name: '官方小程序',
    imgUrl: 'https://photo7n.gracg.com/944baf3012b6147f1e9289cb4c36e04c.png'
  }
]

export default function FooterNav() {
  return (
    <div className="footer-nav-wrapper">
      <div className="container">
        <div className="left">
          {listData.map((item1) => (
            <div className="list-box" key={item1.title}>
              <p className="title">{item1.title}</p>
              {item1.list.map((item2) => (
                <a
                  className="list-item"
                  key={item2.name}
                  href={item2.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item2.name}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="right">
          {qrCodeData.map((item) => (
            <div className="qr-code-box" key={item.name}>
              <img src={item.imgUrl} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
