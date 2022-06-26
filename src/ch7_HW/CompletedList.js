import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CompletedItem from './CompleteItem';

const CompletedList = props => {
  return (
    <View>
      <Text style={styles.title}>已完成項目</Text>
      <ScrollView>
        {props.todos.map(todo => (
          <CompletedItem
            key={todo.id}
            todo={todo}
            onPress={props.onPress}></CompletedItem>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    color: 'gray',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    padding: 10, // 上下垂直內聚大小
  },
  todoItems: {
    marginHorizontal: 10, // TodoItems 整個區塊的左右外距大小
  },
});
export default CompletedList;
