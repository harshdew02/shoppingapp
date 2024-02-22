import {View, Text, TextStyle} from 'react-native';
import React from 'react';
import { CommonTextStyle } from '../types/style.type';
import { textStyleVariants } from '../../constants';

type TextMDProps = {
    children: React.ReactNode,
    style?: CommonTextStyle,
};

const TextMD: React.FC<TextMDProps> = ({children, style}) => {
  return (
    <Text style={{...textStyleVariants.md, ...style}}>
      {children}
    </Text>
  );
};

export default TextMD;
