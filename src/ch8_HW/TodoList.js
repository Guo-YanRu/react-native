import React from 'react';
import {Alert, View, Text, ScrollView, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';
import TodoFrom from './TodoFrom';

//此為父類別
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          type: 'life',
          title: 'Visit doctor',
          subTitle: 'Remember to bring your documents',
          time: '14:43',
          completed: false,
        },
        {
          id: 2,
          type: 'life',
          title: 'Visit pathology lab',
          subTitle: 'Prepare relevant notes',
          time: '16:00',
          completed: true,
        },
        {
          id: 3,
          type: 'work',
          title: 'Attend gym',
          subTitle: 'Wearing sportswear',
          time: '17:20',
          completed: false,
        },
        {
          id: 4,
          type: 'life',
          title: 'Cook food',
          subTitle: 'Go to the supermarket to prepare ingredients',
          time: '19:00',
          completed: false,
        },
        {
          id: 5,
          type: 'entertainment',
          title: 'watching TV',
          subTitle: 'Relax time',
          time: '20:00',
          completed: true,
        },
        {
          id: 6,
          type: 'work',
          title: 'delectus aut autem',
          subTitle: 'quis ut nam facilis et officia qui',
          time: '20:00',
          completed: true,
        },
        {
          id: 7,
          type: 'entertainment',
          title: 'fugiat veniam minus',
          subTitle: 'et porro tempora',
          time: '02:30',
          completed: true,
        },
        {
          id: 8,
          type: 'work',
          title: 'vero rerum temporibus dolor',
          subTitle: 'et doloremque nulla',
          time: '05:08',
          completed: true,
        },
        {
          id: 9,
          type: 'entertainment',
          title: 'ab voluptatum amet voluptas',
          subTitle: 'quo laboriosam deleniti aut qui',
          time: '17:22',
          completed: true,
        },
        {
          id: 10,
          type: 'work',
          title: 'nesciunt totam sit blanditiis sit',
          subTitle: 'laborum aut in quam',
          time: '15:33',
          completed: false,
        },
        {
          id: 11,
          type: 'life',
          title: 'nemo perspiciatis repellat ut',
          subTitle: 'earum doloribus ea doloremque quis',
          time: '20:00',
          completed: true,
        },
        {
          id: 12,
          type: 'work',
          title: 'sint sit aut vero',
          subTitle: 'repellendus veritatis molestias',
          time: '14:20',
          completed: true,
        },
        {
          id: 13,
          type: 'life',
          title: 'totam quia non',
          subTitle: 'doloremque quibusdam asperiores',
          time: '16:51',
          completed: false,
        },
        {
          id: 14,
          type: 'entertainment',
          title: 'totam atque quo nesciunt',
          subTitle: 'tempore ut sint quis recusandae',
          time: '19:08',
          completed: true,
        },
        {
          id: 15,
          type: 'entertainment',
          title: 'sit reprehenderit omnis quia',
          subTitle: 'qui labore est occaecati recusandae aliquid',
          time: '23:33',
          completed: false,
        },
      ],
    };
  }

  handlePress = id => {
    //判斷傳入的待辦 id 與完成狀態是否與 state 內的 todos 陣列資料相同
    //若相同則修改該筆代待辦資料的完成狀態，並透過 setState 更新重新觸發渲染
    const newTodo = this.state.todos.map(todo => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo;
    });
    this.setState({
      todos: newTodo,
    });
  };

  handleAddTodo = todo => {
    Alert.alert('新增成功', '已成功新增待辦事項', [{text: '確定'}]);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          time: new Date().getHours() + ':' + new Date().getMinutes(),
          ...todo,
        },
      ],
    });
  };

  render() {
    //透過 filter 函式將原陣列 (todos) 中的元素逐個過濾判斷「是否完成狀態」後回傳一個新陣列
    const unCompletedTodos = this.state.todos.filter(
      todo => todo.completed === false,
    );
    const CompletedTodos = this.state.todos.filter(
      todo => todo.completed === true,
    );
    return (
      <View style={styles.container}>
        <Text style={styles.title}>代辦事項</Text>
        <TodoFrom handleAddTodo={this.handleAddTodo} />
        <View style={styles.divider} />
        <ScrollView>
          <View>
            <Text style={styles.todoTitle}>未完成項目</Text>
            <View style={styles.todoItems}>
              {unCompletedTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onPress={this.handlePress}
                />
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.todoTitle}>已完成項目</Text>
            <View style={styles.todoItems}>
              {CompletedTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onPress={this.handlePress}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 分割畫面區塊
    backgroundColor: '#F4F4F4', // 版面背景顏色
  },
  title: {
    textAlign: 'center', // 標題文字置中
    fontSize: 25, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    paddingVertical: 10, // 上下垂直內聚大小
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    paddingVertical: 10,
  },
  todoTitle: {
    color: '#5661EC',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    padding: 10, // 上下垂直內聚大小
  },
  todoItems: {
    marginHorizontal: 10, // TodoItems 整個區塊的左右外距大小
  },
});

export default TodoList;
