export const setItem = <T>(key: string, item: T): string | void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(item));
    return key;
  } catch (err) {
    console.error("localStorage setItem error:", err);
  }
};

export const getItem = <T>(key: string): T | null => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (err) {
    console.error("localStorage getItem error:", err);
    return null;
  }
};

export const removeItem = (key: string): void => {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.error("localStorage removeItem error:", err);
  }
};

const localStorageUtils = { setItem, getItem, removeItem };

export default localStorageUtils;
