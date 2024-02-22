import {View, Text} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Card = {
  tick: boolean;
};

const Card: React.FC<Card> = ({tick}) => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        // justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: tick ? '#fcbc00' : '#fff',
          width: 24,
          height: 24,
          borderRadius: 8,
          borderWidth: tick ? 0 : 1,
          borderColor: tick ? '#fff' : '#b1b1b1',
        }}>
        <MaterialIcons
          name="done"
          style={{
            fontSize: 20,
            color: '#fcfcfc',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginLeft: 2,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: 'Gilroy',
          fontSize: 16,
          fontWeight: '800',
          fontStyle: 'normal',
          letterSpacing: 0,
          textAlign: 'left',
          color: tick ? '#fcbc00' : '#181725',
          marginLeft: 15,
        }}>
        Noodles & Pasta
      </Text>
    </View>
  );
};

const Filter = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 20,
      }}>
      <View style={{position: 'absolute', left: 25, top: 25}}>
        <TouchableOpacity>
          <Entypo
            name="cross"
            style={{
              fontSize: 38,
              color: colors.textColor,
            }}
          />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          width: '100%',
          fontFamily: 'Gilroy',
          fontSize: 20,
          fontWeight: 'bold',
          fontStyle: 'normal',
          marginTop: 10,
          textAlign: 'center',
          color: '#181725',
        }}>
        Filters
      </Text>

      <View
        style={{
          width: '100%',
          height: '90%',
          backgroundColor: '#f2f3f2',
          position: 'absolute',
          bottom: 0,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingHorizontal: 25,
          paddingVertical: 25,
          display: 'flex',
          //   alignItems: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}>

        <View>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 24,
              fontWeight: '700',
              fontStyle: 'normal',
              textAlign: 'left',
              color: '#181725',
            }}>
            Categories
          </Text>
          <View
            style={{
              height: 150,
              marginTop: 30,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Card tick={true} />
            <Card tick={false} />
            <Card tick={false} />
            <Card tick={false} />
            <Card tick={false} />
          </View>

          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 24,
              fontWeight: '700',
              fontStyle: 'normal',
              textAlign: 'left',
              color: '#181725',
              marginTop: 40,
            }}>
            Categories
          </Text>
          <View
            style={{
              height: 150,
              marginTop: 30,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Card tick={true} />
            <Card tick={false} />
            <Card tick={false} />
            <Card tick={false} />
            <Card tick={false} />
          </View>
        </View>

        {/*  */}
        <TouchableOpacity
          style={{
            width: 364,
            height: 67,
            borderRadius: 18,
            backgroundColor: '#fcbc00',
            //   display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 18,
              fontWeight: '600',
              fontStyle: 'normal',
              textAlign: 'center',
              color: '#fff9ff',
            }}>
            Apply Filter
          </Text>
        </TouchableOpacity>
        {/*  */}
      </View>
    </View>
  );
};

export default Filter;
