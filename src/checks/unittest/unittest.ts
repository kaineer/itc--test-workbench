interface Unittest {
  // i'm not sure where it should be taken from
  // maybe from description's first line
  title: string;
  description: string;
  template: string; // template for js-content in editor
  // case files in tests/ subdir
  cases: { [id: string]: string };
  // variable names to get from cases
  // later they should be used to get values
  // from runner, using instrumentation
  resultVars: string[];
}

export const unittest = (dir: string): Unittest => {

}
