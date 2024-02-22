import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {CommonViewStyle} from '../types/style.type';
import {buttonStyleVariants, colors} from '../../constants';

type ButtonMDProps = {
  children: React.ReactNode;
  style?: CommonViewStyle;
  onPress?: () => void;
  loading?: boolean;
};

const ButtonMD: React.FC<ButtonMDProps> = ({
  children,
  style,
  onPress,
  loading,
}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      style={{...buttonStyleVariants.md, ...style}}>
      {!loading ? (
        children
      ) : (
        <ActivityIndicator
          size="small"
          color={colors.tertiary}
          animating={loading}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonMD;
