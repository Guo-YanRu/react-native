import React from 'react';
import {View, Text} from 'react-native';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  //宣告一個 todos 的陣列資料，記錄所有代辦事項
  todos = [
    {id: 1, title: 'delectus aut autem', completed: false},
    {id: 2, title: 'quis ut nam facilis et officia qui', completed: false},
    {id: 3, title: 'fugiat veniam minus', completed: false},
    {id: 4, title: 'et porro tempora', completed: true},
    {
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
  ];
  //透過render產生代辦清單畫面
  render() {
    return (
      <View>
        {/*
        <Text>代辦事項</Text>
        <Text>ID：{this.todos[0].id}</Text>
        <Text>Title：{this.todos[0].title}</Text>
        <Text>ID：{this.todos[1].id}</Text>
        <Text>Title：{this.todos[1].title}</Text>
        <Text>ID：{this.todos[2].id}</Text>
        <Text>Title：{this.todos[2].title}</Text>
        <Text>ID：{this.todos[3].id}</Text>
        <Text>Title：{this.todos[3].title}</Text>
        <Text>ID：{this.todos[4].id}</Text>
        <Text>Title：{this.todos[4].title}</Text>
        */}
        <Text>代辦事項</Text>
        <View>
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
