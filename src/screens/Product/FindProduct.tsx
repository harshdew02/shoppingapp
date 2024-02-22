import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../Home/components/Header';
import TextMD from '../../common/Text/TextMD';
import {colors} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';

// import Logo from '../../../assets/magic.svg'

type Card = {
  bg: string;
  bor: string;
};

const Card: React.FC<Card> = ({bg, bor}) => {
  return (
    <View
      style={{
        backgroundColor: bg,
        width: 174,
        height: 200,
        marginTop: 15,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: bor,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
      }}>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: 'red',
        }}></View>
      <Text
        style={{
          width: '80%',
          fontFamily: 'Gilroy',
          fontSize: 16,
          fontWeight: 'bold',
          fontStyle: 'normal',
          textAlign: 'center',
          color: '#181725',
        }}>
        Bathroom Cleaner
      </Text>
    </View>
  );
};

const FindProduct = () => {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 20,
      }}>
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
        Find Products
      </Text>

      {/* <Header/> */}
      <View
        style={{
          width: '90%',
          height: 50,
          backgroundColor: colors.secondary,
          borderRadius: 14,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 15,
          paddingHorizontal: 20,
          flexDirection: 'row',
          marginTop: 30,
        }}>
        <FIcon
          name="search"
          style={{
            fontSize: 25,
            color: colors.textColor,
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100%',
          }}>
          <TextMD>Search for Products</TextMD>
          {/* <Animated.Text
              style={[
                {
                  fontSize: 16,
                  color: colors.textColor,
                },
                // animatedStyle,
              ]}>
              {wordsArray[currentWordIndex]}
            </Animated.Text> */}
        </View>
        {/* <AntDIcon
          name="arrowright"
          style={{
            fontSize: 25,
            color: colors.textColor,
          }}
        /> */}
      </View>

      <ScrollView
        contentContainerStyle={{
          width: 364,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
        style={{height: '100%', marginTop: 24}}>
        <Card bg={'rgba(83, 177, 117, 0.1)'} bor={'rgba(83, 177, 117, 0.7)'} />
        <Card bg={'rgba(248, 164, 76, 0.1)'} bor={'rgba(248, 164, 76, 0.7)'} />
        <Card
          bg={'rgba(247, 165, 147, 0.25)'}
          bor={'rgba(247, 165, 147, 0.7)'}
        />
        <Card
          bg={'rgba(211, 176, 224, 0.25)'}
          bor={'rgba(211, 176, 224, 0.7)'}
        />
        <Card bg={'rgba(83, 177, 117, 0.1)'} bor={'rgba(83, 177, 117, 0.7)'} />
        <Card bg={'rgba(248, 164, 76, 0.1)'} bor={'rgba(248, 164, 76, 0.7)'} />
        <Card
          bg={'rgba(247, 165, 147, 0.25)'}
          bor={'rgba(247, 165, 147, 0.7)'}
        />
        <Card
          bg={'rgba(211, 176, 224, 0.25)'}
          bor={'rgba(211, 176, 224, 0.7)'}
        />
        <Card bg={'rgba(83, 177, 117, 0.1)'} bor={'rgba(83, 177, 117, 0.7)'} />
        <Card bg={'rgba(248, 164, 76, 0.1)'} bor={'rgba(248, 164, 76, 0.7)'} />
        <Card
          bg={'rgba(247, 165, 147, 0.25)'}
          bor={'rgba(247, 165, 147, 0.7)'}
        />
        <Card
          bg={'rgba(211, 176, 224, 0.25)'}
          bor={'rgba(211, 176, 224, 0.7)'}
        />
        <Card bg={'rgba(83, 177, 117, 0.1)'} bor={'rgba(83, 177, 117, 0.7)'} />
        <Card bg={'rgba(248, 164, 76, 0.1)'} bor={'rgba(248, 164, 76, 0.7)'} />
        <Card
          bg={'rgba(247, 165, 147, 0.25)'}
          bor={'rgba(247, 165, 147, 0.7)'}
        />
        <Card
          bg={'rgba(211, 176, 224, 0.25)'}
          bor={'rgba(211, 176, 224, 0.7)'}
        />
        <Card bg={'rgba(83, 177, 117, 0.1)'} bor={'rgba(83, 177, 117, 0.7)'} />
        <Card bg={'rgba(248, 164, 76, 0.1)'} bor={'rgba(248, 164, 76, 0.7)'} />
        <Card
          bg={'rgba(247, 165, 147, 0.25)'}
          bor={'rgba(247, 165, 147, 0.7)'}
        />
        <Card
          bg={'rgba(211, 176, 224, 0.25)'}
          bor={'rgba(211, 176, 224, 0.7)'}
        />
        <Card bg={'rgba(83, 177, 117, 0.1)'} bor={'rgba(83, 177, 117, 0.7)'} />
        <Card bg={'rgba(248, 164, 76, 0.1)'} bor={'rgba(248, 164, 76, 0.7)'} />
        <Card
          bg={'rgba(247, 165, 147, 0.25)'}
          bor={'rgba(247, 165, 147, 0.7)'}
        />
        <Card
          bg={'rgba(211, 176, 224, 0.25)'}
          bor={'rgba(211, 176, 224, 0.7)'}
        />
        <Card bg={'rgba(83, 177, 117, 0.1)'} bor={'rgba(83, 177, 117, 0.7)'} />
        <Card bg={'rgba(248, 164, 76, 0.1)'} bor={'rgba(248, 164, 76, 0.7)'} />
        <Card
          bg={'rgba(247, 165, 147, 0.25)'}
          bor={'rgba(247, 165, 147, 0.7)'}
        />
        <Card
          bg={'rgba(211, 176, 224, 0.25)'}
          bor={'rgba(211, 176, 224, 0.7)'}
        />
        <Card bg={'rgba(83, 177, 117, 0.1)'} bor={'rgba(83, 177, 117, 0.7)'} />
        <Card bg={'rgba(248, 164, 76, 0.1)'} bor={'rgba(248, 164, 76, 0.7)'} />
        <Card
          bg={'rgba(247, 165, 147, 0.25)'}
          bor={'rgba(247, 165, 147, 0.7)'}
        />
        <Card
          bg={'rgba(211, 176, 224, 0.25)'}
          bor={'rgba(211, 176, 224, 0.7)'}
        />
        <Card bg={'rgba(83, 177, 117, 0.1)'} bor={'rgba(83, 177, 117, 0.7)'} />
        <Card bg={'rgba(248, 164, 76, 0.1)'} bor={'rgba(248, 164, 76, 0.7)'} />
        <Card
          bg={'rgba(247, 165, 147, 0.25)'}
          bor={'rgba(247, 165, 147, 0.7)'}
        />
        <Card
          bg={'rgba(211, 176, 224, 0.25)'}
          bor={'rgba(211, 176, 224, 0.7)'}
        />
        <Card bg={'rgba(83, 177, 117, 0.1)'} bor={'rgba(83, 177, 117, 0.7)'} />
        <Card bg={'rgba(248, 164, 76, 0.1)'} bor={'rgba(248, 164, 76, 0.7)'} />
        <Card
          bg={'rgba(247, 165, 147, 0.25)'}
          bor={'rgba(247, 165, 147, 0.7)'}
        />
        <Card
          bg={'rgba(211, 176, 224, 0.25)'}
          bor={'rgba(211, 176, 224, 0.7)'}
        />
        <Card bg={'rgba(83, 177, 117, 0.1)'} bor={'rgba(83, 177, 117, 0.7)'} />
        <Card bg={'rgba(248, 164, 76, 0.1)'} bor={'rgba(248, 164, 76, 0.7)'} />
        <Card
          bg={'rgba(247, 165, 147, 0.25)'}
          bor={'rgba(247, 165, 147, 0.7)'}
        />
        <Card
          bg={'rgba(211, 176, 224, 0.25)'}
          bor={'rgba(211, 176, 224, 0.7)'}
        />
        <Card bg={'rgba(83, 177, 117, 0.1)'} bor={'rgba(83, 177, 117, 0.7)'} />
        <Card bg={'rgba(248, 164, 76, 0.1)'} bor={'rgba(248, 164, 76, 0.7)'} />
        <Card
          bg={'rgba(247, 165, 147, 0.25)'}
          bor={'rgba(247, 165, 147, 0.7)'}
        />
        <Card
          bg={'rgba(211, 176, 224, 0.25)'}
          bor={'rgba(211, 176, 224, 0.7)'}
        />
      </ScrollView>

      <View
        style={{
          width: '100%',
          height: 60,
          position: 'absolute',
          backgroundColor: '#ffe79e',
          bottom: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 20,
        }}>
        <Image
          style={{width: 50, height: 50}}
          source={require('../../../assets/gift.png')}
        />
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
              marginRight: 60,
            }}>
            Get Free Delivery
          </Text>
          <Text style={{fontSize: 12, color: 'black'}}>
            on your first order with bellissimo
          </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={{fontSize: 12, color: 'black'}}>1/2 items in Cart</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: 24,
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: 'black',
                borderRadius: 18,
              }}
            />
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: 'white',
                borderRadius: 18,
              }}
            />
          </View>
        </View>
      </View>

      {/* Main */}
      {/* Login */}
      {/* name="Find" */}
      {/* OTP */}
      {/* ProductMain */}
      {/* Signup */}
      {/* 
      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        style={{width: 20, height: 40, backgroundColor: 'red', marginTop: 100}}>
        <Text>Hellod dskljflksjflsljkljcjl</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default FindProduct;
