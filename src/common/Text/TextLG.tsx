import {View, Text, TextStyle} from 'react-native';
import React from 'react';
import { CommonTextStyle } from '../types/style.type';
import { textStyleVariants } from '../../constants';

type TextLGProps = {
    children: React.ReactNode,
    style?: CommonTextStyle,
};

const TextLG: React.FC<TextLGProps> = ({children, style}) => {
  return (
    <Text style={{...textStyleVariants.lg, ...style}}>
      {children}
    </Text>
  );
};

export default TextLG;
