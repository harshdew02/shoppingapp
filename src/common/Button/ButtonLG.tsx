import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {CommonViewStyle} from '../types/style.type';
import {buttonStyleVariants, colors} from '../../constants';

type ButtonLGProps = {
  children: React.ReactNode;
  style?: CommonViewStyle;
  onPress?: () => void;
  loading?: boolean;
};

const ButtonLG: React.FC<ButtonLGProps> = ({
  children,
  style,
  onPress,
  loading,
}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      style={{...buttonStyleVariants.lg, ...style}}>
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

export default ButtonLG;
