import {View, Text, TextStyle} from 'react-native';
import React from 'react';
import {CommonTextStyle} from '../types/style.type';
import {textStyleVariants} from '../../constants';

type TextXXXLProps = {
  children: React.ReactNode;
  style?: CommonTextStyle;
};

const TextXXXL: React.FC<TextXXXLProps> = ({children, style}) => {
  return (
    <Text style={{...textStyleVariants.xxxl, ...style, backgroundColor: 'red'}}>
      {children}
    </Text>
  );
};

export default TextXXXL;
