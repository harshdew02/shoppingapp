import {View, Text, TextStyle} from 'react-native';
import React from 'react';
import { CommonTextStyle } from '../types/style.type';
import { textStyleVariants } from '../../constants';

type TextXLProps = {
    children: React.ReactNode,
    style?: CommonTextStyle,
};

const TextXL: React.FC<TextXLProps> = ({children, style}) => {
  return (
    <Text style={{...textStyleVariants.xl, ...style}}>
      {children}
    </Text>
  );
};

export default TextXL;
