import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
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
    {
      id: 6,
      title: 'delectus aut autem',
      subTitle: 'quis ut nam facilis et officia qui',
      time: '20:00',
      completed: true,
    },
    {
      id: 7,
      title: 'fugiat veniam minus',
      subTitle: 'et porro tempora',
      time: '02:30',
      completed: true,
    },
    {
      id: 8,
      title: 'vero rerum temporibus dolor',
      subTitle: 'et doloremque nulla',
      time: '05:08',
      completed: true,
    },
    {
      id: 9,
      title: 'ab voluptatum amet voluptas',
      subTitle: 'quo laboriosam deleniti aut qui',
      time: '15:33',
      completed: true,
    },
    {
      id: 10,
      title: 'nesciunt totam sit blanditiis sit',
      subTitle: 'laaborum aut in quam',
      time: '20:00',
      completed: false,
    },
    {
      id: 11,
      title: 'nemo perspiciats repellat ut',
      subTitle: 'earum doloribus ea doloremque quis',
      time: '20:00',
      completed: true,
    },
    {
      id: 12,
      title: 'sint sit aut vero',
      subTitle: 'repellendus veritatis molestias',
      time: '14:20',
      completed: true,
    },
    {
      id: 13,
      title: 'totam quia non',
      subTitle: 'doloremque quibusdam asperiores',
      time: '16:51',
      completed: true,
    },
    {
      id: 14,
      title: 'totam atque quo nesciunt',
      subTitle: 'tempore ut sint quis recusandae',
      time: '19:08',
      completed: true,
    },
    {
      id: 15,
      title: 'sit reprehenderit omnis quia',
      subTitle: 'qui labore est occaecati recusandae aliquid',
      time: '23:33',
      completed: false,
    },
  ];
  //透過render產生代辦清單畫面
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>代辦事項</Text>
        <View style={styles.todoItems}>
          {this.todos.map(function (todo) {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </View>
      </ScrollView>
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
