import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CommonViewStyle} from '../types/style.type';
import {buttonStyleVariants} from '../../constants';

type ButtonXLProps = {
  children: React.ReactNode;
  style?: CommonViewStyle;
};

const ButtonXL: React.FC<ButtonXLProps> = ({children, style}) => {
  return (
    <TouchableOpacity style={{...buttonStyleVariants.xl, ...style}}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonXL;
