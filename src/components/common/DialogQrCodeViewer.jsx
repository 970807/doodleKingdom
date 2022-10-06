import React, { Component } from 'react'
import './DialogQrCodeViewer.css'

export default class DialogQrCodeViewer extends Component {
  render() {
    return (
      <div className="dialog-qr-code-viewer">
        <div
          className="mask"
          onClick={() => {
            this.props.onMaskClick?.()
          }}
        ></div>
        <div className="dialog-box animation">
          <p className="title">{this.props.title}</p>
          <img src={this.props.imgUrl} alt="" />
        </div>
      </div>
    )
  }
}
