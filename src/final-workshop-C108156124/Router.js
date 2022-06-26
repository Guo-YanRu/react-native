import React from 'react';
import {Router, Stack, Scene, Drawer, Tabs} from 'react-native-router-flux';
import {Text} from 'react-native';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Settings from './Settings';
import TodoItemUpdate from './TodoItemUpdate';
import TodoDrawer from './TodoDrawer';

const TabIcon = props => {
  return (
    <Text style={{fontSize: 20, color: props.focused ? '#008080' : 'black'}}>
      {props.title}
    </Text>
  );
};

const Routes = () => {
  return (
    <Router>
      <Drawer contentComponent={TodoDrawer}>
        <Tabs
          headerLayoutPreset="center"
          tabBarPosition="bottom"
          showLabel={false}>
          <Stack
            key="root"
            headerLayoutPreset="center"
            title="列表"
            icon={TabIcon}>
            <Scene
              key="TodoList"
              component={TodoList}
              title="待辦事項列表"
              initial
            />
            <Scene
              key="TodoForm"
              component={TodoForm}
              RightTitle="新增待辦事項"
              back
            />
            <Scene
              key="TodoItemUpdate"
              title="更新事項"
              component={TodoItemUpdate}
              back
            />
          </Stack>
          <Scene
            key="Settings"
            title="設定"
            component={Settings}
            icon={TabIcon}
            renderBackButton={null}
          />
        </Tabs>
      </Drawer>
    </Router>
  );
};

export default Routes;
