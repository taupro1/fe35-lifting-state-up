import React, { Component } from 'react'
import Product from './product'
import data from "./data.json"

export default class ListProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listProduct: data,
            detail: data[0]
        }
    }
    handleProduct = (product) => {
        this.setState({
            detail: product
        })
    }
    renderHtml = () => {
        let { listProduct } = this.state;
        return listProduct.map((product, index) => {
            return (
                <Product product={product} key={index} detailProduct={this.handleProduct} />
            )
        })
    }
    render() {
        let { detail } = this.state
        return (
            <div className="container">
                <div className="row">
                    {this.renderHtml()}
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <img className="img-fluid" src={detail.hinhAnh} alt="" />
                    </div>
                    <div className="col-sm-7">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{detail.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{detail.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{detail.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{detail.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{detail.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{detail.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
