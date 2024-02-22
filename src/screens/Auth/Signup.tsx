import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {colors} from '../../constants';
import ButtonLG from '../../common/Button/ButtonLG';
import TextLG from '../../common/Text/TextLG';
import {UserData, useAuth} from '../../zustand/useAuth';
import {useNavigation, useRoute} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const Signup = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const {sendOTP, setuserData} = useAuth();
  const phoneNumber = useMemo(() => route.params?.phoneNumber, [route.params]);
  const [data, setData] = useState<UserData>({
    name: {
      firstName: '',
      lastName: '',
    },
    email: '',
    phoneNumber: phoneNumber,
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          padding: 20,
        }}>
        <Image
          style={{
            width: 250,
            height: 150,
            resizeMode: 'contain',
          }}
          source={require('../../../assets/logo.png')}
        />
        <Text
          style={{
            fontSize: 50,
            color: colors.textColor,
            fontFamily: 'Gilroy-Black',
          }}>
          Welcome!
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: colors.textColor,
            fontFamily: 'Gilroy-Semibold',
          }}>
          Let's build your profile for Bellissimo.
        </Text>
        <View
          style={{
            width: '90%',
            backgroundColor: colors.secondary,
            borderRadius: 18,
            padding: 5,
            elevation: 2,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
            paddingHorizontal: 10,
            marginTop: 20,
          }}>
          <TextInput
            placeholder="Enter your Full Name"
            style={{
              color: colors.textColor,
              fontSize: 16,
              width: 'auto',
              fontFamily: 'Gilroy-Semibold',
              flex: 1,
            }}
            placeholderTextColor={colors.tertiary}
            keyboardType="default"
            onChangeText={text => {
              // check if the text has a space then split it and set the first name and last name
              const hasSpace = text.includes(' ');
              if (hasSpace) {
                const [firstName, lastName] = text.split(' ');
                setData({...data, name: {firstName, lastName}});
              } else setData({...data, name: {firstName: text, lastName: ''}});
            }}
          />
        </View>
        <View
          style={{
            width: '90%',
            backgroundColor: colors.secondary,
            borderRadius: 18,
            padding: 5,
            elevation: 2,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
            paddingHorizontal: 10,
            marginTop: 10,
          }}>
          <TextInput
            placeholder="Enter your Email Address"
            style={{
              color: colors.textColor,
              fontSize: 16,
              width: 'auto',
              fontFamily: 'Gilroy-Semibold',
              flex: 1,
            }}
            placeholderTextColor={colors.tertiary}
            keyboardType="email-address"
            onChangeText={email => setData({...data, email})}
          />
        </View>
        <ButtonLG
          onPress={() => {
            navigation.navigate('OTP');
            if (data.name.firstName === '') {
              Toast.show({
                type: 'error',
                text1: 'First Name is required',
              });
            } else if (data.name.lastName === '') {
              Toast.show({
                type: 'error',
                text1: 'Last Name is required',
              });
            }
            // email validation
            const test = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (test.test(data.email) === false) {
              Toast.show({
                type: 'error',
                text1: 'Invalid Email',
              });
            }
            if (data.email === '') {
              Toast.show({
                type: 'error',
                text1: 'Email is required',
              });
            }
            setuserData(data)
            sendOTP(phoneNumber);
          }}
          style={{
            marginTop: 30,
          }}>
          <Text
            style={{
              color: colors.textColor,
              fontSize: 20,
              fontFamily: 'Gilroy-Bold',
            }}>
            Complete Signup
          </Text>
        </ButtonLG>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            gap: 5,
          }}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 14,
              color: colors.textColor,
              fontFamily: 'Gilroy-Bold',
            }}>
            Already have an Account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text
              style={{
                marginTop: 10,
                fontSize: 14,
                color: colors.tertiary,
                fontFamily: 'Gilroy-Bold',
              }}>
              Login here!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
