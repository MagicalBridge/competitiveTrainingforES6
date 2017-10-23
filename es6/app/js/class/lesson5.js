// 二进制的表示方法是以OB 开头的; 小写大写都可以; 
// 八进制的表示方法是 0o开头;
{
    console.log('B', 0B111110111); // 503
    console.log(0o767); // 503
}

//  Number.isFinite 判断是这个值是不是有效的;
//  NaN本身就不是一个数 所以判断 结果为false;
//  isNaN  是不是NaN 
{
    console.log('15', Number.isFinite(15)); // true
    console.log('NaN', Number.isFinite(NaN)); // false 
    console.log('1/0', Number.isFinite('true' / 0)); // false
    console.log('NaN', Number.isNaN(NaN)); //true
    console.log('0', Number.isNaN(0)); // false 0 是一个数字不是NaN 
}


// 判断是不是整数 参数传入的字符串  肯定是false;
{
    console.log('25', Number.isInteger(25)); // true
    console.log('25.0', Number.isInteger(25.0)); // true
    console.log('25.1', Number.isInteger(25.1)); // false
    console.log('25.1', Number.isInteger('25')); // false
}

// js中 数字的表示区间是-2^53 --- 2^53 但是不包含这两个端点 
// 判断一个数是不是在你给的有效的额范围之内 isSafeInteger
{
    console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER); //9007199254740991 -9007199254740991
    console.log('10', Number.isSafeInteger(10)); // 10 true
    console.log('a', Number.isSafeInteger('a')); // a false
}

// 只想取一个数字的整数的部分
{
    console.log(4.1, Math.trunc(4.1)); // 4.1  4
    console.log(4.9, Math.trunc(4.9)); // 4.9  4
}


// 判断一个数是整数负数还是零的api sign
{
    console.log('-5', Math.sign(-5)); // -5 -1
    console.log('0', Math.sign(0)); //0 0
    console.log('5', Math.sign(5)); // 5 1
    console.log('50', Math.sign('50')); // 50 1 将这个50 转换成了number对象
    console.log('foo', Math.sign('foo')); // foo NaN
}

// 立方根的api
{
    console.log('-1', Math.cbrt(-1)); // -1 -1
    console.log('8', Math.cbrt(8)); // 8 2
}