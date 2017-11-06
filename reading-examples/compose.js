import compose from '../src/compose'

// function f
const f = (arg) => `函数f(${arg})` 

// function g
const g = (arg) => `函数g(${arg})`

// function h 最后一个函数可以接受多个参数
const h = (...arg) => `函数h(${arg.join('_')})`

const r = compose(f, g, h)

console.log(typeof r) // function

console.log(r(1,2,3)) //函数f(函数g(函数h(1_2_3)))