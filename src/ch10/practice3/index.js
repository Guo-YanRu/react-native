import React from 'react';
import {Text} from 'react-native';
import {Router, Drawer, Tabs, Stack, Scene} from 'react-native-router-flux';
import MealDrawer from './MealDrawer';
import MealList from './MealList';
import MealDetail from './MealDetail';
import MealForm from './MealForm';
import Setting from './Setting';

const TabIcon = props => (
  // 自定義 Tab 的項目時，props 內已擁有 focused 與 title 資料可用來判斷點擊的 Tab 並標示顏色
  <Text style={{color: props.focused ? '#007AFF' : 'black'}}>
    {props.title}
  </Text>
);

class Practice3 extends React.Component {
  render() {
    return (
      <Router>
        <Drawer contentComponent={MealDrawer}>
          <Tabs
            headerLayoutPreset="center"
            tabBarPosition="bottom"
            showLabel={false}>
            <Stack key="root" title="列表" icon={TabIcon}>
              <Scene
                key="MealList"
                title="餐點列表"
                component={MealList}
                initial
              />
              <Scene
                key="MealDetail"
                title="餐點明細"
                component={MealDetail}
                back
              />
              <Scene
                key="MealForm"
                title="新增餐點"
                component={MealForm}
                back
              />
            </Stack>
            <Scene
              key="Setting"
              title="設定"
              component={Setting}
              icon={TabIcon}
              renderLeftButton={null}
            />
          </Tabs>
        </Drawer>
      </Router>
    );
  }
}

export default Practice3;
