import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import UnCompletedList from './UnCompletedList';
import CompletedList from './CompletedList';

//此為父類別
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Visit doctor',
          subTitle: 'Remember to bring your documents',
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
          title: 'watching TV',
          subTitle: 'Relax time',
          time: '20:00',
          completed: true,
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
          time: '17:22',
          completed: true,
        },
        {
          id: 10,
          title: 'nesciunt totam sit blanditiis sit',
          subTitle: 'laborum aut in quam',
          time: '15:33',
          completed: false,
        },
        {
          id: 11,
          title: 'nemo perspiciatis repellat ut',
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
          completed: false,
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
      ],
    };
  }

  handlePress = (id, isCompleted) => {
    //判斷傳入的待辦 id 與完成狀態是否與 state 內的 todos 陣列資料相同
    //若相同則修改該筆代待辦資料的完成狀態，並透過 setState 更新重新觸發渲染
    const newTodo = this.state.todos.map(todo => {
      return todo.id === id ? {...todo, completed: isCompleted} : todo;
    });
    this.setState({
      todos: newTodo,
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
        <ScrollView>
          <UnCompletedList
            todos={unCompletedTodos}
            onPress={this.handlePress}></UnCompletedList>
          <CompletedList
            todos={CompletedTodos}
            onPress={this.handlePress}></CompletedList>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  title: {
    textAlign: 'center', // 標題文字置中
    fontSize: 25, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    paddingVertical: 10, // 上下垂直內聚大小
  },
});
export default TodoList;
