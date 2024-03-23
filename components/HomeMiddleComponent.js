import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import { Text, View } from 'react-native';
import styles from '../styles/HomeMiddleComponentStyles';

const HomeMiddleComponent = (props) => {
    const { title, subTitle } = props;
    return (
        <View style={styles.infoContainer} >
            {title && (<Text style={styles.title}>{title}</Text>)}
            {subTitle && (<Text style={styles.subTitle}>{subTitle}</Text>)}
        </View>
    );
};

HomeMiddleComponent.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}

HomeMiddleComponent.defaultProps = {
    title: '',
    subTitle: ''
}



export default memo(HomeMiddleComponent);
