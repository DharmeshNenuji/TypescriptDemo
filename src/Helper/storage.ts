import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
  addItem = (item: any, key: string) => {
    AsyncStorage.setItem(key, JSON.stringify(item));
  };

  removeItem = (key: string) => {
    AsyncStorage.removeItem(key);
  };

  getItem = (key: string) => {
    AsyncStorage.getItem(key);
  };
}
const localStorage = new LocalStorage();
export default localStorage;
