import React, { memo } from 'react';
import { View } from 'react-native';
import styles from '../styles/HomeScreenStyles'
import HomeTopComponent from '../components/HomeTopComponent';

const HomeScreen = () => {
  return (
    <View style={styles.screen} >
      <HomeTopComponent />
    </View>
  );
};

export default memo(HomeScreen);
