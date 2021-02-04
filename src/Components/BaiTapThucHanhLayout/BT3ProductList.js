import React, { Component } from "react";
import BT3Item from "./BT3Item";

export class BT3ProductList extends Component {
  render() {
    return (
      <div>
        <div className="row text-center">

          <div className="col-lg-3 col-md-6 mb-4">
              <BT3Item />
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
              <BT3Item />
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
              <BT3Item />
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
              <BT3Item />
          </div>

        </div>
      </div>
    );
  }
}

export default BT3ProductList;
