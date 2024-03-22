import React, { memo } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/profileCardStyles';

const ProfileCardComponent = (props) => {
    const { title, subTitle, image, onPress } = props;

    return (
        <Pressable onPress={onPress} style={styles.profileCard} >
        <Image source={image} style={styles.image} />
        <View style={styles.infoContainer} >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        </Pressable>
    );
};

ProfileCardComponent.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    image: PropTypes.string,
    onPress: PropTypes.func,
};

ProfileCardComponent.defaultProps = {
    title: '',
    subTitle: '',
    image: '',
    onPress: () => {},
};


export default memo(ProfileCardComponent);
