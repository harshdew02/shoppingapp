import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../../constants';
import AntD from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AccordionItem from './components/AccordionItem';
import OpenItem from './components/OpenItem';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SwipeToBuy from './components/SwipTOBuy';
import FONIcon from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';
const ProductMain = () => {
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: colors.secondary,
        }}>
        <View
          style={{
            height: 320,
            width: '100%',
            backgroundColor: '#F2F3F2',
            borderBottomEndRadius: 30,
            borderBottomStartRadius: 30,
            //   elevation: 2,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}>
          <Feather name="shopping-bag" size={25} color={colors.tertiary} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Gilroy-Bold',
              color: colors.tertiary,
            }}>
            Only 5 left in stock
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontFamily: 'Gilroy-Bold',
                    color: colors.textColor,
                    maxWidth: '85%',
                  }}>
                  Bellissimo Toilet Cleaner Original Blue
                </Text>
                <AntD name="hearto" size={25} color={colors.tertiary} />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Gilroy-Semibold',
                  color: colors.tertiary,
                }}>
                500ML
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Gilroy-Bold',
                  color: colors.textColor,
                }}>
                Multi Pack
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <TouchableOpacity>
                  <Entypo name="minus" size={30} color={colors.tertiary} />
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: colors.tertiary,
                    opacity: 0.6,
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Gilroy-Bold',
                      color: colors.textColor,
                    }}>
                    1
                  </Text>
                </View>
                <TouchableOpacity>
                  <Entypo name="plus" size={30} color={'#53B175'} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: 'Gilroy-Black',
                    color: colors.textColor,
                  }}>
                  ₹124.00
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Gilroy-Semibold',
                    color: colors.tertiary,
                    textDecorationLine: 'line-through',
                  }}>
                  ₹250.00
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 2,
                backgroundColor: colors.tertiary,
                opacity: 0.3,
              }}
            />
            <AccordionItem opened title="Product Description">
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Gilroy-Medium',
                  color: colors.tertiary,
                  textAlign: 'justify',
                }}>
                Bellissimo Toilet Cleaner Original Blue is a powerful toilet
                cleaner that cleans and disinfects your toilet bowl. It kills
                99.9% of germs and bacteria and removes tough stains and
                limescale. It also gives your toilet a pleasant fragrance.
              </Text>
            </AccordionItem>
            <View
              style={{
                width: '100%',
                height: 2,
                backgroundColor: colors.tertiary,
                opacity: 0.3,
              }}
            />
            <AccordionItem title="How To Use">
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Gilroy-Medium',
                  color: colors.tertiary,
                }}>
                1. Press sides of the cap and twist counter-clockwise to open.
                2. Squeeze the liquid around the bowl and under the rim. 3. Let
                the liquid spread from the rim to the U-bend. 4. Leave for 20
                minutes, brush lightly and flush. 5. For best results, leave for
                1 hour.
              </Text>
            </AccordionItem>
            <View
              style={{
                width: '100%',
                height: 2,
                backgroundColor: colors.tertiary,
                opacity: 0.3,
              }}
            />
            <OpenItem title="Review's">
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <FontAwesome name="star" size={16} color={colors.primary} />
                <FontAwesome name="star" size={16} color={colors.primary} />
                <FontAwesome name="star" size={16} color={colors.primary} />
                <FontAwesome name="star" size={16} color={colors.primary} />
                <FontAwesome name="star" size={16} color={colors.primary} />
              </View>
            </OpenItem>
            <View
              style={{
                width: '100%',
                height: 2,
                backgroundColor: colors.tertiary,
                opacity: 0.3,
              }}
            />
            <OpenItem title="Toilet Cleaner">
              <Text
                style={{
                  padding: 5,
                  fontSize: 14,
                  fontFamily: 'Gilroy-Medium',
                  backgroundColor: '#EBEBEB',
                  color: '#7C7C7C',
                  borderRadius: 8,
                }}>
                more
              </Text>
            </OpenItem>
            <View
              style={{
                width: '100%',
                height: 2,
                backgroundColor: colors.tertiary,
                opacity: 0.3,
              }}></View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Feather name="truck" size={25} color={colors.tertiary} />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Gilroy-Bold',
                    color: colors.tertiary,
                  }}>
                  Delivery Location
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  //   flex: 1,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.textColor,
                    fontFamily: 'Gilroy-Semibold',
                  }}>
                  Ramakrishna Nagar, Patna, Bihar 800027
                </Text>
              </View>
            </View>
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
              marginTop: 20,
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
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          backgroundColor: colors.secondary,
          elevation: 50,
          width: '100%',
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <AntD name="shoppingcart" size={25} color={colors.textColor} />
        </TouchableOpacity>
        <SwipeToBuy />
      </View>
    </>
  );
};

export default ProductMain;
