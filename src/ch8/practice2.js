import React from 'react';
import {StyleSheet, Button, View, Switch, Text} from 'react-native';

class Practice2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      containerBackgroundColor: '#FFF',
    };
  }

  handleChange = value => {
    this.setState({
      switchValue: value,
      // 當切換開關為 true 時將背景設定為灰色，否則為白色
      containerBackgroundColor: value === true ? '#C0C0C0' : '#FFF',
    });
  };

  handleSubmit = () => {
    console.log('送出的資料：', this.state);
  };

  render() {
    const {switchValue, containerBackgroundColor} = this.state;

    return (
      <View
        style={[styles.container, {backgroundColor: containerBackgroundColor}]}>
        <View style={styles.item}>
          <Text>切換背景</Text>
          <Switch
            value={switchValue}
            onValueChange={this.handleChange}
            style={styles.switch}
          />
        </View>
        <Button title="儲存設定" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  switch: {
    marginLeft: 10,
  },
});

export default Practice2;
