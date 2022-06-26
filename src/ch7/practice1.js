import React from 'react';
import {View, Text} from 'react-native';

class practice1 extends React.Component {
  //使用類別中的constructor建構子
  constructor(props) {
    //super呼叫上一層類別也就是React.Component內的props屬性
    super(props);
    /*設定該類別的屬性，this就是指定到使用 practice1 建構出來的物件
      這裡針對那個物件建立一個state的物件屬性，並在裡面設定該類別的值*/
    this.state = {
      name: 'yanru',
      email: 'yanru@gmail.com',
      age: 20,
      items: [1, 2, 3],
    };
  }

  /*在class類別裡設定componentDidMount()方法的話
    會在該class建構完組件的時候被執行*/
  //加入組件建構完成後執行的事件
  componentDidMount() {
    //將item資料複製出來，同時加入新資料
    const newItems = [...this.state.items, 4];
    // 原本的 state 會被合併，僅傳入的值會被取代，而新的值則會被新增
    // 變更後：state = { name: "Chris", email: "Steven@gmail.com", age: 28, sex: 'male' }
    // 變更 state 務必使用  this.setState()  方法，不可直接變更 state 的值。
    this.setState({
      name: 'Chris',
      gender: 'male',
      items: newItems,
    });
  }
  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>
        <Text>{this.state.gender}</Text>
        <Text>{this.state.items}</Text>
      </View>
    );
  }
}

export default practice1;
