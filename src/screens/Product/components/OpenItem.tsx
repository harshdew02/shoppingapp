import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';
import Entypo from 'react-native-vector-icons/Entypo';

type OpenItemProps = {
  title: string;
  children?: React.ReactNode;
};

const OpenItem: React.FC<OpenItemProps> = ({title, children}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Gilroy-Semibold',
          color: colors.textColor,
          maxWidth: '85%',
        }}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: 5,
        }}>
        {children}
        <Entypo name={'chevron-right'} size={25} color={colors.textColor} />
      </View>
    </View>
  );
};

export default OpenItem;
