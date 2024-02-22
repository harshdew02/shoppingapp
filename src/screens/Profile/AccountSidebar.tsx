import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import SideItem from './components/SideItem';

const AccountSidebar = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>AccountSidebar</Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '95%',
        }}>
        <View>
            <View style={{display:'flex', flexDirection:'row', paddingHorizontal:10, paddingBottom:10}}>
                <View>
                    <View style={{backgroundColor:'gray', height:50, width:50, borderRadius:10, margin:20}}></View>
                </View>
                <View style={{display:'flex', justifyContent:'center'}}>
                    <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row'}}>
                        <View><Text style={{color:"black", fontWeight:'600'}}>Siddhant</Text></View>
                        <AntDesign name='edit' size={25} color={'#53B175'}/>
                    </View>
                    <View>
                        <Text style={{color:"black", marginTop:2}}>Imshuvo97@gmail.com</Text>
                    </View>
                </View>
            </View>
          <SideItem title="Orders">
            <Feather name="shopping-bag" size={25} color={colors.tertiary} />
          </SideItem>
          <SideItem title="My Details">
            <AntDesign name="idcard" size={25} color={colors.tertiary} />
          </SideItem>
          <SideItem title="Delivery Address">
            <Entypo name="location-pin" size={25} color={colors.tertiary} />
          </SideItem>
        </View>
        <View>
          <SideItem title="Help">
            <Feather name="help-circle" size={25} color={colors.tertiary} />
          </SideItem>
          <SideItem title="About">
            <MaterialCommunityIcons
              name="account-details"
              size={25}
              color={colors.tertiary}
            />
          </SideItem>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:20, borderRadius:20, backgroundColor:'silver', margin:20}}>
            <MaterialCommunityIcons
              name="logout"
              size={25}
              color={'#53B175'}
            />
            <Text style={{color:'white', fontWeight:'600'}}>Log Out</Text>
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountSidebar;
