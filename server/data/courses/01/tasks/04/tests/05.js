// TASK: В константу `railroad` нужно записать копию `source` дополненную парой `{ blue: 'синий' }`

const { railroad, source } = result;

assertDeepEqual({ ...source, blue: "синий" }, railroad);
