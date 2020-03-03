import React, { Component } from "react";
import SanPham from "./san-pham.js"
// import data from "./data.json"

export default class DanhSachSanPham extends Component {

  renderHtml = () => {
    let { mangSanPham } = this.props;
    return mangSanPham.map((product, index) => {
      return (
        <SanPham product={product} detailProduct={this.props.detailProduct} key={index} detailAddCart={this.props.detailAddCart}/>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderHtml()}
        </div>
      </div>
    );
  }
}
