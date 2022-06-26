import React from 'react';
import {View, Text, Button} from 'react-native';

class practice2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handlePlus = () => {
    //我們連續呼叫兩次 setState 去遞增 count，每次呼叫都是相依於上一個遞增結果
    //此時會發現 count 其實只遞增一次，因為 react 會合併多次 setState 以提高效能
    /*
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
    */
    //因此需透過 setState 的 callback 函式獲得解決
    //使用 callback 函式 即可遞增兩次
    this.setState(preState => ({count: preState.count + 1}));
    this.setState(preState => ({count: preState.count + 1}));
  };

  render() {
    return (
      <View>
        <Text>目前 Count:{this.state.count}</Text>
        <Button title="Plus" onPress={this.handlePlus}></Button>
      </View>
    );
  }
}
export default practice2;
