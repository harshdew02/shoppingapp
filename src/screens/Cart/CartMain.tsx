import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../constants';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {Image} from 'react-native';
import CartItemCard from './components/CartItemCard';
import FONIcon from 'react-native-vector-icons/Foundation';
import ButtonMD from '../../common/Button/ButtonMD';
const CartMain = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          padding: 10,
          backgroundColor: colors.primary,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <Image
          style={{
            width: 180,
            height: 40,
            resizeMode: 'contain',
          }}
          source={require('../../../assets/textLogo.png')}
        />
        <Text
          style={{
            fontSize: 32,
            color: colors.textColor,
            lineHeight: 44,
            fontFamily: 'Gilroy-Black',
          }}>
          Welcome to Cart
        </Text>
        <Text
          style={{
            fontSize: 24,
            color: colors.textColor,
            lineHeight: 30,
            fontFamily: 'Gilroy-Bold',
          }}>
          Siddhant Singh
        </Text>
        <View
          style={{
            width: '100%',
            height: 70,
            backgroundColor: colors.secondary,
            borderRadius: 18,
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: colors.textColor,
          }}>
          <FA5Icon
            name="shipping-fast"
            style={{
              fontSize: 30,
              color: colors.textColor,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <FAIcon
                name="map-pin"
                style={{
                  fontSize: 16,
                  color: colors.textColor,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: colors.textColor,
                  fontFamily: 'Gilroy-Black',
                }}>
                DELIVERING TO
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: colors.textColor,
                fontFamily: 'Gilroy-Semibold',
              }}>
              Ramakrishna Nagar, Patna, Bihar 800027
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderColor: colors.primary,
              borderWidth: 1,
              paddingHorizontal: 8,
              paddingVertical: 5,
              backgroundColor: colors.primary,
              borderRadius: 18,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 5,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.textColor,
                  fontFamily: 'Gilroy-Semibold',
                }}>
                Change
              </Text>
              <FAIcon
                name="exchange"
                style={{
                  fontSize: 16,
                  color: colors.textColor,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        renderItem={() => <CartItemCard />}
        data={Array.from({length: 5})}
        keyExtractor={(item, index) => `${index}`}
        contentContainerStyle={{
          padding: 10,
        }}
        ListFooterComponent={() => {
          return (
            <View>
              <View
                style={{
                  height: 170,
                  width: '100%',
                  padding: 10,
                  backgroundColor: colors.secondary,
                  borderRadius: 18,
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: colors.textColor,
                    marginBottom: 10,
                    fontFamily: 'Gilroy-Black',
                  }}>
                  Price Details
                </Text>
                <View
                  style={{
                    width: '100%',
                    height: 'auto',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.textColor,
                      marginBottom: 10,
                      fontFamily: 'Gilroy-Semibold',
                    }}>
                    Price (2 Items)
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.textColor,
                      marginBottom: 10,
                      fontFamily: 'Gilroy-Bold',
                    }}>
                    ₹120 (2 Items)
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 'auto',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.textColor,
                      marginBottom: 10,
                      fontFamily: 'Gilroy-Semibold',
                    }}>
                    Discount
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.textColor,
                      marginBottom: 10,
                      fontFamily: 'Gilroy-Bold',
                    }}>
                    -₹50 (2 x -₹25)
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 'auto',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.textColor,
                      marginBottom: 10,
                      fontFamily: 'Gilroy-Semibold',
                    }}>
                    Delivery Charges
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginBottom: 10,
                      color: colors.textColor,
                      fontFamily: 'Gilroy-Bold',
                    }}>
                    -₹50 (Free Delivery)
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: colors.tertiary,
                    marginBottom: 10,
                  }}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  height: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  marginBottom: 10,
                }}>
                <FONIcon
                  name="shield"
                  style={{
                    fontSize: 40,
                    color: colors.tertiary,
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.tertiary,
                    marginLeft: 10,
                    textAlign: 'center',
                    fontFamily: 'Gilroy-Bold',
                  }}>
                  Safe and Secure Cash on Delivery. Easy returns. 100% Authentic
                  products.
                </Text>
              </View>
              <ButtonMD>
                <Text
                  style={{
                    fontSize: 18,
                    color: colors.textColor,
                    fontFamily: 'Gilroy-Bold',
                  }}>
                  Complete the Purchase
                </Text>
                <FA5Icon
                  style={{
                    fontSize: 20,
                    color: colors.textColor,
                  }}
                  name="fire-alt"
                />
              </ButtonMD>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CartMain;
