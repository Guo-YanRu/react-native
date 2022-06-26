import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Home = () => (
  <ImageBackground
    source={require('./images/background3.jpg')}
    style={styles.container}>
    <Header />
    <Content />

    {/**
     * TODO: 請將您的「學號」及「姓名」帶入 Footer 頁尾元件呈現
     */}
    <Footer studentName="智聯網創意應用團隊" />
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
