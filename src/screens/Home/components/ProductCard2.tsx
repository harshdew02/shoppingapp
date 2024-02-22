import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';
import AntDIcon from 'react-native-vector-icons/AntDesign';
const ProductCard2 = () => {
  return (
    <View
      style={{
        width: 120,
        height: '100%',
        flexDirection: 'column',
      }}>
      <View
        style={{
          backgroundColor: colors.secondary,
          width: '100%',
          height: 120,
          borderRadius: 18,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          color: colors.textColor,
          width: '100%',
          fontFamily: 'Gilroy-Bold',
        }}>
        Shampoo & Conditioner
      </Text>
      <View
        style={{
          flexDirection: 'row',
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
        <TouchableOpacity
          style={{
            borderColor: colors.primary,
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 18,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.textColor,
              fontFamily: 'Gilroy-Bold',
            }}>
            ADD
          </Text>
          <AntDIcon
            style={{
              fontSize: 16,
              color: colors.primary,
            }}
            name="shoppingcart"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard2;
