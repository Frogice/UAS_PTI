import React, { Component } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export default class ProgressTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: props.percent || 0
    };
  }

  onIncClick = () => {
    this.setState({
      percent: this.state.percent + 10 < 100 ? this.state.percent + 10 : 100
    });
  };

  render() {
    return (
      <div style={{ display: "flex", margin: "0 0 20px 0" }}>
        <button onClick={this.onIncClick}>+</button>
        <Progress
          percent={this.state.percent}
          status={this.props.status}
          theme={this.props.theme}
          style={
            ({ padding: "0 0  10px 5px" },
            { width: "50%" },
            { margin: "0 5px 5px 5px" })
          }
        />
      </div>
    );
  }

  componentDidMount() {
    this.myIntervaal = setInterval(() => {
      this.setState((prevState) => ({
        percent: prevState.percent - 1
      }));
    }, 10000);
  }
}
