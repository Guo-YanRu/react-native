import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class practice4 extends React.Component {
  render() {
    return (
      //從 起始位置 由左到右開始排列。
      /*<View style={{flex: 1, flexWrap: 'wrap', alignContent: 'flex-start'}}>
        <View style={{width: 100, height: 200, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'orange'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'yellow'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'green'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'blue'}} />
      </View>*/

      //與  flex-start  位置顛倒，將從 右方結束位置 開始排列。
      /*<View style={{flex: 1, flexWrap: 'wrap', alignContent: 'flex-end'}}>
        <View style={{width: 100, height: 200, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'orange'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'yellow'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'green'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'blue'}} />
      </View>*/

      //項目將以 置中 方式排列。
      /*<View style={{flex: 1, flexWrap: 'wrap', alignContent: 'center'}}>
        <View style={{width: 100, height: 200, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'orange'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'yellow'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'green'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'blue'}} />
      </View>*/

      //第一個項目會貼齊 起始位置、最後一個項目貼齊 右方結束位置，其餘項目則 平均分散對齊。
      /*<View style={{flex: 1, flexWrap: 'wrap', alignContent: 'space-between'}}>
        <View style={{width: 100, height: 200, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'orange'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'yellow'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'green'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'blue'}} />
      </View>*/

      //頭尾項目的間距是 其餘項目的一半，而其餘的項目間距則 分散對齊。
      /*<View style={{flex: 1, flexWrap: 'wrap', alignContent: 'space-around'}}>
        <View style={{width: 100, height: 200, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'orange'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'yellow'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'green'}} />
        <View style={{width: 100, height: 200, backgroundColor: 'blue'}} />
      </View>*/

      //延伸填滿 容器內各個項目。
      <View style={{flex: 1, flexWrap: 'wrap', alignContent: 'stretch'}}>
        <View style={{height: 100, backgroundColor: 'red'}} />
        <View style={{height: 100, backgroundColor: 'orange'}} />
        <View style={{height: 100, backgroundColor: 'yellow'}} />
        <View style={{height: 100, backgroundColor: 'green'}} />
        <View style={{height: 100, backgroundColor: 'blue'}} />
      </View>
    );
  }
}
export default practice4;
