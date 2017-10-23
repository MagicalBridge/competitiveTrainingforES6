// 全局作用域 函数作用域



/*
1.这里面涉及的块级作用域, 大括号包裹的地方都是块级作用域的
范围内部, for循环的内部也算是块级作用域的范围,
在块级作用域外部访问内部的变量会报错;
2.es6 是默认开启严格模式的，严格模式下变量，没有声明就引用
  会报 引用错误 而不是报undefined；
3.使用let 变量不能重复声明;
4.使用const声明的常量是不能修改的；同样也是有块级作用域的概念的;声明必须赋值;
5.对象是引用类型，最后的返回值是对象内存中的指针,指针是不能变化的 但是对象本身是可以变化的；
*/

// es5 写法
function testes5() {
    for (var i = 1; i < 3; i++) {
        console.log('es5 ' + i); // 1,2
    }
    console.log('es5 ' + i); //3;
}

//es6 写法
function testes6() {
    for (let i = 1; i < 3; i++) {
        console.log('es6 ' + i); // 1,2
    }
    console.log('es6 ' + i); // 报错;
}




function constant() {
    const PI = 3.1415926;
    const k = {
        a: 1
    }
    k.b = 3;
    console.log(PI, k);
}


// testes5();
// testes6();
constant();