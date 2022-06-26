import React from 'react';
import {View, Text} from 'react-native';
import Child from './Chlid';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCallbackTriggered: false,
    };
  }
  handlePress = () => {
    this.setState({
      isCallbackTriggered: true,
    });
  };
  render() {
    return (
      <View>
        {this.state.isCallbackTriggered && (
          <Text style={{fontSize: 18, color: 'green'}}>
            事件 callbaack 已被觸發
          </Text>
        )}
        {!this.state.isCallbackTriggered && (
          <Text style={{fontSize: 18, color: 'red'}}>
            事件 callbaack 尚未被觸發
          </Text>
        )}
        <Child onPress={this.handlePress}></Child>
      </View>
    );
  }
}
export default Parent;
