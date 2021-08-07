// import AsyncStorage from '@react-native-async-storage/async-storage';
import Keychain from 'react-native-keychain';

const MEMORY_KEY_PREFIX = '@BookSpaceStorage:';

type StorageData = {
  [index: string]: string;
};

let data: StorageData = {};

export class KeychainStorage {
  static syncPromise: Promise<string> | null = null;

  static setItem(key: string, value: string): void {
    void Keychain.setGenericPassword(MEMORY_KEY_PREFIX + key, value);
    data[key] = value;
  }

  static getItem(key: string): string | undefined {
    return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  static removeItem(key: string): void {
    void Keychain.resetGenericPassword();
    delete data[key];
  }

  static clear(): void {
    data = {};
  }

  // static sync(): Promise<string> {
  //   if (!KeychainStorage.syncPromise) {
  //     KeychainStorage.syncPromise = new Promise((res, rej) => res('1'));
  //   }

  //   return KeychainStorage.syncPromise;
  // }
}
