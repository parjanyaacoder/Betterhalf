import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

const circleWidth = 290;
const circleHeight = 290;
const circleBorderRadius = 210

const styles = StyleSheet.create({
    topComponent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        padding: 10,
    },
    firstCircle: {
        height: circleHeight,
        width: circleWidth,
        borderRadius: circleBorderRadius,
        backgroundColor: colors.offWhite,
        position: 'absolute'
    },
    secondCircle: {
        height: circleHeight + 3,
        width: circleWidth + 3,
        borderRadius: circleBorderRadius,
        backgroundColor: 'grey',
        position: 'absolute'
    },
    thirdCircle: {
        height: circleHeight + 46,
        width: circleHeight + 46,
        borderRadius: circleBorderRadius,
        backgroundColor: colors.offWhite,
        position: 'absolute',
    },
    fourthCircle: {
        height: circleHeight + 49,
        width: circleHeight + 49,
        borderRadius: circleBorderRadius,
        backgroundColor: 'grey',
        position: 'absolute',
    },
    fifthCircle: {
        height: circleHeight + 92,
        width: circleHeight + 92,
        borderRadius: circleBorderRadius + 20,
        backgroundColor: colors.offWhite,
        position: 'absolute',
    },
    sixthCircle: {
        height: circleHeight + 95,
        width: circleWidth+95,
        borderRadius: circleBorderRadius + 20,
        backgroundColor: 'grey',
    },
    cardsV2: {
        position: 'absolute',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;