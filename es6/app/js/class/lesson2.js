//什么是解构赋值

// 解构赋值的分类
// 数组的解构赋值
// 对象的解构赋值
// 字符串的解构赋值
// 布尔值的解构赋值
// 函数的解构赋值
// 数值的解构赋值；

{
    let a, b, rest;
    [a, b] = [1, 2]; // 数组的解构赋值第一种形式
    console.log(a, b); // 1,2
}


{
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 3, 4, 5, 6]; // 另一种形式
    console.log(a, b, rest); // 1 2 (4) [3, 4, 5, 6] 
}


// #对象的解构赋值
{
    let a, b;
    ({ a, b } = { a: 1, b: 2 })
    console.log(a, b); // 1,2
}


// 解构赋值的默认值 
// 如果结构赋值没有成功的配对 没有配对的就是undefined;
{
    let a, b, c, rest;
    [a, b, c = 3] = [1, 2];
    console.log(a, b, c); //1 2 3
}

// 使用场景交换变量的值
{
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b);
}

// f 运行完毕之后返回的是1,2
// 随即将值赋值给指定的数值
{
    function f() {
        return [1, 2]
    }
    let a, b;
    [a, b] = f();
    console.log(a, b); // 1 2
}

// 返回多个值的时候  选择性的接收我们想要的
{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a, , , b] = f();
    console.log(a, b); //1 4
}


// 这种场景就是我不知道返回的值到底有多少个
// 只关心第一个其余的返回一个数组即可
{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a, , ...b] = f();
    console.log(a, b); //1 (3) [3, 4, 5]
}


// 对象的解构赋值;
{
    let o = { p: 42, q: true };
    let { p, q } = o;
    console.log(p, q); // 42 true
}

// 对象的解构赋值的覆盖;
{
    let { a = 10, b = 5 } = { a: 3 };
    console.log(a, b); // 3 5
}

// 使用场景;
{
    let metaData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'description'
        }]
    }
    let { title: esTitle, test: [{ title: cnTitle }] } = metaData;
    console.log(esTitle, cnTitle); //vabc test
}