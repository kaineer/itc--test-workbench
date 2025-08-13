import { createContext, Script } from "vm"

// asserts exports all usable asserts
import { asserts } from './assert'

interface RunnerResult {
  failed: boolean;
  message: string;
}

export const runner = (
  code: string
) => {
  const script = new Script(code);
  const context = { ...asserts };

  createContext(context, { name: "runner" });

  try {
    script.runInContext(context);
  } catch (err) {
    return {
      failed: true,
      message: err.toString(),
    }
  }
  return { failed: false };
}
