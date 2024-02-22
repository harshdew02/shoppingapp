import {View, Text, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';
import ButtonSM from '../../../common/Button/ButtonSM';
import EIcon from 'react-native-vector-icons/Entypo';
import AntDIcon from 'react-native-vector-icons/AntDesign';

const ProductCard = () => {
  return (
    <View
      style={{
        zIndex: 1,
        flex: 1,
        padding: 8,
        width: 160,
        height: '100%',
        borderRadius: 18,
      }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: 10,
        }}>
        <View
          style={{
            width: '100%',
            height: '80%',
            backgroundColor: colors.primary,
            borderRadius: 18,
            gap: 2,
            flexDirection: 'column',
            // justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            elevation: 5,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
              width: 55,
              height: 25,
              backgroundColor: colors.secondary,
              zIndex: 1,
              borderRadius: 18,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              paddingHorizontal: 5,
            }}>
            <AntDIcon
              name="star"
              style={{
                fontSize: 16,
                color: colors.textColor,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                color: colors.textColor,
                fontFamily: 'Gilroy-Medium',
              }}>
              4.2
            </Text>
          </View>
          <Image
            style={{
              width: '100%',
              height: '60%',
              borderRadius: 18,
              resizeMode: 'cover',
            }}
            source={{
              uri: 'https://bellissimo.co.in/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-18-at-10.55.44-AM.jpeg',
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              width: '100%',
              height: '40%',
              paddingHorizontal: 5,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: colors.textColor,
                fontFamily: 'Gilroy-Semibold',
              }}>
              Bellissimo Sandal Hand Wash
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 5,
                // backgroundColor: colors.secondary,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <EIcon
                  name="price-tag"
                  style={{
                    fontSize: 14,
                    color: colors.textColor,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors.textColor,
                      textAlign: 'center',
                      fontFamily: 'Gilroy-Bold',
                    }}>
                    ₹120
                  </Text>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 30,
                      height: 'auto',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: colors.textColor,
                        fontFamily: 'Gilroy-Medium',
                      }}>
                      15%
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: colors.textColor,
                        textAlign: 'center',
                        textDecorationLine: 'line-through',
                        fontFamily: 'Gilroy-Bold',
                      }}>
                      ₹150
                    </Text>
                  </View>
                </View>
              </View>
              <AntDIcon
                name="hearto"
                style={{
                  fontSize: 20,
                  color: colors.textColor,
                }}
              />
            </View>
          </View>
        </View>
        <ButtonSM
          style={{
            gap: 5,
            elevation: 5,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: colors.textColor,
              fontFamily: 'Gilroy-Bold',
            }}>
            Add To Cart
          </Text>
          <AntDIcon
            name="shoppingcart"
            style={{
              fontSize: 20,
              color: colors.textColor,
            }}
          />
        </ButtonSM>
      </View>
    </View>
  );
};

export default ProductCard;
