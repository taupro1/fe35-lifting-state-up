import React, { Component } from "react";

export default class Modal extends Component {

  renderTable = () => {
    let { gioHang, detailSoLuong, detailDelete } = this.props;
    return gioHang.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.maSp}</td>
          <td>{product.tenSp}</td>
          <td>
            <img src={product.hinhAnh} alt="" className="w-50"></img>
          </td>
          <td className="p-0">
            <button onClick={() => { detailSoLuong(product, true) }}>-</button>{product.soLuong}<button onClick={() => { detailSoLuong(product, false) }} >+</button>
          </td>
          <td>{product.giaBan}</td>
          <td>{product.soLuong * product.giaBan}</td>
          <td>
            <button className="btn btn-warning" onClick={()=>{detailDelete(product)}}>Delete</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderTable()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" data-dismiss="modal">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
