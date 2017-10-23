// 这里面y复制成了默认的值 
{
    function test(x, y = 'world') {
        console.log('默认值', x, y);
    }
    test('hello'); //默认值 hello world
    test('hello', 'kill'); // 默认值 hello kill
}

//这里面y的取值是前面的x 不是外面定义的x
{
    let x = 'test';

    function test2(x, y = x) {
        console.log('作用域', x, y);
    }
    test2(); // undefined undefined
    test2('kill'); // kill kill
}

// 在函数内部定义的时候并没有 定义x  函数赋值默认参数的时候
// 是取得外面的变量x
{
    let x = 'test';

    function test2(c, y = x) {
        console.log('作用域', c, y);
    }
    test2('kill'); //  kill test
}


// rest参数作用 将传入的并不知道有多少个参数的所有数据转换为一个数组
// 这个函数的作用就是将这个参数每一个部分收遍历打印出来
// rest 将一些离散的值变成一个数组
//  rest 1
//  rest 2
//  rest 3
//  rest 4
//  rest a
{
    function test3(...arg) {
        for (let v of arg) {
            console.log('rest', v);
        }
    }
    test3(1, 2, 3, 4, 'a');
}


// 扩展运算符和rest 是一个逆应用 讲一个数组拆成三个离散的值
{
    console.log(...[1, 2, 4]); // 1 2 4
    console.log('a', ...[1, 2, 4]); // a 1 2 4
}


// 箭头函数  首先定义函数名称  = （参数） => (返回值)
//  如果没有参数  这个v 就写成一个圆括号
{
    let arrow = v => v * 2;
    let arrow2 = () => 5;
    console.log('arrow', arrow(3)); // 6
    console.log(arrow2()); // 5
}

// 尾调用 提升性能;
{
    function tail(x) {
        console.log('tail', x);
    }

    function fx(x) {
        return tail(x)
    }
    fx(123) // tail 123
}