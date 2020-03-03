import React, { Component } from 'react'
import DanhSachSanPham from './danh-sach-san-pham';
import Modal from './modal';

export default class LiftingStateUpCart extends Component {
    mangSanPham = [
        {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: 'AMOLED, 6.2", Full HD+',
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./img/vsphone.jpg"
        },

        {
            maSP: 2,
            tenSP: "Meizu 16Xs",
            manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
            heDieuHanh: "Android 9.0 (Pie); Flyme",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 7600000,
            hinhAnh: "./img/meizuphone.jpg"
        },

        {
            maSP: 3,
            tenSP: "Iphone XS Max",
            manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
            heDieuHanh: "iOS 12",
            cameraSau: "Chính 12 MP & Phụ 12 MP",
            cameraTruoc: "7 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 27000000,
            hinhAnh: "./img/applephone.jpg"
        }
    ];

    constructor(props) {
        super(props)

        this.state = {
            detail: this.mangSanPham[0],
            mangGioHang: [],
            indexGioHang: 0
        }
    }

    handleProduct = (product) => {
        this.setState({
            detail: product,
        })
    }
    handleAddCart = (product) => {
        let indexGioHang = this.state.indexGioHang;
        let isValid = true
        const sanPham = {
            maSp: product.maSP,
            tenSp: product.tenSP,
            hinhAnh: product.hinhAnh,
            soLuong: 1,
            giaBan: product.giaBan
        }
        let mangGioHang = [...this.state.mangGioHang];
        if (mangGioHang !== []) {
            mangGioHang.map((product, index) => {
                if (product.maSp === sanPham.maSp) {
                    product.soLuong++;
                    isValid = false
                }
            })
        }
        if (isValid) {
            mangGioHang.push(sanPham);
            indexGioHang++
        }
        this.setState({
            mangGioHang,
            indexGioHang
        })
    }

    handleSoLuong = (product, index) => {
        // const sanPham = {
        //     maSp: product.maSp,
        //     tenSp: product.tenSp,
        //     hinhAnh: product.hinhAnh,
        //     soLuong: (product.soLuong - 1),
        //     giaBan: product.giaBan
        // }
        // let mangGioHang = [...this.state.mangGioHang];
        // mangGioHang.map((product) => {
        //     if (product.maSp === sanPham.maSp && sanPham.soLuong > 0) {
        //         product = sanPham;
        //     }
        // })
        let mangGioHang = [...this.state.mangGioHang];
        index ?
            (mangGioHang.map((item) => {
                if (item.maSp === product.maSp) {
                    item.soLuong--;
                }
            }))
            : (mangGioHang.map((item) => {
                if (item.maSp === product.maSp) {
                    item.soLuong++;
                }
            }))
        this.setState({
            mangGioHang
        })
    }

    handleDelete = (product) => {
        let indexGioHang = this.state.indexGioHang;
        let mangGioHang = [...this.state.mangGioHang];
        mangGioHang.map((sanPham, index) => {
            if (sanPham.maSp === product.maSp) {
                mangGioHang.splice(index, 1)
                indexGioHang--
            }
        })
        this.setState({
            mangGioHang,
            indexGioHang
        })
    }
    render() {
        let { detail, indexGioHang } = this.state;
        return (
            <div>
                <h3 className="title">Bài tập giỏ hàng</h3>
                <div className="container">
                    <button
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target="#modelId"
                    >
                        Giỏ hàng ({indexGioHang})
              </button>
                </div>
                <DanhSachSanPham mangSanPham={this.mangSanPham} detailProduct={this.handleProduct} detailAddCart={this.handleAddCart} />
                <Modal gioHang={this.state.mangGioHang} detailSoLuong={this.handleSoLuong} detailDelete={this.handleDelete} />
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
        );
    }
}

