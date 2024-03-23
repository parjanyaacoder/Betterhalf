import React, { memo } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/TagComponentStyles';
import colors from '../constants/colors';

const TagComponent = (props) => {

  const { image, text, animatedStyles, customImageStyles, customContainerStyles, customTextStyles, customTagStyles, onTagPress, tagType } = props;

  const onPress = () => {
    onTagPress(tagType);
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.bgWrapper(20, customContainerStyles)}>
        <View onPress={onPress} style={[styles.tag(colors.blue80, colors.blue45, 20, customTagStyles), animatedStyles]}> 
            <View style={styles.row}>
                {image && (<Image style={styles.image(customImageStyles)} source={image} />)}
                {text && (<Text style={styles.text(colors.offWhite, customTextStyles)}>{text}</Text>)}
            </View>
        </View>
    </TouchableOpacity>
  );
};

TagComponent.propTypes = {
  image: PropTypes.number,
  text: PropTypes.string,
  animatedStyles: PropTypes.object,
  customContainerStyles: PropTypes.object,
  customImageStyles: PropTypes.object,
  customTextStyles: PropTypes.object,
  customTagStyles: PropTypes.object,
  onTagPress: PropTypes.func,
  tagType: PropTypes.string,
};

TagComponent.defaultProps = {
  image: null,
  text: '',
  animatedStyles: {},
  customContainerStyles: {},
  customImageStyles: {},
  customTextStyles: {},
  customTagStyles: {},
  onTagPress: () => {}
};


export default memo(TagComponent);
