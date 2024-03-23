import React, { memo, useState } from 'react';
import { View } from 'react-native';
import styles from '../styles/HomeScreenStyles'
import HomeTopComponent from '../components/HomeTopComponent';
import HomeMiddleComponent from '../components/HomeMiddleComponent';
import TagConstants from '../constants/tagTypes';

const HomeScreen = () => {

  const [titleText, setTitleText] = useState(null);
  const [subTitleText, setSubTitleText] = useState(null);

  const onTagPress = (tagType) => {
    const tagItem = TagConstants.getTagItemFromType(tagType);
    const { title, subTitle } = tagItem;
    console.log(title, subTitle, tagItem, tagType);
    setTitleText(title);
    setSubTitleText(subTitle);
  }

  return (
    <View style={styles.screen} >
      <HomeTopComponent onTagPress={onTagPress} />
      <HomeMiddleComponent title={titleText} subTitle={subTitleText} />
    </View>
  );
};

export default memo(HomeScreen);
