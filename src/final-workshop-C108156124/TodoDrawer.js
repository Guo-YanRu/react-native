import React from 'react';
import {
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Platform,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import member from './image/member.png';

export default class TodoDrawer extends React.Component {
  handleRedirectTodoList = () => {
    // 若已於列表畫面，再次點擊則僅關閉 Drawer 視窗
    Actions.currentScene !== 'TodoList'
      ? Actions.push('TodoList')
      : Actions.drawerClose();
  };
  handleOpenTelephone = () => {
    Linking.openURL('tel:02-1234567');
  };

  handleOpenWeb = () => {
    Linking.openURL('https://www.google.com/');
  };

  render() {
    return (
      <View style={styles.drawer}>
        <View style={styles.drawTitleView}>
          <Text style={styles.drawTitleText}>代辦事項管理 App</Text>
          <TouchableOpacity
            style={styles.drawTitleText}
            onPress={() => Actions.drawerClose()}></TouchableOpacity>
        </View>

        <View style={styles.drawTitleView}>
          <Image source={member} style={styles.cancelImage} />
          <Text style={styles.drawerItemText}>~ Welcome here. ~</Text>
        </View>
        <TouchableOpacity
          onPress={this.handleRedirectTodoList}
          style={styles.drawerItemView}>
          <Text style={styles.drawerItemText}>回到我的列表</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.drawTitleView}
          onPress={this.handleOpenWeb}>
          <Text style={styles.drawerItemText}>進入官網</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.drawTitleView}
          onPress={this.handleOpenTelephone}>
          <Text style={styles.drawerItemText}>洽詢客服</Text>
        </TouchableOpacity>
        <View style={styles.drawerItemViewOS}>
          <Text>目前使用的裝置平台：{Platform.OS}</Text>
          <Text>目前使用的裝置版本：{Platform.Version}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#a2d7cf',
  },
  drawTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  drawTitleText: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  cancelImage: {
    width: 50,
    height: 50,
    margin: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  drawerItemView: {
    marginVertical: 10,
  },
  drawerItemViewOS: {
    flex: 1,
    flexDirection: 'column-reverse',
    marginVertical: 10,
  },
  drawerItemText: {
    fontSize: 20,
    marginVertical: 5,
    paddingHorizontal: 15,
  },
});
