import React, { memo } from 'react';
import { Pressable, View } from 'react-native';
import PropTypes from 'prop-types';
import ProfileCard from './ProfileCard';
import images from '../constants/images';
import appStrings from '../constants/strings';
import styles from '../styles/leftCardStyles';

const LeftCard = (props) => {

    const { onProfileCardPress } = props;

    const onPress = () => {
        onProfileCardPress?.(true);
    }

    return (
        <Pressable onPress={onPress} style={styles.leftCard} >
            <ProfileCard image={images.getProfileImage()} title={appStrings.parjanyaAdityaShukla} subTitle={appStrings.sde} />
        </Pressable>
    );
};

LeftCard.propTypes = {
    onProfileCardPress: PropTypes.func,
}

LeftCard.defaultProps = {
    onProfileCardPress: () => {}
}

export default memo(LeftCard)
