import {View, Text, TextStyle} from 'react-native';
import React from 'react';
import { CommonTextStyle } from '../types/style.type';
import { textStyleVariants } from '../../constants';

type TextSMProps = {
    children: React.ReactNode,
    style?: CommonTextStyle,
};

const TextSM: React.FC<TextSMProps> = ({children, style}) => {
  return (
    <Text style={{...textStyleVariants.sm, ...style}}>
      {children}
    </Text>
  );
};

export default TextSM;
