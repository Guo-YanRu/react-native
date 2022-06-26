import React from 'react';
import {
  StyleSheet,
  Linking,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

class MealDrawer extends React.Component {
  handleRedirectMealList = () => {
    // 若已於餐點列表畫面但再次點擊則僅關閉 Drawer 視窗
    Actions.currentScene !== 'MealList'
      ? Actions.push('MealList')
      : Actions.drawerClose();
  };

  handleOpenMap = () => {
    Linking.openURL(
      'https://www.google.com/maps/search/?api=1&query=高雄科技大學燕巢校區',
    );
  };

  handleOpenTelephone = () => {
    Linking.openURL('tel:0912345678');
  };

  handleRedirectDeviceFeedback = () => {
    Actions.push('DeviceFeedback', {hideTabBar: true});
  };

  render() {
    return (
      <View style={styles.drawer}>
        <View style={styles.drawTitleView}>
          <Text style={styles.drawTitleText}>餐點追蹤 APP</Text>
          <TouchableOpacity onPress={() => Actions.drawerClose()}>
            <Image
              source={{uri: 'https://i.imgur.com/7TQkIts.png'}}
              style={styles.cancelImage}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={this.handleRedirectMealList}
          style={styles.drawerItemView}>
          <Text style={styles.drawerItemText}>餐點列表</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          onPress={this.handleOpenMap}
          style={styles.drawerItemView}>
          <Text style={styles.drawerItemText}>前往官網</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          onPress={this.handleOpenTelephone}
          style={styles.drawerItemView}>
          <Text style={styles.drawerItemText}>聯絡我們</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          onPress={this.handleRedirectDeviceFeedback}
          style={styles.drawerItemView}>
          <Text style={styles.drawerItemText}>裝置問題回饋</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawer: {
    margin: 10,
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
  },
  cancelImage: {
    width: 20,
    height: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  drawerItemView: {
    marginVertical: 10,
  },
  drawerItemText: {
    fontSize: 16,
  },
});

export default MealDrawer;
