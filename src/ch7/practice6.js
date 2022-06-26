import React from 'react';
import {View, Text} from 'react-native';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    /*如果建立時未在開頭呼叫 super 繼承 React.Component的props
          在使用 this.props時會跳出錯誤訊息*/
  }
  render() {
    return (
      <View>
        <Text>目前時間:{this.props.date.toLocaleTimeString()}</Text>
      </View>
    );
  }
}
export default () => <Clock date={new Date()} />;
