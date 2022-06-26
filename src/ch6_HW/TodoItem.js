import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const completedIcon = 'https://i.imgur.com/jxsdKdh.png';
const unCompletedIcon = 'https://i.imgur.com/zrs3alB.png';

export default function TodoItem(props) {
  return (
    <View
      style={[
        styles.content,
        props.todo.completed
          ? styles.completedBorder
          : styles.unCompletedBorder,
      ]}>
      <View style={styles.imageContent}>
        <Image
          source={{
            uri: props.todo.completed ? completedIcon : unCompletedIcon,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.todoContent}>
        <View>
          <Text
            style={
              props.todo.completed
                ? styles.completedTitle
                : styles.unCompletedTitle
            }>
            {props.todo.title}
          </Text>
          <Text style={styles.subTitle}>{props.todo.subTitle}</Text>
        </View>
        <Text style={styles.time}>{props.todo.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row', //設定主軸方向，每行 TodoItem 透過水平(橫向)排列，column 為垂直
    //justifyContent: 'space-between', //每行 TodoItem 貼齊左右兩邊，如果上面是垂直就不會有反應
    alignItems: 'center', //垂直置中
    backgroundColor: '#F3F3FA', //區塊內部的顏色
    borderLeftWidth: 5, //左框線粗細，borderRightWidth(右)、borderWidth(全)
    //borderLeftColor: '#5151A2', //左框線顏色
    borderRadius: 5, //設定框線圓角弧度
    marginVertical: 5, //區塊上下垂直外距大小
    padding: 10, //區塊四周內距大小
    elevation: 20, //區塊陰影深淺
  },
  subTitle: {
    fontSize: 15, //文字大小
    color: 'gray',
  },
  time: {
    color: 'gray',
  },
  unCompletedBorder: {
    borderLeftColor: '#5661Ec',
  },
  completedBorder: {
    borderLeftColor: 'gray',
  },
  imageContent: {
    flex: 0.1,
  },
  image: {
    width: 30,
    height: 30,
  },
  todoContent: {
    flex: 0.9,
    flexDirection: 'row', //水平軸
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  unCompletedTitle: {
    fontSize: 20,
    fontWeight: 'bold', //設定文字粗細
  },
  completedTitle: {
    color: 'gray',
    fontWeight: 'bold', //設定文字粗細
    fontSize: 20,
    textDecorationLine: 'line-through', //刪除線，underline底線，underline line-through底+刪除線
    fontStyle: 'italic', //斜體
  },
});
