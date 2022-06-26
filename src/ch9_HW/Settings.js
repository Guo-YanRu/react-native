import React from 'react';
import {StyleSheet, ScrollView, View, Switch, Text} from 'react-native';
import SystemSetting from 'react-native-system-setting';
import Slider from '@react-native-community/slider';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wifiEnabled: false,
      bluetoothEnable: false,
      locationEnabled: false,
      brightness: 0,
      volume: 0,
    };
  }
  componentDidMount() {
    //取得目前狀態
    SystemSetting.isWifiEnabled().then(isEnabled => {
      this.setState({
        wifiEnabled: isEnabled,
      });
    });
    SystemSetting.isBluetoothEnabled().then(isEnabled => {
      this.setState({
        bluetoothEnable: isEnabled,
      });
    });
    SystemSetting.isLocationEnabled().then(isEnabled => {
      this.setState({
        locationEnabled: isEnabled,
      });
    });
    //0-1
    SystemSetting.getAppBrightness().then(brightness => {
      this.setState({
        brightness: brightness,
      });
    });
    SystemSetting.getVolume().then(volume => {
      this.setState({
        volume: volume,
      });
    });
  }
  //做切換動作
  handleChangeWifi = () => {
    SystemSetting.switchWifi(() => {
      //重新取得狀態
      SystemSetting.isWifiEnabled().then(enable => {
        this.setState({
          wifiEnabled: enable,
        });
      });
    });
  };
  handleChangeBluetooth = () => {
    SystemSetting.switchBluetooth(() => {
      SystemSetting.isBluetoothEnabled().then(enabled => {
        this.setState({
          bluetoothEnable: enabled,
        });
      });
    });
  };
  handleChangeLocation = () => {
    SystemSetting.switchLocation(() => {
      SystemSetting.isLocationEnabled().then(isEnabled => {
        this.setState({
          locationEnabled: isEnabled,
        });
      });
    });
  };
  handleChangeCompletedBrightness = value => {
    this.setState(
      () => ({
        brightness: value,
      }),
      () => {
        SystemSetting.setAppBrightness(value);
      },
    );
  };
  handleChangeCompletedVolume = value => {
    this.setState(
      () => ({
        volume: value,
      }),
      () => {
        SystemSetting.setVolume(value);
      },
    );
  };
  render() {
    const {wifiEnabled, bluetoothEnabled, locationEnabled, brightness, volume} =
      this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.listItem}>
          <Text>Wi-Fi</Text>
          <Switch value={wifiEnabled} onValueChange={this.handleChangeWifi} />
        </View>
        <View style={styles.listItem}>
          <Text>藍芽</Text>
          <Switch
            value={bluetoothEnabled}
            onValueChange={this.handleChangeBluetooth}
          />
        </View>
        <View style={styles.listItem}>
          <Text>定位服務</Text>
          <Switch
            value={locationEnabled}
            onValueChange={this.handleChangeLocation}
          />
        </View>
        <View>
          <Text>螢幕亮度</Text>
          <Slider
            minimumValue={0}
            maximumValue={1}
            value={brightness}
            onSlidingComplete={this.handleChangeCompletedBrightness}
          />
        </View>
        <View>
          <Text>音量大小</Text>
          <Slider
            minimumValue={0}
            maximumValue={1}
            value={volume}
            onSlidingComplete={this.handleChangeCompletedVolume}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#BBFFEE',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  slider: {
    width: 180,
  },
});

export default Settings;
