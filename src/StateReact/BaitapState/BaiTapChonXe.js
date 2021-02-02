import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    imgSrc: "./img/car/products/red-car.jpg",
  };

  changeColor = (color) => {
    //Thay đổi giá trị hình dựa vào biến màu
    this.setState({
        imgSrc: `/img/car/products/${color}-car.jpg`,
    });
    //Hàm setState thay đổi biến this.state.imgSrc => Đồng thời gọi render lại giao diện
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <img className="w-100" src={this.state.imgSrc} />
          </div>

          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    this.changeColor("red");
                  }}
                > Red car
                </button>
              </div>

              <div className="col-4">
                <button
                  className="btn btn-secondary"
                  onClick={(e) => {
                    this.changeColor("silver");
                  }}
                >silver car
                </button>
              </div>

              <div className="col-4">
                <button
                  className="btn btn-dark"
                  onClick={(e) => {
                    this.changeColor("black");
                  }}
                >black car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
