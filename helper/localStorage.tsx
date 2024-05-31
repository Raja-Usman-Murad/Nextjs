// Interface for the setLocalStorage function
interface SetLocalStorage {
  (key: string, value: string): void;
}

// Interface for the getLocalStorage function
interface GetLocalStorage {
  (key: string): string | null;
}

// Interface for the removeLocalStorage function
interface RemoveLocalStorage {
  (key: string): void;
}

export const setLocalStorage: SetLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const getLocalStorage: GetLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
  return null;
};

export const removeLocalStorage: RemoveLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};
