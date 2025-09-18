// title: "Исходный объект `source` не трогаем"

const { source } = result;

assertDeepEqual({ green: "зеленый", red: "красный", yellow: "желтый" }, source);
