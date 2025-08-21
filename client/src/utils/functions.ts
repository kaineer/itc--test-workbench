export const noop = () => null;

export const compose = (...fns: any[]) => (obj: any) => {
  let result = obj;
  fns.forEach((fn) => {
    result = fn(result);
  });
  return result;
}
