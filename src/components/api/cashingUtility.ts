type Cache<T> = Record<string, T | undefined>;

const cache: Cache<unknown> = {};

export const getCachedData = <T>(key: string): T | undefined => {
  return cache[key] as T | undefined;
};

export const setCachedData = <T>(key: string, data: T): void => {
  cache[key] = data;
};
