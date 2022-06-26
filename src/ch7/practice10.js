import React from 'react';
import {View, Text, Button} from 'react-native';

class practice10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    //為了讓'this' 能在 callback中被使用，這裡的綁定是必要的
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }
  render() {
    return (
      <View>
        <Button
          title={this.state.isToggleOn ? '開啟' : '關閉'}
          onPress={this.handlePress}></Button>
      </View>
    );
  }
}
export default practice10;
