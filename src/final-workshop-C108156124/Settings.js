import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Switch,
  Text,
  ImageBackground,
} from 'react-native';
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
      <ImageBackground
        source={require('./image/background3.jpg')}
        style={styles.containerImg}>
        <ScrollView style={styles.container}>
          <View style={{height: 70}} />
          <View style={styles.listItem}>
            <Text style={styles.text}>Wi-Fi</Text>
            <Switch value={wifiEnabled} onValueChange={this.handleChangeWifi} />
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>藍芽</Text>
            <Switch
              value={bluetoothEnabled}
              onValueChange={this.handleChangeBluetooth}
            />
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>定位服務</Text>
            <Switch
              value={locationEnabled}
              onValueChange={this.handleChangeLocation}
            />
          </View>
          <View style={styles.listItem2}>
            <Text style={styles.text}>螢幕亮度</Text>
            <Slider
              minimumValue={0}
              maximumValue={1}
              value={brightness}
              onSlidingComplete={this.handleChangeCompletedBrightness}
            />
          </View>
          <View style={styles.listItem2}>
            <Text style={styles.text}>音量大小</Text>
            <Slider
              minimumValue={0}
              maximumValue={1}
              value={volume}
              onSlidingComplete={this.handleChangeCompletedVolume}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
  },
  container: {
    margin: 5,
    padding: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#FFDEAD',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  listItem2: {
    borderBottomColor: '#FFDEAD',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  slider: {
    width: 100,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#008080',
  },
});

export default Settings;
