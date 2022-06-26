import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class practice3 extends React.Component {
  render() {
    return (
      //內容 超過裝置高度 時 不進行換行。
      /*<View style={{flex: 1, flexWrap: 'nowrap'}}>
        <View style={{width: 100, height: 300, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 300, backgroundColor: 'yellow'}} />
        <View style={{width: 100, height: 300, backgroundColor: 'blue'}} />
      </View>*/

      //內容 超過裝置高度時，將元素以 換行 方式顯示。
      /*<View style={{flex: 1, flexWrap: 'wrap'}}>
        <View style={{width: 100, height: 300, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 300, backgroundColor: 'yellow'}} />
        <View style={{width: 100, height: 300, backgroundColor: 'blue'}} />
      </View>*/

      //內容以 反向 並 (超過裝置高度時) 自動換行 方式顯示。
      <View style={{flex: 1, flexWrap: 'wrap-reverse'}}>
        <View style={{width: 100, height: 300, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 300, backgroundColor: 'yellow'}} />
        <View style={{width: 100, height: 300, backgroundColor: 'blue'}} />
      </View>
    );
  }
}
export default practice3;
