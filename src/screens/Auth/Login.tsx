import {
  View,
  Text,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {colors} from '../../constants';
import TextMD from '../../common/Text/TextMD';
import ButtonMD from '../../common/Button/ButtonMD';
import {useAuth} from '../../zustand/useAuth';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
const Login = () => {
  const navigation = useNavigation<any>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const {login, loading, setPhoneNum, isLogined} = useAuth();

  useEffect(() => {
    if (isLogined) {
      setPhoneNum(phoneNumber);
      navigation.navigate('OTP');
    }
  }, [isLogined]);

  const handleLogin = useCallback(() => {
    if (phoneNumber.length === 10) {
      login(phoneNumber);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please enter a valid phone number',
        text2: 'Phone number should be 10 digits long',
      });
    }
  }, [phoneNumber]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: colors.primary,
        }}>
        <View
          style={{
            width: '100%',
            height: 400,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Image
            style={{
              width: 250,
              height: 150,
              resizeMode: 'contain',
            }}
            source={require('../../../assets/logo.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: 400,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            zIndex: 1,
            position: 'absolute',
            bottom: 0,
            elevation: 30,
            padding: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              color: colors.textColor,
              fontFamily: 'Gilroy-Bold',
            }}>
            India's #1 Platform for Grocery and Personal Care Products
          </Text>
          <View
            style={{
              width: '100%',
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginVertical: 25,
              paddingHorizontal: 20,
              gap: 10,
              backgroundColor: colors.primary,
              opacity: 0.8,
              borderRadius: 10,
            }}>
            <View
              style={{
                width: '50%',
                height: 1,
                backgroundColor: colors.tertiary,
              }}
            />
            <Text
              style={{
                color: colors.textColor,
                fontSize: 16,
                fontFamily: 'Gilroy-Semibold',
              }}>
              Login with Your Whatsapp Number
            </Text>
            <View
              style={{
                width: '50%',
                height: 1,
                backgroundColor: colors.tertiary,
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
            }}>
            <View
              style={{
                width: '15%',
                height: '100%',
                backgroundColor: colors.secondary,
                borderRadius: 10,
                padding: 5,
                elevation: 2,
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/whatsappLogo.png')}
              />
            </View>
            <View
              style={{
                width: '85%',
                height: '100%',
                backgroundColor: colors.secondary,
                borderRadius: 10,
                elevation: 2,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 3,
                paddingHorizontal: 12,
              }}>
              <Text
                style={{
                  color: colors.textColor,
                  fontSize: 16,
                  fontFamily: 'Gilroy-Semibold',
                }}>
                +91
              </Text>
              <TextInput
                placeholder="Enter your Whatsapp Number"
                style={{
                  color: colors.textColor,
                  fontSize: 14,
                  flex: 1,
                  fontFamily: 'Gilroy-Semibold',
                }}
                placeholderTextColor={colors.tertiary}
                keyboardType="phone-pad"
                onChangeText={phone_number => setPhoneNumber(phone_number)}
              />
            </View>
          </View>
          <ButtonMD
            loading={loading}
            onPress={handleLogin}
            style={{
              marginVertical: 20,
            }}>
            <Text
              style={{
                color: colors.textColor,
                fontSize: 20,
                fontFamily: 'Gilroy-Bold',
              }}>
              Continue
            </Text>
          </ButtonMD>
          <TextMD>Or</TextMD>
          <TouchableOpacity
            onPress={() => {
              if (phoneNumber.length === 10) {
                setPhoneNum(phoneNumber);
                navigation.navigate('Signup', {
                  phoneNumber,
                });
              } else {
                Toast.show({
                  type: 'error',
                  text1: 'Please enter a valid phone number',
                  text2: 'Phone number should be 10 digits long',
                });
              }
            }}
            style={{
              width: '100%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
            }}>
            <Text
              style={{
                color: colors.textColor,
                fontSize: 18,
                fontFamily: 'Gilroy-Bold',
              }}>
              Signup with Whatsapp
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
