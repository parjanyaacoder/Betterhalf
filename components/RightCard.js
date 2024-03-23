import React, { memo } from 'react';
import { Pressable, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/rightCardStyles';
import ProfileCard from './ProfileCard';
import images from '../constants/images';
import appStrings from '../constants/strings';

const RightCard = (props) => {

    const { onProfileCardPress } = props;

    const onPress = () => {
        onProfileCardPress?.(false);
    }

    return (
        <Pressable style={styles.rightCard} onPress={onPress} >
            <ProfileCard image={images.getBetterHalfLogo()} title={appStrings.betterHalfAi} subTitle={appStrings.onlyApp} />
        </Pressable>
    );
};

RightCard.propTypes = {
    onProfileCardPress: PropTypes.func,
}

RightCard.defaultProps = {
    onProfileCardPress: () => {}
}

export default memo(RightCard);