import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import TextMD from '../../../common/Text/TextMD';
import {colors} from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 220,
        backgroundColor: colors.primary,
        padding: 5,
        paddingHorizontal: 10,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <Image
          style={{
            width: 180,
            height: 40,
            resizeMode: 'contain',
          }}
          source={require('../../../../assets/textLogo.png')}
        />
        <AntDIcon
          name="shoppingcart"
          style={{
            fontSize: 35,
            color: colors.textColor,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          marginVertical: 5,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: colors.textColor,
            fontFamily: 'Gilroy-Black',
          }}>
          DELIVERING TO
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Gilroy-Semibold',
              color: colors.textColor,
            }}>
            Ramakrishna Nagar, Patna, Bihar
          </Text>
          <Icon
            name="caret-down"
            style={{
              fontSize: 14,
              color: colors.textColor,
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: colors.secondary,
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 15,
          paddingHorizontal: 20,
          flexDirection: 'row',
        }}>
        <FIcon
          name="search"
          style={{
            fontSize: 25,
            color: colors.textColor,
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100%',
          }}>
          <TextMD>Search for Products</TextMD>
          {/* <Animated.Text
              style={[
                {
                  fontSize: 16,
                  color: colors.textColor,
                },
                // animatedStyle,
              ]}>
              {wordsArray[currentWordIndex]}
            </Animated.Text> */}
        </View>
        <AntDIcon
          name="arrowright"
          style={{
            fontSize: 25,
            color: colors.textColor,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: 10,
        }}>
        <Text
          style={{
            color: colors.textColor,
            fontFamily: 'Gilroy-Black',
            fontSize: 25,
            opacity: 0.8,
          }}>
          FREE DELIVERY
        </Text>
        <Text
          style={{
            color: colors.textColor,
            opacity: 0.5,
            fontFamily: 'Gilroy-Semibold',
            fontSize: 16,
          }}>
          On Your First Order With Bellissimo
        </Text>
        <TouchableOpacity style={{
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          gap:5
        }} >
          <Text
            style={{
              color: '#0035C5',
              fontFamily: 'Gilroy-Bold',
              fontSize: 14,
            }}>
            See all Offers
          </Text>
          <AntDIcon name='arrowright' style={{
            fontSize: 14,
            color: '#0035C5'
          }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
