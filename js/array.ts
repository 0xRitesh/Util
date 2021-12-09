export const array = function <T>(length: number, initialValue?: T) {
  return new Array<T>(length).fill(initialValue);
};
