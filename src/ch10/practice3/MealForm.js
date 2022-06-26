import React from 'react';
import {StyleSheet, View, TextInput, Image, Button, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default class MealForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 初始餐點名稱
      name: null,
      // 初始餐點金額
      price: '',
      // 初始餐點說明
      desc: null,
      // 初始餐點圖片路徑
      url: null,
    };
  }

  handleOpenCamera = () => {
    launchCamera({}, this.handleSelectMealImage);
  };

  handleOpenImageLibrary = () => {
    launchImageLibrary({}, this.handleSelectMealImage);
  };

  handleSelectMealImage = response => {
    const {didCancel, assets} = response;
    if (!didCancel) {
      this.setState({url: assets[0].uri});
    }
  };

  // 變更餐點名稱的文字
  handleChangeName = text => {
    this.setState({
      name: text,
    });
  };

  // 變更餐點金額的數字
  handleChangePrice = text => {
    this.setState({
      price: text,
    });
  };

  // 變更餐點說明的文字
  handleChangeDesc = text => {
    this.setState({
      desc: text,
    });
  };

  handleAddPress = () => {
    const {handleAddMeal} = this.props;
    Actions.pop();
    // 呼叫子元件所傳入的事件並將表單的輸入內容帶入參數回傳回去
    handleAddMeal(this.state);
  };

  render() {
    const {name, price, desc, url} = this.state;

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.imageItem}>
            <View style={styles.imageHeader}>
              <Text style={styles.label}>餐點圖片</Text>
              <Image
                source={{uri: !url ? 'https://i.imgur.com/5l6dHWc.png' : url}}
                style={styles.image}
              />
            </View>
            <View>
              <Button title="從相機拍照" onPress={this.handleOpenCamera} />
              <Button
                title="從相簿選擇"
                onPress={this.handleOpenImageLibrary}
              />
            </View>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>餐點名稱</Text>
            <TextInput
              value={name}
              onChangeText={this.handleChangeName}
              style={styles.textInput}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>餐點金額</Text>
            <TextInput
              keyboardType="numeric"
              value={price}
              onChangeText={this.handleChangePrice}
              style={styles.textInput}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>備註事項</Text>
            <TextInput
              value={desc}
              onChangeText={this.handleChangeDesc}
              style={styles.textInput}
            />
          </View>
        </View>
        <Button
          title="新增餐點"
          disabled={!name || !price || !desc || !url}
          onPress={this.handleAddPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  imageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  imageHeader: {flexDirection: 'row', alignItems: 'center'},
  image: {width: 100, height: 100, marginLeft: 15},
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    marginLeft: 15,
  },
  switch: {
    marginLeft: 10,
  },
});
