import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import Entypo from 'react-native-vector-icons/Entypo';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import {colors} from '../../../constants';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  opened?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  opened = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(opened);
  const animatedHeight = useSharedValue(0);

  const toggleAccordion = () => {
    animatedHeight.value = withTiming(isExpanded ? 0 : 100, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
    setIsExpanded(!isExpanded);
  };

  const onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      runOnJS(toggleAccordion)();
    }
  };

  return (
    <View style={{
    }} >
      <TapGestureHandler onHandlerStateChange={onHandlerStateChange}>
        <Animated.View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Gilroy-Semibold',
              color: colors.textColor,
              maxWidth: '85%',
            }}>
            {title}
          </Text>
          <Entypo
            name={isExpanded ? 'chevron-up' : 'chevron-down'}
            size={25}
            color={colors.textColor}
          />
        </Animated.View>
      </TapGestureHandler>
      <Animated.View
        style={{
          height: animatedHeight,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        {children}
      </Animated.View>
    </View>
  );
};

export default AccordionItem;
