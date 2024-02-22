import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CommonViewStyle} from '../types/style.type';
import {buttonStyleVariants} from '../../constants';

type ButtonSMProps = {
  children: React.ReactNode;
  style?: CommonViewStyle;
};

const ButtonSM: React.FC<ButtonSMProps> = ({children, style}) => {
  return (
    <TouchableOpacity style={{...buttonStyleVariants.sm, ...style}}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonSM;
