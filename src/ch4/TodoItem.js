import React from 'react';
import {Text, View} from 'react-native';

export default function TodoItem(props) {
  return (
    <View>
      <Text>ID：{props.todo.id}</Text>
      <Text>Title：{props.todo.title}</Text>
    </View>
  );
}
