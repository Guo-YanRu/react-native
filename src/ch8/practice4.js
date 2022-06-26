import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

class Practice4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckedReact: false,
      isCheckedReactNative: false,
      isCheckedAngular: false,
      isCheckedVue: false,
    };
  }

  handleCheckedReactValue = (value) => {
    this.setState({
      isCheckedReact: value,
    });
  };

  handleCheckedReactNativeValue = (value) => {
    this.setState({
      isCheckedReactNative: value,
    });
  };

  handleCheckedAngularValue = (value) => {
    this.setState({
      isCheckedAngular: value,
    });
  };

  handleCheckedVueValue = (value) => {
    this.setState({
      isCheckedVue: value,
    });
  };

  handleSubmit = () => {
    console.log('送出的表單資料：', this.state);
  };

  render() {
    const { isCheckedReact, isCheckedReactNative, isCheckedAngular, isCheckedVue } = this.state;

    return (
      <View style={styles.container}>
        <Text>勾選您擁有的程式技能</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox value={isCheckedReact} onValueChange={this.handleCheckedReactValue} />
          <Text>React</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isCheckedReactNative}
            onValueChange={this.handleCheckedReactNativeValue}
          />
          <Text>React Native</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox value={isCheckedAngular} onValueChange={this.handleCheckedAngularValue} />
          <Text>Angular</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox value={isCheckedVue} onValueChange={this.handleCheckedVueValue} />
          <Text>Vue</Text>
        </View>
        <Button title="送出表單" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Practice4;
