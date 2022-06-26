import React from 'react';
import {View, Button} from 'react-native';

class Child extends React.Component {
  render() {
    return (
      <View>
        <Button
          title="點擊我，以觸發父元件的事件 callback"
          onPress={this.props.onPress}></Button>
      </View>
    );
  }
}
export default Child;
