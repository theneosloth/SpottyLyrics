import * as SecureStore from 'expo-secure-store';

export async function save(key, value) {
  return await SecureStore.setItemAsync(key, value);
}

export async function getValueFor(key) {
  return await SecureStore.getItemAsync(key);
}

export async function deleteValue (key) {
  return await SecureStore.deleteItemAsync(key);
}
