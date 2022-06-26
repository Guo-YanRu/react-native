import React, {Component} from 'react';
import {
  AppState,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import TodoItem from './TodoItem';
import Clock from './clock';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
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
          title: 'nesciunt totam sit blanditiis sit',
          subTitle: 'laborum aut in quam',
          time: '15:33',
          completed: false,
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      leftTitle: 'C108156124\n郭宴儒',
      title: '我的待辦清單',
      rightTitle: '新增',
      onRight: () => {
        Actions.TodoForm({handleAddTodo: this.handleAddTodo});
      },
    });
    //增加監聽事件
    this.eventListener = AppState.addEventListener(
      'change',
      this.handleAppStateChange,
    );
  }
  componentWillUnmount() {
    //移除監聽事件
    this.eventListener.remove();
  }
  handleAppStateChange = nextAppState => {
    //從背景換成前景時執行
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      Alert.alert('您好~', '歡迎回到代辦事項管理App!', [{text: '確定'}]);
    }
    this.setState({appState: nextAppState});
  };

  handlePress = id => {
    const newTodos = this.state.todos.map(todo => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo;
    });

    this.setState({
      todos: newTodos,
    });
  };

  handleAddTodo = todo => {
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

  handleUpdateTodo = todo => {
    console.log('todo', todo);
    const newTodos = this.state.todos.map(Todo => {
      return Todo.id == todo.id
        ? {
            ...Todo,
            type: todo.type,
            title: todo.title,
            subTitle: todo.subTitle,
            completed: todo.completed,
          }
        : Todo;
    });
    console.log('newTodos', newTodos);
    this.setState({
      todos: newTodos,
    });
  };
  handleDeleteTodo = id => {
    console.log('todoDelete', id);
    const {todos} = this.state;
    const Deleteid = id - 1;
    console.log('Deleteid', Deleteid);
    todos.map(Todo => {
      if (Todo.id === id) {
        todos.splice(Deleteid, 1, 0);
      }
    });
    console.log('after delete', todos);
    this.setState({
      todos: todos,
    });
  };

  handleLongPressTodo = id => {
    console.log(id);
    const {todos} = this.state;
    const todo = todos.find(todo => {
      return todo.id === id;
    });
    console.log(todo);
    Actions.TodoItemUpdate({
      todo: todo,
      handleUpdateTodo: this.handleUpdateTodo,
      handleDeleteTodo: this.handleDeleteTodo,
    });
  };

  render() {
    // 透過 filter 函式將原陣列（todos）中的元素逐個過濾判斷「是否完成狀態」後回傳一個新陣列
    const unCompletedTodos = this.state.todos.filter(
      todo => todo.completed === false,
    );
    const completedTodos = this.state.todos.filter(
      todo => todo.completed === true,
    );
    const {todos} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Clock key="Clock" />
          <View>
            <Text style={styles.todoTitle}>未完成項目</Text>
            <Text style={styles.todoTip}>(長按修改及刪除項目)</Text>
            <View style={styles.todoItems}>
              {unCompletedTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onPress={this.handlePress}
                  onLongPress={this.handleLongPressTodo}
                />
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.todoTitle}>已完成項目</Text>
            <Text style={styles.todoTip}>(長按修改及刪除項目)</Text>
            <View style={styles.todoItems}>
              {completedTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onPress={this.handlePress}
                  onLongPress={this.handleLongPressTodo}
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
    backgroundColor: '#a2d7cf', // 版面背景顏色
  },

  todoTitle: {
    color: '#008080',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    padding: 10, // 上下垂直內聚大小
  },
  todoTip: {
    color: '#008080',
    fontSize: 15, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    padding: 10, // 上下垂直內聚大小
  },
  todoItems: {
    marginHorizontal: 10, // TodoItems 整個區塊的左右外距大小
  },
});
