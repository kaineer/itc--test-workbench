const { log } = console;

// Присваивание
const source = { green: 'зеленый', yellow: 'желтый', red: 'красный' };

// const { green, yellow, red } = source; log(green);
// const { green } = source;

// Параметры фунции
//
// const fn = (obj) => console.log(obj.green);
// const fn = ({ green }) => console.log(green);
// const fn = ({ blue = 'синий' }) => console.log(blue);

// fn(source);
//
// Копирование, добавление элементов, объединение
//
// const appendix = { white: 'белый', blue: 'синий' }
//
// const sourceCopy = { ...source }
// const sourcePlus = { ...source, blue: 'синий' }; log(sourcePlus);
// const whole = { ...source, ...appendix }; log(whole);
