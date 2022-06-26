import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import StatusList from './StatusList';
import settingsImg from './images/settings.png';
import weatherImg from './images/weather.png';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 載入所有設備的資料
      // 【進階實作範圍】控制設備列表的對應顯示狀態，即用來控制列表顯示對應狀態的設備（all：全部設備；opened：已開啟設備；closed：已關閉設備）
      displayStatus: 'all',
      mode: 0,
    };
  }

  handleChangeDisplayStatus = mode => {
    const otherType = mode === true ? false : true;
    this.setState({
      mode: mode,
    });
  };

  render() {
    return (
      <ScrollView style={styles.content}>
        <View>
          <Text style={styles.title}>時間 </Text>
          <StatusList
            data={this.state.devices}
            mode={this.state.mode}
            onPress={this.handleChangeDisplayStatus}
          />
        </View>
        <View style={styles.space}></View>
        <View style={styles.iconView}>
          <Text style={styles.title}>設定項目 </Text>
          <Image source={settingsImg} style={styles.icon} />
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>股票查詢</Text>
          <TextInput
            keyboardType="number-pad"
            placeholder="請輸入股票代號"
            defaultValue="2330"
            style={styles.textInput}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>天氣查詢 </Text>
          <Image source={weatherImg} style={styles.icon} />
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>縣市</Text>
          <Picker mode="dropdown" style={styles.picker}>
            <Picker.Item label="高雄市" value="area" />
            <Picker.Item label="台南市" value="area" />
            <Picker.Item label="屏東縣" value="area" />
            <Picker.Item label="花蓮縣" value="area" />
            <Picker.Item label="台中市" value="area" />
          </Picker>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>地區</Text>
          <Picker mode="dropdown" style={styles.picker}>
            <Picker.Item label="燕巢區" value="area" />
            <Picker.Item label="大社區" value="area" />
            <Picker.Item label="楠梓區" value="area" />
            <Picker.Item label="三民區" value="area" />
            <Picker.Item label="左營區" value="area" />
          </Picker>
        </View>
        <Button title="確認送出" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
  },
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    color: '#0066CC',
    fontSize: 25,
    marginBottom: 0,
    fontWeight: 'bold',
  },

  space: {
    height: 150,
  },
  text: {
    fontSize: 20,
    color: '#0066CC',
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    marginLeft: 15,
  },
  picker: {
    width: 150,
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default Content;
