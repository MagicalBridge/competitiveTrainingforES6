/*
generator 执行tell 的时候 遇到yield 的时候
会停下来执行yield 之前的语句 当执行next的是时候
 会调用yield 的内容 再next的时候 执行下一个yield
或者return 从而保证 在函数体内部是一个异步执行的过程 
*/

{
    // genarator 基本定义
    let tell = function*() {
        yield 'a';
        yield 'b';
        return 'c'
    };

    let k = tell();

    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

/**
 * generator 和iterator 接口的关系
 * 任何一个对象的iretator接口 都是部署在
 * Symbol.iterator属性上面的;generator就是一个
 * 遍历器生成函数 可以把它赋值给 Symbol.iterator
 * 上面从而使对象也具有 iterator 接口
 */

//  对象是没有for of 这种使用的 除非给它部署 iterator接口
// 不是通过手写的方式而是通过generator 方式
{
    let obj = {};
    obj[Symbol.iterator] = function*() {
        yield 1;
        yield 2;
        yield 3;
    }

    for (let value of obj) {
        console.log('value', value);
    }
}



{
    let state = function*() {
        while (1) {
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }

// 应用的实例 抽奖逻辑
{
    // 抽奖的逻辑是和倒计时的次数是隔离开的
    let draw = function(count) {
        // 具体的逻辑
        console.info(`剩余${count}次`);
    }

    // 通过generator 这个去做限制
    let residue = function*(count) {
        while (count > 0) {
            count--;
            yield draw(count);
        }
    }

    let star = residue(5)
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    document.getElementById("start").addEventListener('click', function() {
        star.next();
    }, false)
}



// 长轮训 数据状态是无状态的;
{
    let ajax = function*() {
        yield new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve({ count: 0 });
            }, 200)
        })
    }


    let pull = function() {
        let generator = ajax();
        let step = generator.next();
        step.value.then(function(d) {
            if (d.count != 0) {
                setTimeout(function() {
                    console.info('wait');
                    pull();
                }, 1000)
            } else {
                console.info(d)
            }
        })
    }
    pull()
}