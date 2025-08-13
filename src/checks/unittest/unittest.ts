interface Unittest {
  // i'm not sure where it should be taken from
  // maybe from description's first line
  title: string;
  // @see: description.ts
  description: string;
  template: string; // template for js-content in editor
  // case files in tests/ subdir
  //
  // @see: testcase.ts
  cases: { [id: string]: string };
  // variable names to get from cases
  // later they should be used to get values
  // from runner, using instrumentation
  resultVars: string[];
}

export const unittest = (dir: string): Unittest => {
  // 1. считать описание
  // 2. получить по возможности заголовок
  // TODO: иерархия?
  //
  // 3. получить тесткейсы
  // 4. для каждого кейса получить список переменных
  // 5. объединить все переменные через set в один набор
}
