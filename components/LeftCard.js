import React, { memo } from 'react';
import { View } from 'react-native';
import ProfileCard from './ProfileCard';
import images from '../constants/images';
import appStrings from '../constants/strings';
import styles from '../styles/leftCardStyles';

const LeftCard = () => {
    return (
        <View style={styles.leftCard} >
            <ProfileCard image={images.getProfileImage()} title={appStrings.parjanyaAdityaShukla} subTitle={appStrings.sde} />
        </View>
    );
};


export default memo(LeftCard)
