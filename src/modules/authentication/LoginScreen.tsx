import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AuthStyle} from '../../assets/styles/AuthStyle';
import Colors from '../../assets/styles/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import {Input} from '../../components';
import PasswordInput from '../../components/PasswordInput';
import {IMAGE} from '../../assets/styles/Images';
import {loginUserRequest} from './redux/action';
import FormData from 'form-data';
import Loader from '../../components/Loader';

const LoginScreen = (props: { navigation: any; }) => {
    const isLoading = useSelector(state => state.auth?.isLoading);
  
  const [txtUsername, setTxtUsername] = useState(
    'testpracticaluser001@mailinator.com',
  );

  const [isUsernameError, setIsUsernameError] = useState(false);
  const [UsernameValidMsg, setUsernameValidMsg] = useState('');
  const [txtPassword, setTxtPassword] = useState('Test@123');

  const [passwdValidMsg, setPasswdValidMsg] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const dispatch = useDispatch();

  const showPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const onChangeUsername = (text: React.SetStateAction<string>) => {
    setTxtUsername(text);
    setIsUsernameError(false);
  };
  const onChangePassword = (text: React.SetStateAction<string>) => {
    setTxtPassword(text);
    setIsPasswordError(false);
  };
  const gotoHomeScreen = () => {
    var data = new FormData();
    data.append('email', txtUsername);
    data.append('password', txtPassword);
    dispatch(loginUserRequest(data, props.navigation));
  };
  return (

    <View style={[AuthStyle.mainContainer]}>
      <Loader isLoading={isLoading} />
      <StatusBar
        barStyle={'dark-content'}
        animated={true}
        backgroundColor={Colors.primarywhite}
      />
      <ScrollView>
        <View style={[AuthStyle.logoContainer]}>
          <Text style={[AuthStyle.logoText,{marginTop:20}]}>{'Pliē'}</Text>
          <View style={[AuthStyle.imgContainer]}>
            <Image source={IMAGE.logoImg} style={[AuthStyle.imgLogo]}/>
          </View>
        </View>
        <View style={[AuthStyle.formContainer]}>
          <Input
            label={'Email'}
            value={txtUsername}
            placeholderText={'email@email.com'}
            blurOnSubmit={false}
            autoCapitalize="none"
            keyboardType={'email-address'}
            isValidationShow={isUsernameError}
            validateMesssage={UsernameValidMsg}
            maxLength={40}
            onChangeText={(text: any) => onChangeUsername(text)}
            returnKeyType="next"      
            />
          <PasswordInput
            label={'Password'}
            value={txtPassword}
            placeholderText={'Password'}
            returnKeyType="done"
            isValidationShow={isPasswordError}
            validateMesssage={passwdValidMsg}
            blurOnSubmit={true}
            autoCapitalize="none"
            onPasswordShow={() => showPassword()}
            isVisible={isShowPassword}
            secureTextEntry={isShowPassword}
            onChangeText={(text: any) => onChangePassword(text)}          />
          <View style={[AuthStyle.loginTextContainer]}>
            <TouchableOpacity>
              <Text style={AuthStyle.forgotPwdText}>{'Forgot Password?'}</Text>
            </TouchableOpacity>
          </View>
          <View style={[AuthStyle.loginTextContainer]}></View>
          <TouchableOpacity onPress={() => gotoHomeScreen()}>
            <View style={[[AuthStyle.buttonContainer]]}>
              <Text style={[AuthStyle.buttonText]}>{'Sign In'}</Text>
            </View>
          </TouchableOpacity>

          <View style={[AuthStyle.loginTextContainer]}>
            <View style={[AuthStyle.registerContainer]}>
              <Text style={AuthStyle.registerText}>{'Not a member?'}</Text>
              <TouchableOpacity style={[AuthStyle.lines]}>
                <Text style={AuthStyle.registerText}>{' Sign Up Here'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[AuthStyle.registerText]}>
            {
              '-------------------------------  Or Sign In with  -------------------------------'
            }
          </Text>

          <View style={[AuthStyle.socialLogo]}>
            <Image source={IMAGE.googleLogo} style={[AuthStyle.logoSize]} />
            <Image source={IMAGE.appleLogo} style={[AuthStyle.logoSize]} />
            <Image source={IMAGE.facebookLogo} style={[AuthStyle.logoSizeF]} />
          </View>
        </View>
      </ScrollView>
      <Text style={[AuthStyle.textGuest]}>{'Enter as Guest'}</Text>
    </View>
  );
};

export default LoginScreen;
