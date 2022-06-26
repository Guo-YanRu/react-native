import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import blubImg from './images/bulb.png';

/**
 * 設備項目
 * TODO: 實作設備項目內容及其點擊觸發的對應操作事件
 * Tip:
 *     1. 可多善用條件運算式的技巧，判斷設備狀態文字是否加入樣式設定
 */
const DeviceItem = props => {
  /**
   * TODO: 此處僅為提供顯示設備項目而撰寫的範例，請自行實作產生每個設備項目
   */
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.oneData.id, props.oneData.isOpened)}>
      <View
        style={
          props.oneData.isOpened
            ? styles.openDeviceItem
            : styles.closeDeviceItem
        }>
        <Image source={props.oneData.icon} style={styles.deviceImg} />
        <Text style={styles.deviceName}>{props.oneData.name}</Text>
        <View style={styles.deviceStatus}>
          <View
            style={
              props.oneData.isOpened ? styles.openlight : styles.closelight
            }
          />
          <Text
            style={
              props.oneData.isOpened
                ? styles.openlightText
                : styles.closelightText
            }>
            {props.oneData.isOpened ? '已開啟' : '已關閉'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  openDeviceItem: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    elevation: 10,
  },
  closeDeviceItem: {
    backgroundColor: '#AAA',
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    elevation: 10,
  },
  deviceImg: {
    width: 30,
    height: 30,
  },
  deviceName: {
    fontWeight: '600',
    marginTop: 10,
  },
  deviceStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  openlight: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'green',
  },
  closelight: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'gray',
  },
  openlightText: {
    fontSize: 12,
    color: 'green',
    paddingLeft: 5,
  },
  closelightText: {
    fontSize: 12,
    color: 'gray',
    paddingLeft: 5,
  },
});

export default DeviceItem;
