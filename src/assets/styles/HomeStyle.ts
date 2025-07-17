import {StyleSheet, Platform} from 'react-native';
import FontFamily from './FontFamily';
import Colors from './Colors';

export const HomeStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primarywhite,
  },
  container: {
    backgroundColor: Colors.white,
    padding:"8%"
  },
  titleName: {
    fontFamily: 'Roboto-Regular',
    color: Colors.black,
    fontSize: 26,
  },
  subTitle: {
    fontFamily: 'Roboto-Regular',
    color: Colors.inputPlaceholder,
    fontSize: 16,
  },
  BGColor: {
    backgroundColor: Colors.primarywhite,
    paddingHorizontal: '4%',
    paddingTop: '4%',
  },
  eventName: {
    fontFamily: 'Roboto-Regular',
    color: Colors.black,
    fontSize: 14,
  },
  profileImg: {
    height: 90,
    width: 90,
    borderRadius:6,
  },
  eventCity: {
    fontFamily: 'Roboto-Regular',
    color: Colors.inputPlaceholder,
    fontSize: 14,
  },
  eventDate: {
    fontFamily: 'Roboto-Regular',
    color: Colors.lightGreen,
    fontSize: 14,
  },
  eventPrice: {
    fontFamily: 'Roboto-Regular',
    color: Colors.inputPlaceholder,
    fontSize: 14,
  },
  danceText: {
    fontFamily: 'Roboto-Regular',
    color: Colors.black,
    fontSize: 12,
    paddingVertical: '1%',
    paddingHorizontal: '2%',
  },
  typeContainer: {
    backgroundColor: Colors.primaryBlue,
    paddingLeft: '5%',
    borderRadius: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
  },
  listContainer: {
    backgroundColor: Colors.white,
    padding: '2%',
    flex: 1,
    borderRadius: 10,
    marginTop: '4%',
  },
  flexRow: {flexDirection: 'row', flex: 1},
  titleContainer: {flex: 1, marginLeft: 10},
  sideContainer: {flexDirection: 'column', justifyContent: 'space-between'},
  flexEnd: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
  },
});
