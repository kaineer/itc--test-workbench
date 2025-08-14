export const noop = () => null;

export const compose = (...fns) => (obj: any) => {
  let result = obj;
  fns.forEach((fn) => {
    result = fn(result);
  });
  return result;
}
