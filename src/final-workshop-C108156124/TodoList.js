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
      leftTitle: 'C108156124\n?????????',
      title: '??????????????????',
      rightTitle: '??????',
      onRight: () => {
        Actions.TodoForm({handleAddTodo: this.handleAddTodo});
      },
    });
    //??????????????????
    this.eventListener = AppState.addEventListener(
      'change',
      this.handleAppStateChange,
    );
  }
  componentWillUnmount() {
    //??????????????????
    this.eventListener.remove();
  }
  handleAppStateChange = nextAppState => {
    //??????????????????????????????
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      Alert.alert('??????~', '??????????????????????????????App!', [{text: '??????'}]);
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
    // ?????? filter ?????????????????????todos?????????????????????????????????????????????????????????????????????????????????
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
            <Text style={styles.todoTitle}>???????????????</Text>
            <Text style={styles.todoTip}>(???????????????????????????)</Text>
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
            <Text style={styles.todoTitle}>???????????????</Text>
            <Text style={styles.todoTip}>(???????????????????????????)</Text>
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
    flex: 1, // ??????????????????
    backgroundColor: '#a2d7cf', // ??????????????????
  },

  todoTitle: {
    color: '#008080',
    fontSize: 20, // ??????????????????
    fontWeight: 'bold', // ??????????????????
    padding: 10, // ????????????????????????
  },
  todoTip: {
    color: '#008080',
    fontSize: 15, // ??????????????????
    fontWeight: 'bold', // ??????????????????
    padding: 10, // ????????????????????????
  },
  todoItems: {
    marginHorizontal: 10, // TodoItems ?????????????????????????????????
  },
});
