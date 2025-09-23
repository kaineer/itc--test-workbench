export interface TestCase {
  title: string;
  resultVars: string[];
  code: string;
}

export interface Unittest {
  cases: TestCase[];
}
