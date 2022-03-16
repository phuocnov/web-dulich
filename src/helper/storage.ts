export default {
  get: (key: string) => {
    try {
      const value: any = localStorage.getItem(key);
      return value !== null ? JSON.parse(value) : null;
    } catch (error) {
      throw error;
    }
  },

  set: (key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw error;
    }
  },

  remove: (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      throw error;
    }
  },

  clear: () => {
      try {
          localStorage.clear()
      } catch (error) {
          throw error
      }
  }
};
