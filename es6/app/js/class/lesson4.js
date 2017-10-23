// 字符串的新特性
// 1. unicode 表示方法
// 2. 遍历接口
// 3. 模板字符串
// 4. 新增的方法10种

{
    console.log('a', `\u0061`); // a a
    console.log('s', `\u20BB7`); // s ₻7
    console.log('s', `\u{20BB7}`); // s 𠮷
}


{
    let s = '𠮷';
    console.log('length', s.length); //length 2
    console.log('0', s.charAt(0));
    console.log('1', s.charAt(1));
    console.log('at0', s.charCodeAt(0));
    console.log('at1', s.charCodeAt(1));

    let s1 = '𠮷a';
    console.log('length', s1.length); // length 3
    console.log('code0', s1.codePointAt(0));
    console.log('code0', s1.codePointAt(0).toString(16));
    console.log('code1', s1.codePointAt(1));
    console.log('code2', s1.codePointAt(2));
}

{
    console.log(String.fromCharCode("0x20bb7"));
    console.log(String.fromCodePoint("0x20bb7"));
}

{
    let str = '\u{20bb7}abc';
    for (let i = 0; i < str.length; i++) {
        console.log('es5', str[i]);
    }
    for (let code of str) {
        console.log('es6', code);
    }
}

// includes方法 判断指定的字符串是否包含指定的字符;
// start 方法   判断字符串是以哪些的字符串为骑士的;
// end 方法     判断字符串是以哪些字符串为结束的;
{
    let str = "string";
    console.log('includes', str.includes("r")); // true
    console.log('includes', str.includes("c")); // false
    console.log('start', str.startsWith('str')); // true
    console.log('end', str.endsWith('ng')); // true
}


//  repeat:重复将指定的字符串重复两倍
{
    let str = "abc";
    console.log(str.repeat(2)); // abcabc
    console.log(str.repeat(3)); //abcabcabc
}

// 模板字符串
{
    let name = "list";
    let info = "hello world";
    let m = `i am ${name},${info}`;
    console.log(m); // i am list,hello world
}

// 下面的这两个api 具有补白的作用 
// padStart 从开始位置开始,长度总共是2不够的地方使用0补充
// padEnd 在后面补充字符串;
// 这种api的实际用法是放在日期补全的时候非常明显;
{
    console.log('1'.padStart(2, '0'));
    console.log('1'.padEnd(2, '0'));
}


// 标签模板 
{
    let user = {
        name: 'list',
        info: 'hello world'
    };

    console.log(abc `I am ${user.name},${user.info}`);

    function abc(s, v1, v2) {
        console.log(s, v1, v2);
        return s + v1 + v2
    }
}

// 对所有的转义字符又做了一次转义 保证转义字符是不生效的
// 输出的是原汁原味的字符串;
{
    console.log(String.raw `Hi\n${1+2}`); //Hi\n3
    console.log(`Hi\n${1+2}`);
}