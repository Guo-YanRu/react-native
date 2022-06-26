import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UnCompletedItem from './UnCompletedItem';

const UnCompletedList = props => {
  return (
    <View>
      <Text style={styles.title}>未完成項目</Text>
      <View style={styles.todoItem}>
        {props.todos.map(todo => (
          <UnCompletedItem key={todo.id} todo={todo} onPress={props.onPress} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    color: '#5661EC',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    padding: 10, // 上下垂直內聚大小
  },
  todoItem: {
    marginHorizontal: 10, // TodoItems 整個區塊的左右外距大小
  },
});

export default UnCompletedList;
