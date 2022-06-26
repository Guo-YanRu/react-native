import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class Practice3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'react',
    };
  }

  handleSelectedValue = value => {
    this.setState({
      selectedValue: value,
    });
  };

  handleSubmit = () => {
    console.log('送出的表單資料：', this.state);
  };

  render() {
    const {selectedValue} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>選擇您喜好的程式語言</Text>
          <Picker
            mode="dropdown"
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              this.handleSelectedValue(itemValue)
            }
            style={{height: 50, width: 150}}>
            <Picker.Item label="React" value="react" />
            <Picker.Item label="ReactNative" value="react_native" />
            <Picker.Item label="Angular" value="angular" />
            <Picker.Item label="Vue" value="vue" />
          </Picker>
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  switch: {
    marginLeft: 10,
  },
});

export default Practice3;
