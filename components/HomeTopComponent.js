import React from 'react';
import { View } from 'react-native';
import styles from '../styles/HomeTopComponentStyles';
import ProfileCard from './ProfileCard';
import images from '../constants/images';
import appStrings from '../constants/strings';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import TagComponent from './TagComponent';
import colors from '../constants/colors';
import TagConstants from '../constants/tagTypes';
import PropTypes from 'prop-types';

const HomeTopComponent = (props) => {

  const { onTagPress } = props;
  const { tagTypes } = TagConstants;

  return (
    <View style={styles.topComponent} >
      <View style={styles.sixthCircle}></View>
      <View style={styles.fifthCircle}></View>
      <TagComponent onTagPress={onTagPress} image={images.getCharts()} tagType={tagTypes.GROWTH} customTagStyles={{
        backgroundColor: colors.navy,
        borderColor: colors.navyBlue80
       }} />
      <TagComponent onTagPress={onTagPress} text={appStrings.innovation} customContainerStyles={{ 
        top: 315,
        left: 280,
        elevation: 4,
       }} tagType={tagTypes.INNOVATION}
       customTagStyles={{
        backgroundColor: colors.blurYellow45,
        borderColor: colors.blurYellow 
       }}
       />
       <TagComponent onTagPress={onTagPress} text={appStrings.ownership} customContainerStyles={{ 
        top: 50,
        left: 30,
        elevation: 4,
       }} tagType={tagTypes.OWNERSHIP}/>
       <TagComponent onTagPress={onTagPress} image={images.getResults()} customContainerStyles={{ 
        top: 90,
        left: 320,
        elevation: 4
       }}
       customTagStyles={{
        backgroundColor: colors.purple45,
        borderColor: colors.purple80
       }}
       tagType={tagTypes.RESULT_ORIENTED}
       />
       <TagComponent onTagPress={onTagPress} text={appStrings.learning} customContainerStyles={{ 
        top: 310,
        left: 50,
        elevation: 4,
       }} 
       customTagStyles={{
        backgroundColor: colors.pastelPink45,
        borderColor: colors.pastelRed
       }}
       tagType={tagTypes.LEARNING}
       />
       <TagComponent onTagPress={onTagPress} text={appStrings.experiences} customContainerStyles={{ 
        top: 375,
        left: 160,
        elevation: 4,
       }}
       customTagStyles={{
        backgroundColor: colors.lightRed45,
        borderColor: colors.lightRed80
       }} tagType={tagTypes.EXPERIENCES}/>
       <TagComponent onTagPress={onTagPress} image={images.getRocket()} customContainerStyles={{ 
        top: 230,
        left: -20,
        elevation: 4,
       }}
       customTagStyles={{
        backgroundColor: colors.lightGreen20,
        borderColor: colors.lightGreen50
       }}
       tagType={tagTypes.PROGRESS}
        />
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

HomeTopComponent.propTypes = {
  onTagPress: PropTypes.func,
};

HomeTopComponent.defaultProps = {
  onTagPress: () => {},
};


export default HomeTopComponent;
