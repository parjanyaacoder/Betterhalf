import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
   infoContainer: {
       backgroundColor: colors.green,
       padding: 18,
   },
   title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white56
   },
   subtitle: {
    color: colors.grey,
   }
});

export default styles;