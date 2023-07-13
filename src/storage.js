export const setItem = (key, value) => {
  try {
    const storageValue = JSON.stringify(value);
    window.localStorage.setItem(key, storageValue);
  } catch (e) {
    console.log(e);
  }
};
export const getItem = (key, defaultValue = {}) => {
  try {
    const storageValue = window.localStorage.getItem(key);
    return storageValue ? JSON.parse(storageValue) : defaultValue;
  } catch (e) {
    console.log(e);
    return defaultValue;
  }
};
