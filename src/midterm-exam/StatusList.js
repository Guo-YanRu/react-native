import React from 'react';
import {View, StyleSheet} from 'react-native';
import StatusItem from './StatusItem';

/**
 * 設備狀態列表
 * TODO:
 *     1. 實作各個設備狀態統計項目及其對應的操作事件
 *     2. 【進階實作範圍】點擊設備狀態統計項目即顯示對應狀態的設備列表
 *     3. 【進階實作範圍】設備狀態統計項目加入已選取的樣式
 */
const StatusList = props => {
  /*const count = 0;
    const Data = this.state.devices.map(oneData => {
      count = oneData.isOpened ? count + 1 : count;
    });
    */
  return (
    <View>
      <StatusItem
        data={props.data}
        onPress={props.onPress}
        onPressClose={props.onPressClose}
        allCount={props.data.length}
        tureCount={
          props.data.filter(oneData => {
            return oneData.isOpened;
          }).length
        }
        falseCount={
          props.data.filter(oneData => {
            return oneData.isOpened === false;
          }).length
        }
      />
    </View>
  );
};

export default StatusList;
