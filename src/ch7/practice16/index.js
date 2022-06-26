import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Box from './Box';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1, name: 'Item1', type: 'A'},
        {id: 2, name: 'Item2', type: 'A'},
        {id: 3, name: 'Item3', type: 'A'},
        {id: 4, name: 'Item4', type: 'A'},
      ],
    };
  }
  //父元件變更 state 後觸發重新渲染並將資料傳遞給子元件
  handleBoxPress = (id, type) => {
    const otherType = type === 'A' ? 'B' : 'A';
    const newItems = this.state.items.map(item => ({
      ...item,
      type: item.id === id ? otherType : item.type,
    }));
    this.setState({
      items: newItems,
    });
  };
  render() {
    const boxAItem = this.state.items.filter(item => item.type === 'A');
    const boxBItem = this.state.items.filter(item => item.type === 'B');
    return (
      <View style={styles.container}>
        <Box type="A" items={boxAItem} onPress={this.handleBoxPress}></Box>
        <Box type="B" items={boxBItem} onPress={this.handleBoxPress}></Box>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Parent;
