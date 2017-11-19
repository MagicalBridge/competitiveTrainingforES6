// 这里面y赋值成了默认的值 
{
    function test(x, y = 'world') {
        console.log('默认值', x, y);
    }
    test('hello'); // hello world 这里y 没有赋值 使用的是 默认值
    test('hello', 'kill'); //  hello kill 这里 y已经赋值 使用新的值
}

//这里面y的取值是前面的x 不是外面定义的x
{
    let x = 'test';
    // 这个函数的第二个参数 使用的是x的值 调用的时候分为两种情况
    // 1.一种是在调用的是候给 x 传递参数  此时y的值打印的和x一样
    // 2.第二种是在调用的时候 不给x 赋值 打印出来的是undefined
    //   理所当然 因为形式参数有 调用的时候没有参数 虽然在最外层
    //   定义了参数 但是优先选择自己作用域内的 x
    // 3.第一个参数传入的和x 没有任何的关系 x引用了最外层的定义的值 y 引用了变量x
    //   这时候 y的值就是函数外面定义的 x的值
    // 4.第四种情况 和第三种的情况类似
    function test2(x, y = x) {
        console.log('作用域', x, y);
    }

    function test3(c, y = x) {
        console.log('x引用的外层定义 y引用外层x', x, y);
    }

    function test4(c, y = x) {
        console.log('第一个参数和x无关 y引用外层x', c, y);
    }

    test2('kill'); // kill kill  第一种情况
    test2(); // undefined undefined 第二种情况
    test3('随便传值'); // test test 第三种情况
    test4("这是c"); //这是c test
}


// 在函数内部定义的时候并没有 定义x  函数赋值默认参数的时候 是取得外面的变量x
{
    let x = 'test';

    function test2(c, y = x) {
        console.log('作用域', c, y);
    }
    test2('kill'); //  kill test
}


// (...arg) rest参数作用: 
// 将传入的并不知道有多少个参数的所有数据转换为一个数组
// 这个函数的作用就是将这个参数每一个部分收遍历打印出来
// rest 将一些离散的值变成一个数组
//  rest 1
//  rest 2
//  rest 3
//  rest 4
//  rest a
{
    function test3(...arg) {
        console.log(...arg); // 1 2 3 4 "a"
        for (let v of arg) {
            console.log('rest', v);
        }
    }
    test3(1, 2, 3, 4, 'a');
}


// 扩展运算符和rest 是一个逆应用 讲一个数组拆成三个离散的值
{
    console.log(...[1, 2, 4]); // 1 2 4 将这个数组拆成三个离散的值
    console.log('a', ...[1, 2, 4]); // a 1 2 4
}


// 箭头函数  首先定义函数名称  = （参数） => (返回值)
//  如果没有参数  这个v 就写成一个圆括号
{
    let arrow = v => v * 2; // 这里是一个参数的情况 可以不加括号
    let arrow2 = (v) => v * 3; // 这里是一个参数的情况 加括号
    let arrow3 = () => 5; // 如果没有参数 直接是空的圆括号 即可
    console.log('arrow', arrow(3)); // 6
    console.log('arrow2', arrow2(3)); // 9
    console.log(arrow3()); // 5
}

// 尾调用 提升性能;
{
    function tail(x) {
        console.log('tail', x);
    }

    // 在这个函数中调用tail
    function fx(x) {
        return tail(x)
    }
    fx(123) // tail 123
};