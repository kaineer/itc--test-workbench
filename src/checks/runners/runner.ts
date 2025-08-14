import { createContext, Script } from "vm"

// asserts exports all usable asserts
import { asserts } from "../asserts/assert";

interface RunnerResult {
  failed: boolean;
  message: string;
}

export const runner = (
  code: string
): RunnerResult => {
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
