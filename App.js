import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HomeScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
