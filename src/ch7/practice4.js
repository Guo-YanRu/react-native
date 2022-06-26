import React from 'react';
import {View, Text} from 'react-native';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <View>
        <Text>目前時間:{this.state.date.toLocaleTimeString()}</Text>
      </View>
    );
  }
}
export default () => <Clock />;
