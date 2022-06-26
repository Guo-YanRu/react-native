import React from 'react';
import {
  StyleSheet,
  View,
  Switch,
  TextInput,
  ImageBackground,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Picker} from '@react-native-picker/picker';

export default class TodoItemUpdate extends React.Component {
  constructor(props) {
    super(props);
    console.log('before update', props);
    this.state = {
      id: props.todo.id,
      type: props.todo.type,
      title: props.todo.title,
      subTitle: props.todo.subTitle,
      time: props.todo.time,
      completed: props.todo.completed,
    };
  }

  // 變更待辦類型的選取值
  handleChangeType = value => {
    this.setState({
      type: value,
    });
  };

  // 變更待辦標題的文字
  handleChangeTitle = text => {
    this.setState({
      title: text,
    });
  };

  // 變更待辦備註的文字
  handleChangeSubTitle = text => {
    this.setState({
      subTitle: text,
    });
  };

  // 變更是否完成的開關值
  handleChangeCompleted = value => {
    this.setState({
      completed: value,
    });
  };

  // 修改待辦按鈕點擊時觸發的 Callback 事件
  handleUpdatePress = () => {
    const {handleUpdateTodo} = this.props;
    // 返回前一個頁面
    Actions.pop();
    // 呼叫子元件所傳入的事件並將表單的輸入內容帶入參數回傳回去
    console.log('after update', this.state);
    handleUpdateTodo(this.state);
    Alert.alert('修改成功', '已成功修改待辦事項', [{text: '確定'}]);
  };

  // 刪除待辦按鈕點擊時觸發的 Callback 事件
  handleDeletePress = () => {
    const {handleDeleteTodo, todo} = this.props;
    // 返回前一個頁面
    Actions.pop();
    // 呼叫子元件所傳入的事件並將表單的輸入內容帶入參數回傳回去
    console.log('after delete', todo.id);
    handleDeleteTodo(todo.id);
    Alert.alert('刪除成功', '已成功刪除待辦事項', [{text: '確定'}]);
  };

  render() {
    const {id, type, title, subTitle, completed} = this.state;

    return (
      <ImageBackground
        source={require('./image/background3.jpg')}
        style={styles.containerImg}>
        <View style={styles.container}>
          <View>
            <View style={{height: 70}} />
            <View style={styles.item}>
              <Text style={styles.label}>待辦類型 :</Text>
              <Picker
                selectedValue={type}
                onValueChange={this.handleChangeType}
                mode="dropdown"
                style={styles.picker}>
                <Picker.Item label="生活" value="life" />
                <Picker.Item label="工作" value="work" />
                <Picker.Item label="娛樂" value="entertainment" />
              </Picker>
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>待辦標題 :</Text>
              <TextInput
                value={title}
                onChangeText={this.handleChangeTitle}
                style={styles.textInput}
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>備註事項 :</Text>
              <TextInput
                value={subTitle}
                onChangeText={this.handleChangeSubTitle}
                style={styles.textInput}
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>是否完成 :</Text>
              <Switch
                value={completed}
                onValueChange={this.handleChangeCompleted}
                style={styles.switch}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              disabled={!title || !subTitle}
              onPress={this.handleUpdatePress}>
              <Text style={styles.buttonText}> 修改待辦 </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              disabled={!title || !subTitle}
              onPress={this.handleDeletePress}>
              <Text style={styles.buttonText}> 刪除 </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 25,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#008080',
  },
  picker: {
    width: 200,
    marginLeft: 20,
    fontSize: 20,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#008080',
    marginLeft: 20,
  },
  switch: {
    marginLeft: 20,
  },
  button: {
    margin: 35,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#008080',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
