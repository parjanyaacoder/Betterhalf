import React, { memo } from 'react';
import { View } from 'react-native';
import styles from '../styles/rightCardStyles';
import ProfileCard from './ProfileCard';
import images from '../constants/images';
import appStrings from '../constants/strings';

const RightCard = () => {
    return (
        <View style={styles.rightCard} >
            <ProfileCard image={images.getBetterHalfLogo()} title={appStrings.betterHalfAi} subTitle={appStrings.onlyApp} />
        </View>
    );
};

export default memo(RightCard);