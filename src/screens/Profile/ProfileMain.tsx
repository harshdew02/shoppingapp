import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../constants';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FEIcon from 'react-native-vector-icons/Feather';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
const ProfileMain = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
      }}>
      <Image
        style={{
          width: 180,
          height: 40,
          resizeMode: 'contain',
          marginTop: 10,
        }}
        source={require('../../../assets/textLogo.png')}
      />
      <Text
        style={{
          fontSize: 32,
          fontWeight: '900',
          color: colors.textColor,
          lineHeight: 44,
        }}>
        Welcome to Profile
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '900',
          color: colors.textColor,
          lineHeight: 30,
          marginBottom: 10,
        }}>
        Siddhant Singh
      </Text>
      <View
        style={{
          width: '100%',
          height: 150,
          backgroundColor: colors.secondary,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: colors.primary,
          padding: 10,
          flexDirection: 'column',
          gap: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            width: '100%',
            flex: 1,
          }}>
          <TouchableOpacity
            style={{
              height: '100%',
              flex: 1,
              backgroundColor: colors.primary,
              borderRadius: 18,
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FEIcon
              style={{
                fontSize: 20,
                fontWeight: '900',
                color: colors.textColor,
              }}
              name="user"
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '900',
                color: colors.textColor,
              }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: '100%',
              flex: 1,
              backgroundColor: colors.primary,
              borderRadius: 18,
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FAIcon
              style={{
                fontSize: 20,
                fontWeight: '900',
                color: colors.textColor,
              }}
              name="map-pin"
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '900',
                color: colors.textColor,
              }}>
              Edit Address
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            width: '100%',
            flex: 1,
          }}>
          <TouchableOpacity
            style={{
              height: '100%',
              flex: 1,
              backgroundColor: colors.primary,
              borderRadius: 18,
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FEIcon
              style={{
                fontSize: 20,
                fontWeight: '900',
                color: colors.textColor,
              }}
              name="shopping-bag"
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '900',
                color: colors.textColor,
              }}>
              Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: '100%',
              flex: 1,
              borderColor: colors.primary,
              borderWidth: 2,
              borderRadius: 18,
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MIIcon
              style={{
                fontSize: 20,
                fontWeight: '900',
                color: colors.textColor,
              }}
              name="support-agent"
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '900',
                color: colors.textColor,
              }}>
              Support
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: '#E72300',
            }}>
            Logout
          </Text>
          <AntDIcon
            name="logout"
            style={{
              fontSize: 16,
              color: '#E72300',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '800',
              color: colors.tertiary,
            }}>
            made with
          </Text>
          <AntDIcon
            name="heart"
            style={{
              fontSize: 16,
              color: colors.tertiary,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '800',
              color: colors.tertiary,
            }}>
            in india
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileMain;
