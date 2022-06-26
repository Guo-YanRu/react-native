import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

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
  /**
   * TODO: 此處僅為提供設備顯示狀態項目而撰寫的範例，請自行實作產生每個設備顯示狀態項目
   */
  return (
    <View style={styles.content}>
      <View style={styles.statusItem}>
        <Text>全部設備</Text>
        <Text style={styles.count}>{props.allCount}</Text>
        <Text style={styles.tip}></Text>
      </View>
      <TouchableOpacity onLongPress={() => props.onPress()}>
        <View style={styles.statusItem}>
          <Text>已開啟</Text>
          <Text style={styles.openCount}>{props.tureCount}</Text>
          <Text style={styles.tip}>(長按全部開啟）</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onLongPress={() => props.onPressClose()}>
        <View style={styles.statusItem}>
          <Text>已關閉</Text>
          <Text style={styles.count}>{props.falseCount}</Text>
          <Text style={styles.tip}>（長按全部關閉）</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  statusItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: 110,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 10,
  },
  count: {
    fontSize: 30,
    fontWeight: '600',
  },
  openCount: {
    fontSize: 30,
    color: 'green',
    fontWeight: '600',
  },
  tip: {
    fontSize: 10,
    color: '#C0C0C0',
    alignSelf: 'center',
  },
  selectedItem: {
    borderColor: '#FFCD3A',
  },
});

export default StatusItem;
