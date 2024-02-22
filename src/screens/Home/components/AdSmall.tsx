import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../../constants'

const AdSmall = () => {
  return (
    <View
    style={{
      width: '100%',
      height: 80,
      backgroundColor: colors.secondary,
      borderRadius: 20,
      borderColor: colors.primary,
      borderWidth: 2,
      marginVertical: 10,
    }}></View>
  )
}

export default AdSmall