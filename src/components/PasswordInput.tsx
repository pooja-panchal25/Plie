import React from 'react';
import {
  Image,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
} from 'react-native';
import Colors from '../assets/styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PasswordInput = ({
  isShowPassword,
  isVisible,
  placeholderText,
  onPasswordShow,
  secureTextEntry,
  forwardRef,
  onSubmitEditing,
  blurOnSubmit,
  onChangeText,
  value,
  validateMesssage,
  isValidationShow,
  keyboardType,
  maxLength,
  autoCapitalize,
  passwdInputStyle,
  returnKeyType,
  textAlignVertical,
  placeholderStyle,
  label,
  ...props
}) => {
  return (
    <View {...props}>
      <Text style={[ComponentStyle.labelText]}>{label}</Text>
      <View style={[ComponentStyle.passwordInputContainer]}>
        <TextInput
          style={[
            ComponentStyle.passwordInputText,
            passwdInputStyle,
            {
              borderColor: isValidationShow ? Colors.red : Colors.borderBlack15,
            },
          ]}
          value={value}
          returnKeyType={returnKeyType}
          ref={forwardRef}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholderText}
          placeholderTextColor={Colors.inputPlaceholder}
          placeholderStyle={placeholderStyle}
          blurOnSubmit={blurOnSubmit}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          minLength={6}
          textAlignVertical={textAlignVertical}
          {...props}
        />
        <TouchableWithoutFeedback onPress={onPasswordShow}>
          <View
            style={[
              ComponentStyle.eyeContainer,
              {
                borderColor: isValidationShow
                  ? Colors.red
                  : Colors.borderBlack15,
              },
            ]}>
            <View style={{marginRight: 15}}>
              {secureTextEntry ? (
                <Icon name="eye-slash" size={14} color={Colors.black} />
              ) : (
                <Icon name="eye" size={14} color={Colors.black} />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>

      {isValidationShow ? (
        <Text>{validateMesssage}</Text>
      ) : null}
    </View>
  );
};

export default PasswordInput;

const ComponentStyle = StyleSheet.create({
  //Custom Component name "InputWithIcon" Starting....
  labelText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: Colors.black,
    marginTop: '6%',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    marginTop: '3%',
  },
  passwordInputText: {
    height: 40,
    paddingLeft: "5%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    flex: 1,
    color: Colors.textBlack,
    backgroundColor: Colors.white,
  },
  eyeContainer: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 40,
    justifyContent: 'center',
    backgroundColor: Colors.white,

  },
  inputIconContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    height: 55,
    justifyContent: 'center',
  },
  bgContainer: {
    marginTop: '1.5%',
  },
  borderRadius20: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  tabImgcontainer: {marginHorizontal: '2%'},
});
