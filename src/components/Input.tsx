
import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Colors from '../assets/styles/Colors';
const Input = ({
  isShowPassword,
  isVisible,
  placeholderText,
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
  inputStyle,
  returnKeyType,
  multiline,
  numberOfLines,
  textAlignVertical,
  editable,
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
            ComponentStyle.inputText,
            inputStyle,
            {
              borderColor: isValidationShow ? Colors.red : Colors.borderBlack15,
            },
          ]}
          value={value}
          returnKeyType={returnKeyType}
          ref={forwardRef}
          onSubmitEditing={onSubmitEditing}
          editable={editable}
          placeholder={placeholderText}
          placeholderTextColor={Colors.inputPlaceholder}
          placeholderStyle={placeholderStyle}
          blurOnSubmit={blurOnSubmit}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical={textAlignVertical}
          secureTextEntry={secureTextEntry}
          {...props}
        />
      </View>
      <View>
        {isValidationShow ? (
          <Text style={[ComponentStyle.errorText]}>{validateMesssage}</Text>
        ) : null}
      </View>
    </View>
  );
};
export default Input;

const ComponentStyle = StyleSheet.create({
  //Input text without icon custom coponent style
  //Custom Component name "Input" Starting....
  labelText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: Colors.black,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    height: 40,
    marginTop: '3%',
    paddingLeft: "5%",
    backgroundColor: Colors.white,
    width: '100%',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: Colors.textBlack,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderBottomWidth:0.5,
        borderRadius: 5,

  },
  errorText: {
    fontFamily: 'Comfortaa-Medium',
    fontSize: 10,
    color: Colors.red,
    padding: 5,
  },
});

//Custom Component name "Input" Finished...
