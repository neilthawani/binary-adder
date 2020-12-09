import React, { Component } from "react";

class Box extends Component {
    toggleIsOn() {
        this.props.sendDecimalChange(this.props.twoToExp);
    }

    render() {
        return (
          <div className="box-object">
            <div className={this.props.isOn ? "box active" : "box"} onClick={this.toggleIsOn.bind(this)}>
              <h3 className="box-number">
                {this.props.isOn ? "1" : "0"}
              </h3>
            </div>

            <p className="box-label">{Math.pow(2, this.props.twoToExp)}</p>
            <p className="box-label">2<sup>{this.props.twoToExp}</sup></p>
          </div>
        );
    }
}

export default Box;
