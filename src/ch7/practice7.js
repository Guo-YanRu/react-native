import React from 'react';
import {View, Text} from 'react-native';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  //元建載入，在元件產生時呼叫，一個元件只會執行一次此方法
  componentDidMount() {
    //新增背景執行的動作
    //setInterval 固定延遲了某段時間之後，才去執行對應的程式碼，然後「不斷循環」
    this.timerId = setInterval(() => {
      console.log('do interval');
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  //元件卸載，在元件被移除或銷毀時呼叫
  componentWillUnmount() {
    //清除背景執行的動作
    clearInterval(this.timerId);
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
