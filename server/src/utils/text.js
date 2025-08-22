export const split = (text) => {
  return text.split("\n");
}

export const lines = (...args) => {
  return args.join("\n");
}

export const endsWith = (suffix) => (str) => (
  str.endsWith(suffix)
);

export const startsWith = (prefix) => (str) => (
  str.startsWith(prefix)
);
