import {View, Text, TextStyle} from 'react-native';
import React from 'react';
import { CommonTextStyle } from '../types/style.type';
import { textStyleVariants } from '../../constants';

type TextXXLProps = {
    children: React.ReactNode,
    style?: CommonTextStyle,
};

const TextXXL: React.FC<TextXXLProps> = ({children, style}) => {
  return (
    <Text style={{...textStyleVariants.xxl, ...style}}>
      {children}
    </Text>
  );
};

export default TextXXL;
