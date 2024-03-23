import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    text: (textColor, customTextStyles) => ({
        color: textColor,
        fontWeight: 'bold',
        marginLeft: 4,
        ...customTextStyles,
    }),
    image: (customImageStyles) => ({
        height: 20,
        width: 20,
        resizeMode: 'cover',
        ...customImageStyles,
    }),
    tag: (borderColor, bgColor, borderRadius, customTagStyles) => ({
        backgroundColor: bgColor,
        borderRadius: borderRadius,
        borderColor: borderColor,
        borderWidth: 2,
        ...customTagStyles
    }),
    row: {
        flexDirection: 'row',
        padding: 6,
    },
    bgWrapper: (borderRadius, customContainerStyles) => ({
        backgroundColor: colors.white,
        position: 'absolute',
        top: -10,
        borderRadius: borderRadius,
        zIndex: 2,
        ...customContainerStyles
    })
});

export default styles