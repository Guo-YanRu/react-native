import React from 'react';
import {StyleSheet, View} from 'react-native';
import AnalogClock from 'react-native-clock-analog';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 5}} />

        <AnalogClock
          size={94}
          colorClock="#87cefa"
          colorNumber="#000000"
          colorCenter="#00BCD4"
          colorHour="#FF8F00"
          colorMinutes="#FFC400"
          hour={
            this.state.date.getHours() > 12
              ? this.state.date.getHours() - 12
              : this.state.date.getHours()
          }
          minutes={this.state.date.getMinutes()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
});
