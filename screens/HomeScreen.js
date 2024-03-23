import React, { memo, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from '../styles/HomeScreenStyles'
import HomeTopComponent from '../components/HomeTopComponent';
import HomeMiddleComponent from '../components/HomeMiddleComponent';
import TagConstants from '../constants/tagTypes';
import HomeBottomComponent from '../components/HomeBottomComponent';

const HomeScreen = () => {

  const [titleText, setTitleText] = useState(null);
  const [subTitleText, setSubTitleText] = useState(null);
  const [showPersonalProfile, setShowPersonalProfile] = useState(true);

  const onTagPress = (tagType) => {
    const tagItem = TagConstants.getTagItemFromType(tagType);
    const { title, subTitle } = tagItem;
    setTitleText(title);
    setSubTitleText(subTitle);
  }

  const onProfileCardPress = (value) => {
    setShowPersonalProfile(value);
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.screen} >
          <HomeTopComponent onTagPress={onTagPress} onProfileCardPress={onProfileCardPress} />
          <HomeMiddleComponent title={titleText} subTitle={subTitleText} />
          <HomeBottomComponent showPersonalProfile={showPersonalProfile} />
        </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default memo(HomeScreen);
