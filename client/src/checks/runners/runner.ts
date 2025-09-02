import { Script } from "vm"

// asserts exports all usable asserts
import { asserts } from "../asserts/assert";

interface RunnerResult {
  failed: boolean;
  message?: string;
}

const getMessage = (error: unknown): string => {
  if (error && typeof error === 'object' && 'message' in error) {
    return String(error.message);
  }
  return String(error);
}

export const runner = (
  code: string
): RunnerResult => {
  const script = new Script(code);

  try {
    script.runInNewContext({...asserts});
  } catch (err) {
    return {
      failed: true,
      message: getMessage(err),
    }
  }

  return { failed: false };
}
