import React from 'react';
import { View } from 'react-native';
import styles from '../styles/HomeTopComponentStyles';
import ProfileCard from './ProfileCard';
import images from '../constants/images';
import appStrings from '../constants/strings';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

const HomeTopComponent = () => {
  return (
    <View style={styles.topComponent} >
      <View style={styles.sixthCircle}></View>
      <View style={styles.fifthCircle}></View>
      <View style={styles.fourthCircle}></View>
      <View style={styles.thirdCircle}></View>
      <View style={styles.secondCircle}></View>
      <View style={styles.firstCircle}></View>
      <View style={styles.cardsV2} >
        <LeftCard />
        <RightCard />
      </View>
      </View>
  );
};

export default HomeTopComponent;
