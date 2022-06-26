import React from 'react';
import {Text} from 'react-native';

function UserGreeting(props) {
  return <Text>Welcome back, {props.username}!</Text>;
}

function GuestGreeting(props) {
  return <Text>Please sign up.</Text>;
}

function Greeting(props) {
  if (props.isLogin) {
    return <UserGreeting username="Jacky" />;
  }
  return <GuestGreeting />;
}

export default () => <Greeting isLogin={false} />;
