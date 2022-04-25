import React, { Component } from "react";
import Box from './Box';

class BaseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      decimalValue: 0,
      boxExpOptions: [{
        value: 7,
        isOn: false
      }, {
        value: 6,
        isOn: false
      }, {
        value: 5,
        isOn: false
      }, {
        value: 4,
        isOn: false
      }, {
        value: 3,
        isOn: false
      }, {
        value: 2,
        isOn: false
      }, {
        value: 1,
        isOn: false
      }, {
        value: 0,
        isOn: false
      }]
    };
  }

  sendDecimalChange(value) {
    this.setState(prevState => ({
        boxExpOptions: prevState.boxExpOptions.map((obj) => {
            if (obj.value === value) {
                return {
                    value: value,
                    isOn: !obj.isOn
                }
            } else {
                return obj;
            }
        })
    }));
  }

  decimalValue() {
      return this.state.boxExpOptions.reduce((prev, curr, index, array) => {
          if (curr.isOn) {
              prev += Math.pow(2, curr.value);
          }

          return prev;
      }, 0);
  }

  render() {
      return (
        <div className="content-container hidden-phone">
          <div className="box-container">
            {this.state.boxExpOptions.map((option, index, array) => {
              return (
                <Box
                  key={index}
                  twoToExp={option.value}
                  isOn={option.isOn}
                  sendDecimalChange={this.sendDecimalChange.bind(this)} />
              );
            })}
          </div>

          <div className="decimal-content">
            <span className="decimal-value">{this.decimalValue()}</span>
            <span className="decimal-info">(decimal value)</span>
          </div>

          <div className="feedback-content">
            <span className="feedback-text">
              <a href="mailto:neilthawani@gmail.com">
                Feedback?
              </a>
            </span>
          </div>
        </div>
      );
  }
}

export default BaseComponent;
