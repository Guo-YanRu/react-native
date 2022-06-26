import React from 'react';
import {Alert, StyleSheet, Button, View} from 'react-native';

class Practice5 extends React.Component {
  handleCloseSystem = () =>
    Alert.alert(
      '關閉系統',
      '是否立即關閉?',
      [
        {
          text: '取消',
          onPress: () => alert('已取消動作!'),
        },
        {text: '確定', onPress: () => alert('系統將於 3 秒後關閉!')},
      ],
      {
        // 訊息訊窗是否可點擊視窗外地方自動取消
        cancelable: true,
        // 當訊息訊窗被自動取消時所觸發的事件
        onDismiss: () => {
          alert('訊息視窗已關閉!');
        },
      },
    );

  handleUpdateSoftware = () =>
    Alert.alert('更新軟體', '已檢測到有更新軟體版本，是否立即進行更新?', [
      {
        text: '稍後提醒我',
        onPress: () => alert('將於 10 分鐘再次提醒!'),
      },
      {
        text: '取消',
        onPress: () => alert('您已取消更新軟體!'),
        style: 'destructive',
      },
      {text: '更新', onPress: () => alert('系統將立即更新!')},
    ]);

  render() {
    return (
      <View style={styles.container}>
        <Button title={'關閉系統'} onPress={this.handleCloseSystem} />
        <View style={styles.divider} />
        <Button
          title={'檢查更新'}
          color="#F00"
          onPress={this.handleUpdateSoftware}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  divider: {
    marginHorizontal: 5,
  },
});

export default Practice5;
