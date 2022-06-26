import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {create} from 'react-test-renderer';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  //宣告一個 todos 的陣列資料，記錄所有代辦事項
  todos = [
    {
      id: 1,
      title: 'Visit doctor',
      subTitle: 'Remeber to bring your documents',
      time: '14:43',
      completed: false,
    },
    {
      id: 2,
      title: 'Visit pathology lab',
      subTitle: 'Prepare relevant notes',
      time: '16:00',
      completed: true,
    },
    {
      id: 3,
      title: 'Attend gym',
      subTitle: 'Wearing sportswear',
      time: '17:20',
      completed: false,
    },
    {
      id: 4,
      title: 'Cook food',
      subTitle: 'Go to the supermarket to prepare ingredients',
      time: '19:00',
      completed: false,
    },
    {
      id: 5,
      title: 'Watching TV',
      subTitle: 'Relax time',
      time: '20:00',
      completed: false,
    },
  ];
  //透過render產生代辦清單畫面
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>代辦事項</Text>
        <View style={styles.todoItems}>
          <TodoItem todo={this.todos[0]} />
          <TodoItem todo={this.todos[1]} />
          <TodoItem todo={this.todos[2]} />
          <TodoItem todo={this.todos[3]} />
          <TodoItem todo={this.todos[4]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //分割畫面區塊
    backgroundColor: '#CCCCFF', //設定背景顏色
  },
  title: {
    textAlign: 'center', //文字置中
    fontSize: 25, //文字大小
    fontWeight: 'bold', //文字粗細體
    paddingVertical: 10, //上下垂直內聚大小
  },
  todoItems: {
    marginHorizontal: 10, //TodoItems整個區塊左右外距大小
  },
});
