import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../constants';
import {Dropdown} from 'react-native-element-dropdown';
import OIcon from 'react-native-vector-icons/Octicons';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';

const data = [
  {label: '1', value: '1'},
  {label: '2', value: '2'},
  {label: '3', value: '3'},
  {label: '4', value: '4'},
  {label: '5', value: '5'},
  {label: '6', value: '6'},
  {label: '7', value: '7'},
  {label: '8', value: '8'},
];
const CartItemCard = () => {
  const [value, setValue] = useState('1');

  return (
    <View
      style={{
        width: '100%',
        height: 220,
        backgroundColor: colors.secondary,
        borderRadius: 18,
        marginVertical: 10,
        flexDirection: 'column',
      }}>
      <View
        style={{
          flexDirection: 'column',
          padding: 10,
        }}>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 5,
          }}>
          <View
            style={{
              width: 100,
              height: '100%',
              borderRadius: 18,
              backgroundColor: colors.primary,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              height: '100%',
              flex: 1,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: colors.textColor,
                maxWidth: '100%',
                maxHeight: '100%',
                lineHeight: 20,
                fontFamily: 'Gilroy-Bold',
              }}>
              Bellissimo Disinfectant Surface Cleaner
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: colors.tertiary,
                lineHeight: 20,
                fontFamily: 'Gilroy-Medium',
              }}>
              500 ML
            </Text>
            <View
              style={{
                width: 60,
                height: 25,
                backgroundColor: colors.textColor,
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
                  color: '#fff',
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: 'Gilroy-Medium',
                }}>
                4.2
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
          }}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            itemTextStyle={styles.itemTextStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder=""
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
            renderLeftIcon={() => (
              <Text
                style={{
                  fontSize: 12,
                  color: colors.textColor,
                  marginRight: 2,
                  fontFamily: 'Gilroy-Bold',
                }}>
                QTY:
              </Text>
            )}
          />
          <AntDIcon
            name="arrowdown"
            style={{
              fontSize: 22,
              color: '#00DA60',
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: '#00DA60',
              fontFamily: 'Gilroy-Bold',
            }}>
            15%
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
              color: colors.tertiary,
              textAlign: 'center',
              textDecorationLine: 'line-through',
              fontFamily: 'Gilroy-Bold',
            }}>
            ₹150
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 22,
              color: colors.textColor,
              textAlign: 'center',
              fontFamily: 'Gilroy-Bold',
            }}>
            ₹120
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: colors.tertiary,
            textAlign: 'center',
            fontFamily: 'Gilroy-Semibold',
          }}>
          Delivery by Sat Jan 22 | ₹50
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            flex: 0.5,
            height: '100%',
            borderColor: colors.primary,
            borderWidth: 1,
            borderBottomLeftRadius: 18,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}>
          <AntDIcon
            style={{
              fontSize: 18,
              color: colors.primary,
            }}
            name="delete"
          />
          <Text
            style={{
              fontSize: 18,
              color: colors.textColor,
              fontFamily: 'Gilroy-Bold',
            }}>
            Remove
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0.5,
            height: '100%',
            backgroundColor: colors.primary,
            borderBottomRightRadius: 18,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}>
          <FA5Icon
            style={{
              fontSize: 18,
              color: colors.textColor,
            }}
            name="fire"
          />
          <Text
            style={{
              fontSize: 18,
              color: colors.textColor,
              fontFamily: 'Gilroy-Bold',
            }}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItemCard;

const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    width: '22%',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 8,
    marginRight: 20,
    // backgroundColor: colors.primary,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 10,
    fontFamily: 'Gilroy-Bold',
    color: colors.textColor,
  },
  selectedTextStyle: {
    fontSize: 12,
    color: colors.textColor,
    fontFamily: 'Gilroy-Bold',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  itemTextStyle: {
    fontSize: 16,
    color: colors.textColor,
    textAlign: 'center',
    fontFamily: 'Gilroy-Bold',
  },
});
