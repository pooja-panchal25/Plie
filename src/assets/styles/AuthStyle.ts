import {StyleSheet, Platform} from 'react-native';
import Colors from './Colors';

export const AuthStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:Colors.white
  },
  logoContainer: {
    backgroundColor: Colors.primarywhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPadding: {
    padding: '20%',
  },
  imgLogo:{
    height:50,
    width:50,
    tintColor:Colors.black
  },
  logoText: {
    fontFamily: 'Comfortaa-Medium',
    color: Colors.black,
    fontSize: 72,
  },
  formContainer: {
    padding: '8%',
    backgroundColor:Colors.white,
  },
  imgContainer: {
    marginVertical: '15%',
  },
  loginTextContainer: {
    paddingVertical: '2%',
    alignSelf: 'flex-end',
  },
  forgotPwdText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: Colors.inputPlaceholder,
  },
  buttonContainer: {
    backgroundColor: Colors.lightGreen,
    alignSelf: 'flex-end',
    paddingVertical: '2%',
    paddingHorizontal: '8%',
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1%',
  },
  registerText: {
    color: Colors.black,
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '10%',
  },
  lines: {
    borderBottomWidth: 0.5,
    borderColor: Colors.black,
    marginTop: '5%',
  },
  signLines: {
    borderWidth: 1,
    borderColor: Colors.black,
  },
  signContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoSize: {
    height: 55,
    width: 55,
    marginHorizontal: 10,
  },
  logoSizeF: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 5,
  },
  socialLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '12%',
  },
  textGuest: {
    color: Colors.black,
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    marginBottom: '5%',
    marginRight: '5%',
    marginTop: '10%',
    alignSelf: 'flex-end',
  },
});
