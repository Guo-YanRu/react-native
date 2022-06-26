import React, {Component} from 'react';
import {AppState, StyleSheet, Text, View} from 'react-native';

class Practice8 extends Component {
  state = {
    appState: AppState.currentState,
  };

  componentDidMount() {
    // 增加監聽事件，在 APP 切換狀態時固定觸發 this.handleAppStateChange 函式改變狀態
    this.eventListener = AppState.addEventListener(
      'change',
      this.handleAppStateChange,
    );
  }

  componentWillUnmount() {
    // 移除監聽事件
    this.eventListener.remove();
  }

  handleAppStateChange = nextAppState => {
    // 監聽當前於「背景執行」切換回「前景執行」時觸發
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      alert('已返回前景運作!');
    }
    this.setState({appState: nextAppState});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          當前 App 狀態為: {this.state.appState === 'active' ? '前景' : '背景'}
          運作
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Practice8;
