import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './practice1.style';
const listItemStyles = {
  width: 200,
  height: 40,
  backgroundColor: 'green',
  marginBottom: 10,
};

class practice1 extends React.Component {
  render() {
    return (
      <View>
        {/*直接定義：style寫入<View>裡面，JSX語法*/}
        <View
          style={{
            width: 200,
            height: 40,
            backgroundColor: '#C0C0C0',
            marginBottom: 10,
          }}>
          <Text>代辦一</Text>
        </View>
        {/*樣式帶入變數，並在各元件的style屬性內直接引用變數*/}
        <View style={listItemStyles}>
          <Text>代辦二</Text>
        </View>
        {/*樣式物件 另建 檔案管理，及使用 StyleSheet 語法糖來統一管理 樣式物件*/}
        <View style={styles.listItemStyle}>
          <Text>代辦三</Text>
        </View>
        {/*元件的style，可使用陣列[ {...}, {...} ]組合多個樣式物件*/}
        <View style={[styles.listItemStyle, {backgroundColor: 'red'}]}>
          <Text style={{fontSize: 20}}>代辦四</Text>
        </View>
      </View>
    );
  }
}
export default practice1;
