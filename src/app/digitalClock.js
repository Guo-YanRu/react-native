import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class DigitalClock extends React.Component {
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
        <Text style={styles.text}>
          {this.state.date.getHours() < 10
            ? '0' + this.state.date.getHours()
            : this.state.date.getHours()}
        </Text>

        <Text style={styles.text}>
          {this.state.date.getMinutes() < 10
            ? '0' + this.state.date.getMinutes()
            : this.state.date.getMinutes()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 33,
  },
  text: {
    color: 'black',
    fontSize: 40,
    marginBottom: 0,
    fontWeight: 'bold',
    fontFamily: 'DFKai-SB',
  },
});
