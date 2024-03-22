import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    profileCard: {
        flex: 1,
        // position: 'absolute',
        borderRadius: 16,
        borderWidth: 2.5,
        borderColor: colors.black65,
        borderBottomWidth: 1,
        overflow: 'hidden',
    },
    image: {
        resizeMode: 'cover',
        width: 120,
        height: 170,
    },
    title: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
    subTitle: {
        color: colors.white98,
        fontSize: 12,
    },
    infoContainer: {
        paddingHorizontal: 8,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: colors.black15,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    }
});

export default styles