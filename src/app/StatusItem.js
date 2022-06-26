import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import clockImg from './images/clock.png';
import DigitalClock from './digitalClock';

/**
 * 設備狀態項目
 * TODO:
 *     1. 實作各個設備狀態統計項目內容及其長按後對應的操作事件
 *     2. 【進階實作範圍】實作點擊設備狀態統計項目顯示對應狀態的設備清單
 * Tip:
 *     1. 可多善用參數傳遞的技巧，判斷設備狀態統計項目文字是否加入不同的顯示樣式
 *     2. 【進階實作範圍】可多善用條件運算式的技巧，判斷是否加入樣式設定
 */

const StatusItem = props => {
  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={() => props.onPress(true)}>
        <View
          style={[
            props.mode === true ? styles.tatusItemClick : styles.statusItem,
          ]}>
          <Image source={clockImg} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress(false)}>
        <View
          style={[
            props.mode === false ? styles.tatusItemClick : styles.statusItem,
          ]}>
          <DigitalClock />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  statusItem: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    width: 120,
    height: 110,
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 10,
  },
  tatusItemClick: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    width: 120,
    height: 110,
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 10,
    borderColor: '#0066CC',
    borderWidth: 4,
  },

  selectedItem: {
    borderColor: '#FFCD3A',
  },
  icon: {
    width: 100,
    height: 100,
  },
});

export default StatusItem;
