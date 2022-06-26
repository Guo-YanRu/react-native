import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Clock from './Clock';

class ClockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClock: true,
    };
  }
  componentDidMount() {
    //只執行一次，如果要不斷循環用 setInterval()
    setTimeout(() => {
      this.setState({
        showClock: false,
      });
    }, 5000);
  }
  render() {
    return this.state.showClock ? (
      <Clock></Clock>
    ) : (
      <Text>Clock元件已被移除</Text>
    );
  }
}
export default ClockContainer;
