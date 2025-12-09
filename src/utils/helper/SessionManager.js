// Set an item in sessionStorage with an expiry time (in seconds)
export const setSessionItemWithExpiry = (key, value, ttlSeconds) => {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + ttlSeconds * 1000,
  };
  sessionStorage.setItem(key, JSON.stringify(item));
};

// Get an item and check if it has expired
export const getSessionItemWithExpiry = (key) => {
  const itemStr = sessionStorage.getItem(key);
  if (!itemStr) return null;

  try {
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      sessionStorage.removeItem(key); // expired
      return null;
    }
    return item.value;
  } catch (e) {
    return null;
  }
};
