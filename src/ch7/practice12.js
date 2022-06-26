import React from 'react';
import {View, Button} from 'react-native';

class Practice12 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    //this.handlePress = this.handlePress.bind(this);
  }
  handlePress = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  };
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
export default Practice12;
