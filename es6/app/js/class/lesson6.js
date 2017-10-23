// 一组数据变量转换为 数组这么一个作用
{
    let arr = Array.of(3, 4, 7, 9, 11);
    console.log('arr=', arr); //[3, 4, 7, 9, 11]

    let empty = Array.of();
    console.log('empty', empty); // []
}


// from 将类数组的形式转换为真正的数组
// 除了这个还具有和map相类似的用法
{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function(item) {
        console.log(item.textContent);
    });
    // 这种用法 加了一个回调函数  降低一个数组做了一个映射 每一项*2
    console.log(Array.from([1, 3, 5], function(item) { return item * 2 }));
}


// 填充数组 fill 
{
    console.log('fill-7', [1, 'a', undefined].fill(7)); // [7, 7, 7]
    // 将指定的未指定的元素替换成指定的元素 起始位置是 包含起始不包含结束位置
    console.log('fill,pos', ['a', 'b', 'c', '6', 'i'].fill(7, 1, 3)); //["a", 7, 7, "6", "i"]
}


// 这里面的遍历存在一些兼容的问题 需要使用prolifill 
{
    for (let index of['1', 'c', 'ks'].keys()) {
        console.log('keys', index);
    }

    for (let value of['1', 'c', 'ks'].values()) {
        console.log('values', value);
    }

    for (let [index, value] of['1', 'c', 'ks'].entries()) {
        console.log('values', index, value);
    }
}



{
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
}


// 查找数组索引
{
    console.log([1, 2, 3, 4, 5, 6].find(function(item) { return item > 3 })); //  4
    console.log([1, 2, 3, 4, 5, 6].findIndex(function(item) { return item > 3 })); //3
}


// 
{
    console.log('number', [1, 2, NaN].includes(1)); // true
    console.log('number', [1, 2, NaN].includes(NaN)); // true
}