import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
   nameContainer: {
    flex: 1,
    padding: 18,
    backgroundColor: colors.skin
   },
   title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.grey_b2,
   },
   description: {
    color: colors.grey_b2,
   },
   descContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 5
   },
   dot: {
    height: 6,
    width: 6,
    borderRadius: 20,
    backgroundColor: colors.grey_d8,
    marginRight: 5,
    marginTop: 8
   }
});

export default styles;