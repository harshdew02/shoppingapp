import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native';
import { Image } from 'react-native';
import ButtonMD from '../../common/Button/ButtonMD';

const OrderAccepted = () => {
    const navigation = useNavigation<any>();
  return (
    <View style={{display:'flex', justifyContent:'space-between', height:"100%"}}>
      <Text ></Text>
      <Image
      style={{alignSelf:'center', marginRight:40}}
        source={require('../../../assets/OrderAccepted.png')}
      />
      <View>
      <Text style={{color:"black", textAlign:'center', fontSize: 25, fontWeight:'500', paddingHorizontal:20}}>Your Order has been accepted</Text>
      <Text style={{color:"black", textAlign:'center', lineHeight:20, paddingHorizontal:60, paddingVertical:20, fontWeight:'400'}}>Your items has been placed and is on it's way to being processed</Text>
      </View>
      <View style={{paddingVertical:20, paddingHorizontal:30, display:"flex", justifyContent:'space-between'}}>
      <ButtonMD >
            <Text
              style={{
                color:"white",
                fontSize: 20,
                fontFamily: 'Gilroy-Bold',
              }}>
              Track Order
            </Text>
          </ButtonMD>
          <Text
              style={{
                color: "black",
                fontSize: 18,
                fontFamily: 'Gilroy-Bold',
                textAlign: 'center',
                paddingVertical:20
              }}>
             Back to home
            </Text>
          </View>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{width: 20, height: 40, backgroundColor: 'red' , marginTop: 100 }}>
        <Text>Hellod dskljflksjflsljkljcjl</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default OrderAccepted