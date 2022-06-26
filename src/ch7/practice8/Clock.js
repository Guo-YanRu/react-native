import React from 'react';
import {Text, View} from 'react-native';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor_時間元件初始化完成');
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    console.log('componentDidMount_時間元件初始載入完成');
    this.timeId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate_時間元件已完成重新渲染畫面了');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount_時間元件要被卸載了，將timeId移除');
    clearInterval(this.timeId);
  }
  render() {
    return (
      <View>
        <Text>目前時間:{this.state.date.toLocaleTimeString()}</Text>
      </View>
    );
  }
}
export default Clock;
