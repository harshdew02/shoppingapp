import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../constants';

type OpenItemProps = {
    title: string;
    children?: React.ReactNode;
  };

const SideItem: React.FC<OpenItemProps> = ({title, children}) => {
    return (
        <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor:'gray',
        borderWidth:0.5,
        paddingHorizontal:20,
        padding:15
      }}>
        <View style={{display:'flex', flexDirection:'row'}}>
        {children}
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Gilroy-Semibold',
          color: colors.tertiary,
          maxWidth: '85%',
          marginLeft:20
        }}>{title}</Text>
        </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: 5,
        }}>
                      <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  gap: 5,
                }}>
              </View>
        <Entypo name={'chevron-right'} size={25} color={colors.tertiary} />
      </View>
    </View>
  )
}

export default SideItem