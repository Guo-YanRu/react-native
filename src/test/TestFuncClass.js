import React from 'react';
import {View, Text} from 'react-native';

class WelcomeClass extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello, {this.props.name}！</Text>
      </View>
    );
  }
}
export default WelcomeClass;
