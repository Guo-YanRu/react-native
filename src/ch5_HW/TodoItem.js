import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function TodoItem(props) {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.title}>{props.todo.title}</Text>
        <Text style={styles.subTitle}>{props.todo.subTitle}</Text>
      </View>
      <Text style={styles.time}>{props.todo.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row', //設定主軸方向，每行 TodoItem 透過水平(橫向)排列，column 為垂直
    justifyContent: 'space-between', //每行 TodoItem 貼齊左右兩邊，如果上面是垂直就不會有反應
    alignItems: 'center', //垂直置中
    backgroundColor: '#F3F3FA', //區塊內部的顏色
    borderLeftWidth: 5, //左框線粗細，borderRightWidth(右)、borderWidth(全)
    borderLeftColor: '#5151A2', //左框線顏色
    borderRadius: 5, //設定框線圓角弧度
    orderVertical: 10, //區塊上下垂直外距大小，感覺不出來差異
    padding: 10, //區塊四周內距大小
    elevation: 20, //區塊陰影深淺
  },
  title: {
    fontSize: 20, //文字大小
    fontWeight: 'bold', //文字粗細
  },
  subTitle: {
    fontSize: 15, //文字大小
    color: 'gray',
  },
  time: {
    color: 'gray',
  },
});
