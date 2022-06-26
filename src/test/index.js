/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Welcome from './TestFunc';
import WelcomeClass from './TestFuncClass';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      <Text style={{backgroundColor: 'red'}}>Hello,{'YanRu'}.</Text>
      <Image
        style={{
          width: 412,
          height: 100,
          resizeMode: 'repeat', //顯示完整大小
          backgroundColor: '#C0C0C0',
        }}
        source={require('./image/1.jpg')}
      />

      <Image
        style={{
          width: 412,
          height: 400,
          resizeMode: 'contain', //顯示完整大小
          backgroundColor: '#C0C0C0',
        }}
        source={{
          uri: 'https://i.ppfocus.com/2020/12/5e0c688f85.jpg',
        }}
      />
      <Button
        title="Simple Button"
        color="blue"
        onPress={() => {
          alert('Hello');
        }}
      />

      <TouchableOpacity
        onPress={() => alert('一般點擊')}
        onLongPress={() => alert('長按點擊')}>
        <Text>點擊我！！</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('short Click')}
        onLongPress={() => alert('long Click')}>
        <Text>Click Click</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={function () {
          return alert('short');
        }}
        onLongPress={function () {
          return alert('long');
        }}>
        <Text>Touch me!</Text>
      </TouchableOpacity>
      <Welcome name="YR" />
      <WelcomeClass name="Weeeeee" />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
