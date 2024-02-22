import AsyncStorage from '@react-native-async-storage/async-storage';


export async function AsyncStorageGetItem(key: string) {
    try {
        let res: any = await AsyncStorage.getItem(key);
        if (res) {
            return res
        }
    } catch (error) {
        return -1;
    }
}

export async function AsyncStorageSetItem(key: string, value: any) {
    try {
        value = typeof value == "object" ? JSON.stringify(value) : value.toString();
        let res: any = await AsyncStorage.setItem(key, value);
        return 1
    } catch (error) {
        return -1;
    }
}