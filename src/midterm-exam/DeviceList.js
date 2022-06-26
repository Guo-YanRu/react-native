import React from 'react';
import {View, StyleSheet} from 'react-native';
import DeviceItem from './DeviceItem';

/**
 * 設備列表
 * TODO: 實作產生多個設備項目
 * Tip:
 *     1. 可善用 array.map() 產生多個設備項目
 */
const DeviceList = props => {
  return (
    <View style={styles.content}>
      {props.data.map(oneData => (
        <DeviceItem
          key={oneData.id}
          oneData={oneData}
          onPress={props.onPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default DeviceList;
