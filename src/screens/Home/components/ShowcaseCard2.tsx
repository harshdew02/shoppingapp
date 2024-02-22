import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import ProductCard2 from './ProductCard2';
import {colors} from '../../../constants';

type ShowcaseCard2Props = {
  title: string;
  subtitle: string;
  titleImage: string;
  data: any[];
};

const ShowcaseCard2: React.FC<ShowcaseCard2Props> = ({
  data,
  subtitle,
  titleImage,
  title,
}) => {
  return (
    <View
      style={{
        width: '100%',
        borderRadius: 18,
        marginBottom: 10,
        flexDirection: 'column',
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
      <FlatList
        style={{
          width: '100%',
          gap: 10,
        }}
        contentContainerStyle={{
          gap: 10,
        }}
        horizontal={true}
        data={data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={e => {
          return <ProductCard2 />;
        }}
      />
    </View>
  );
};

export default ShowcaseCard2;
