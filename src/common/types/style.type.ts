import { TextStyle, ViewStyle } from "react-native";

export type CommonTextStyle = Pick<TextStyle, Exclude<keyof TextStyle, 'fontSize' | 'fontWeight' | 'color'>>

export type CommonViewStyle = Pick<ViewStyle, Exclude<keyof ViewStyle, 'flex' | 'flexDirection' | 'alignItems' | 'justifyContent' | 'flexWrap' | 'backgroundColor'>>;