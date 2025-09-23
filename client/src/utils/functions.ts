export const noop = () => null;

interface Fn {
  (...args: unknown[]): unknown;
}

export const compose = (...fns: Fn[]) => (obj: unknown) => {
  let result = obj;
  fns.forEach((fn) => {
    result = fn(result);
  });
  return result;
}
