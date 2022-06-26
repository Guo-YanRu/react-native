import React from 'react';
import {StyleSheet, Button, View, TextInput, Text} from 'react-native';

class Practice1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      number: '',
      password: '',
      textarea: '',
    };
  }

  handleChangeText = value => {
    this.setState({
      text: value,
    });
  };

  handleChangeNumber = value => {
    this.setState({
      number: value,
    });
  };

  handleChangePassword = value => {
    this.setState({
      password: value,
    });
  };

  handleChangeTextarea = value => {
    this.setState({
      textarea: value,
    });
  };

  handleSubmit = () => {
    console.log('送出的表單資料：', this.state);
  };

  render() {
    const {text, number, password, textarea} = this.state;

    return (
      <View style={styles.container}>
        <Text>一般文字輸入框</Text>
        <TextInput
          keyboardType="default"
          placeholder="請輸入文字"
          value={text}
          onChangeText={this.handleChangeText}
          style={styles.textInput}
        />
        <Text>數字輸入框</Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="請輸入數字"
          value={number}
          onChangeText={this.handleChangeNumber}
          style={styles.textInput}
        />
        <Text>密碼輸入框</Text>
        <TextInput
          keyboardType="default"
          placeholder="請輸入密碼"
          secureTextEntry
          value={password}
          onChangeText={this.handleChangePassword}
          style={styles.textInput}
        />
        <Text>多行內容的 TextInput</Text>
        <TextInput
          keyboardType="default"
          multiline
          numberOfLines={10}
          placeholder="請輸入內容"
          value={textarea}
          onChangeText={this.handleChangeTextarea}
          style={styles.textInput}
        />
        <Button title="送出表單" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default Practice1;
