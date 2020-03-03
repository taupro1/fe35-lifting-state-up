import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        let { product } = this.props;
        return (
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top" src={product.hinhAnh} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <button className="btn btn-success" onClick={()=>{this.props.detailProduct(product)}}>Chi tiết</button>
                        <button className="btn btn-danger">Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
