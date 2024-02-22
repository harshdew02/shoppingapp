import { TextStyle, ViewStyle } from "react-native";

export const colors = {
    primary: '#f4cb44',
    textColor: '#0f0b08',
    secondary: '#f5f5f5',
    tertiary: '#757575',
}

const commonStyle = {
    borderRadius: 18,
}

const fontWeight = {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    black: '900',
} as const

type TextStyleOptions = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

type TextStyleVariants = Record<TextStyleOptions, TextStyle>

export const textStyleVariants: TextStyleVariants = {
    sm: {
        fontSize: 12,
        color: colors.textColor,
        lineHeight: 16,
        fontFamily: 'Gilroy-Light'
    },
    md: {
        fontSize: 16,
        color: colors.textColor,
        lineHeight: 20,
        fontFamily: 'Gilroy-Regular'
    },
    lg: {
        fontSize: 20,
        color: colors.textColor,
        lineHeight: 24,
        fontFamily: 'Gilroy-Medium'
    },
    xl: {
        fontSize: 24,
        color: colors.textColor,
        lineHeight: 28,
        fontFamily: 'Gilroy-Bold'
    },
    xxl: {
        fontSize: 32,
        color: colors.textColor,
        lineHeight: 36,
        fontFamily: 'Gilroy-Bold'
    },
    xxxl: {
        fontSize: 40,
        color: colors.textColor,
        lineHeight: 48,
        fontFamily: 'Gilroy-Black'
    },
};



type ButtonStyleOptions = 'sm' | 'md' | 'lg' | 'xl'

type ButtonStyleVariants = Record<ButtonStyleOptions, ViewStyle>

export const buttonStyleVariants: ButtonStyleVariants = {
    sm: {
        width: '100%',
        height: 40,
        borderRadius: commonStyle.borderRadius,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap:10
    },
    md: {
        width: '100%',
        height: 50,
        borderRadius: commonStyle.borderRadius,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap:10
    },
    lg: {
        width: '100%',
        height: 60,
        borderRadius: commonStyle.borderRadius,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap:10
    },
    xl: {
        width: '100%',
        height: 70,
        borderRadius: commonStyle.borderRadius,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
}
