import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';
import ProductCard3 from './ProductCard3';

type ShowcaseCard3Props = {
  title: string;
  titleImage: string;
  subtitle: string;
  data: any[];
};

const ShowcaseCard3: React.FC<ShowcaseCard3Props> = ({
  subtitle,
  title,
  titleImage,
  data
}) => {
  return (
    <View
      style={{
        borderRadius: 20,
        marginBottom: 10,
        flexDirection: 'column',
        maxWidth: 400,
      }}>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: colors.textColor,
                marginTop: 10,
                fontFamily: 'Gilroy-Black',
              }}>
              {title}
            </Text>
            <Image
              source={{
                uri: titleImage,
              }}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: colors.textColor,
              marginBottom: 10,
              fontFamily: 'Gilroy-Semibold',
            }}>
            {subtitle}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex:1,
          width: '100%',
          height: 100,
          borderRadius: 18,
        }}>
        <FlatList
          contentContainerStyle={{
            gap: 10,
          }}
          keyExtractor={(_, i) => `${i}`}
          style={{
            maxWidth: 400,
          }}
          horizontal={true}
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={() => {
            return <ProductCard3 />;
          }}
        />
      </View>
    </View>
  );
};

export default ShowcaseCard3;
