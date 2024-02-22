import { create } from 'zustand'
import axios from 'axios'
import Toast from 'react-native-toast-message'
import { AsyncStorageGetItem, AsyncStorageSetItem } from '../utils/localStorage'

export type UserData = {
    name: {
        firstName: string
        lastName: string
    },
    email: string
    phoneNumber: string
}

type AuthState = {
    loading: boolean
    phoneNumber: string
    isLogined: boolean
    isSignuped: boolean
    userData: UserData
    user: any
    token: string
    getToken: () => void
    getUserData: (token: string) => void
    setuserData: (data: any) => void
    sendOTP: (phone: string) => void
    verifyOTP: (otp: string) => void
    resendOTP: () => void
    setPhoneNum: (phone: string) => void
    login: (phone: string) => void
    signup: () => void
}

const url = "https://bellissimo-api.belonindia.com"

export const useAuth = create<AuthState>(set => ({
    loading: false,
    isLogined: false,
    isSignuped: false,
    token: '',
    phoneNumber: '',
    user: null,
    userData: {
        name: {
            firstName: '',
            lastName: ''
        },
        email: '',
        phoneNumber: ''
    },
    setuserData: (data) => {
        set({ userData: data })
    },
    setPhoneNum: (phone) => {
        set({ phoneNumber: phone })
    },
    getUserData: async (token) => {
        try {
            set({ loading: true })
            const res = await axios.get(`${url}/users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res.data)
            set({ user: res.data, loading: false })
        } catch (error) {
            set({ loading: false })
        }
    },
    getToken: async () => {
        try {
            const token = await AsyncStorageGetItem('token')
            set({ token })
        } catch (error) {
            console.log(error)
        }
    },
    sendOTP: async (phone) => {
        try {
            set({ loading: true })
            Toast.show({
                type: 'info',
                text1: 'Sending OTP',
                text2: `You will get a OTP in your Whatsapp number ${phone}`
            });
            await axios.post(`${url}/otp/send`, { phone })
            Toast.show({
                type: 'success',
                text1: 'OTP Sent',
                text2: `Please check your Whatsapp. You will get a OTP in your Whatsapp number ${phone}`
            });
            set({ loading: false })
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Something went Wrong Sending OTP',
                text2: 'Please try again.'
            });
            set({ loading: false })
        }
    },
    verifyOTP: async (otp) => {
        try {
            set({ loading: true })
            Toast.show({
                type: 'info',
                text1: 'Verifying OTP',
                text2: `Please wait for a moment.`
            });
            const phone = useAuth.getState().phoneNumber
            await axios.post(`${url}/otp/verify`, { phone, otp })
            Toast.show({
                type: 'success',
                text1: 'OTP Verified',
                text2: `All Set.`
            });
            const userData = useAuth.getState().userData
            if (userData.email) {
                useAuth.getState().signup()
            } else {
                set({ loading: false, isLogined: true })
            }
        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: error.response.data.message,
                text2: 'Please try again.'
            });
            set({ loading: false })
        }
    },
    resendOTP: async () => {
        try {
            Toast.show({
                type: 'info',
                text1: 'Resending OTP',
                text2: `You will get a OTP in your Whatsapp number ${useAuth.getState().phoneNumber}`
            });
            await axios.post(`${url}/otp/resend`, { phone: useAuth.getState().phoneNumber })
            Toast.show({
                type: 'success',
                text1: 'OTP Re-Sent',
                text2: `Please check your Whatsapp. You will get a OTP in your Whatsapp number ${useAuth.getState().phoneNumber}`
            });
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Something went Wrong Sending OTP',
                text2: 'Please try again.'
            });
            set({ loading: false })
        }
    },
    login: async (phone) => {
        try {
            set({ loading: true })
            Toast.show({
                type: 'info',
                text1: 'Let Me Check Whether You Are Registered or Not',
                text2: `This wont take much time.`
            });
            const { data } = await axios.post(`${url}/auth/login`, { phoneNumber: phone })
            Toast.show({
                type: 'success',
                text1: 'Wooh!!',
                text2: `Welcome to Bellissimo. You are successfully logged in.`,
            });
            Toast.show({
                type: 'info',
                text1: 'Sending OTP',
                text2: `You will get a OTP in your Whatsapp number ${phone}`
            });
            await axios.post(`${url}/otp/send`, { phone })
            Toast.show({
                type: 'success',
                text1: 'OTP Sent',
                text2: `Please check your Whatsapp. You will get a OTP in your Whatsapp number ${phone}`
            });
            // console.log(data)
            await AsyncStorageSetItem('token', data.data.token)
            set({ loading: false, isLogined: true, token: data.data.token })
        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: error.response.data.message,
                text2: 'Please try again.'
            });
            set({ loading: false })
        }
    },
    signup: async () => {
        try {
            Toast.show({
                type: 'info',
                text1: 'Creating your Account',
                text2: `This wont take much time.`
            });
            const userData = useAuth.getState().userData
            const { data } = await axios.post(`${url}/auth/signup`, userData)
            Toast.show({
                type: 'success',
                text1: 'Account Created',
                text2: `Welcome to Bellissimo. Successfully created your account`,
            });
            await AsyncStorageSetItem('token', data.data.token)
            set({ loading: false, isSignuped: true, token: data.data.token })
        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: error.response.data.message,
                text2: 'Please try again.'
            });
            set({ loading: false })
        }
    }
}))