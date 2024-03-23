import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/HomeBottomComponentStyles';
import profileConstants from '../constants/profileConstants';


const HomeBottomComponent = (props) => {

    const { showPersonalProfile } = props; 
    const profile = showPersonalProfile ? profileConstants.personalProfile : profileConstants.betterHalfProfile;

    return (
        <View style={styles.nameContainer}>
            <Text style={styles.title} >{profile.name}</Text>
            {profile?.description.map((desc, index) => 
            <View style={styles.descContainer} >
                <View style={styles.dot} /> 
                <Text key={`${profile.name}_${index}}`} style={styles.description}>{desc}</Text>
            </View>)}
        </View>
    );
}

HomeBottomComponent.propTypes = {
    showPersonalProfile: PropTypes.bool
};

HomeBottomComponent.defaultProps = {
    showPersonalProfile: true
};


export default HomeBottomComponent;
