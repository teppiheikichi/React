import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("Hello BC01");
  };

  showMessage = (name) => {
    alert("Hello" + name);
  };

  render() {
    return (
      <div className="container">
        {/*Cách 1 truyền callback trực tiếp */}
        <button
          id="btnClickMe"
          className="btn btn-success"
          onClick={this.handleClick}
        >
          Click Me
        </button>

        <button
          id="btnClickMe"
          className="btn btn-success"
          onClick={this.showMessage.bind(this, "Sỉ")}
        >
          Show Message
        </button>
        {/* Truyền hàm nặc danh */}

        <button onClick={() => {
            this.showMessage('Phú')
            // this.handleClick();
        }}>Show Mess</button>
      </div>
    );
  }
}
