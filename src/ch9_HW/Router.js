import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Routes = () => {
  return (
    <Router>
      <Stack key="root" headerLayoutPreset="center">
        <Scene key="TodoList" component={TodoList} title="待辦事項" initial />
        <Scene key="TodoForm" component={TodoForm} title="新增待辦" back />
      </Stack>
    </Router>
  );
};

export default Routes;
