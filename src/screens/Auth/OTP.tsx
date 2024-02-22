import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../constants';
import {OtpInput} from 'react-native-otp-entry';
import ButtonMD from '../../common/Button/ButtonMD';
import TextMD from '../../common/Text/TextMD';
import {useAuth} from '../../zustand/useAuth';

const OTP = () => {
  const {phoneNumber, verifyOTP, resendOTP} = useAuth();
  const [countdown, setCountdown] = useState(30);
  useEffect(() => {
    let intervalId: any;

    if (countdown > 0) {
      intervalId = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [countdown]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 16,
          marginTop: 50,
          color: colors.textColor,
          fontFamily: 'Gilroy-Bold',
        }}>
        We Have Sent a Verification code to
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: colors.tertiary,
          marginTop: 10,
          fontFamily: 'monospace',
        }}>
        +91-{phoneNumber}
      </Text>
      <OtpInput
      numberOfDigits={6}
        focusColor={colors.primary}
        focusStickBlinkingDuration={500}
        onTextChange={text => console.log(text)}
        onFilled={text => verifyOTP(text)}
        autoFocus={false}
        theme={{
          containerStyle: {
            marginTop: 30,
          },
          pinCodeTextStyle: {
            fontSize: 20,
            color: colors.textColor,
            fontFamily: 'Gilroy-Bold',
          }
        }}
      />
      {/* <ButtonMD
        style={{
          marginTop: 30,
        }}>
        <TextMD>Verify OTP</TextMD>
      </ButtonMD> */}
      <View
        style={{
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            marginTop: 10,
            fontSize: 14,
            color: '#00DA60',
            fontFamily: 'Gilroy-Bold',
          }}>
          Check your Whatsapp for the OTP
        </Text>
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
            Didn't get the OTP?
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (countdown === 0) {
                resendOTP();
                setCountdown(30);
              }
            }}
            disabled={countdown !== 0}>
            {countdown !== 0 ? (
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  color: colors.tertiary,
                  fontFamily: 'Gilroy-Bold',
                }}>
                Resend OTP in {countdown}s
              </Text>
            ) : (
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  color: colors.primary,
                  fontFamily: 'Gilroy-Bold',
                }}>
                Resend OTP
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OTP;
