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
    const {date} = this.state;
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 5}} />

        <AnalogClock
          size={200}
          colorClock="#a2d7cf"
          colorNumber="#000000"
          colorCenter="#00BCD4"
          colorHour="#FF8F00"
          colorMinutes="#FFC400"
          secondHandColor="blue"
          hours={date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}
          minutes={date.getMinutes()}
          seconds={date.getSeconds()}
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
    backgroundColor: '#a2d7cf',
    paddingHorizontal: 10,
  },
});
