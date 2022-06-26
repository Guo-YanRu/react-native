import React from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';

class Practice6 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>目前使用的裝置平台：{Platform.OS}</Text>
        <Text>目前使用的裝置版本：{Platform.Version}</Text>
        <Text>
          {/* 根據使用的裝置平台顯示不同的文字 */}
          我使用 {Platform.select({android: 'Android', ios: 'iPhone'})}{' '}
          手機我驕傲！
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 根據使用的裝置平台套用不同的背景顏色
    ...Platform.select({
      android: {
        backgroundColor: '#F4F4F4',
      },
      ios: {
        backgroundColor: '#FFF',
      },
    }),
  },
});

export default Practice6;
