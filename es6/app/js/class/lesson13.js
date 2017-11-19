/*
promise 是一种异步编程的解决方案
    异步在传统的解决方案上有两种解决方案,一种是通过回调的
    方式一种是通过事件触发的方式 promise  区别于以上的两种方式


    
*/

// es5 中回调的场景 
// {
//     // 基本定义 接收一个回调函数
//     let ajax = function(callback) {
//         console.log('执行');
//         // 使用定时器模拟场景;
//         setTimeout(function() {
//             // 如果callback 存在  执行callback
//             callback && callback.call()
//         }, 1000);
//     };
//     // 调用ajax 传入回调函数 打印timeout1
//     ajax(function() {
//         console.log('timeout1');
//     })
// }


// 如果场景变得复杂，先执行a 再执行b 再执行c  回调嵌套是很复杂的
// 代码的复杂影响了后期的维护 很难看出来 回调的顺序问题
// {
//     let ajax = function() {
//         console.log('执行2');
//         // 返回一个 promise 对象的实例 这个实力拥有 then方法 执行下一步的方法
//         // resolve 就是执行下一步的操作 reject 就是要中断当前的操作
//         return new Promise(function(resolve, reject) {
//             setTimeout(function() {
//                 resolve()
//             }, 1000);
//         })
//     };

//     // ajax 执行完毕的时候 执行then方法 then 的函数体就是需要执行的方法
//     ajax().then(function() {
//         console.log('promise', 'timeout2');
//     })
// }



// 增加复杂度 多步调用 
// {
//     let ajax = function() {
//         console.log('执行3');
//         return new Promise(function(resolve, reject) {
//             setTimeout(function() {
//                 resolve()
//             }, 1000);
//         })
//     };

//     ajax()
//         .then(function() {
//             return new Promise(function(resolve, reject) {
//                 setTimeout(function() {
//                     resolve()
//                 }, 2000);
//             });
//         }).then(function() {
//             console.log('timeout3');
//         })

// }


// 捕获错误
// {
//     let ajax = function(num) {
//         console.log('执行4');
//         return new Promise(function(resolve, reject) {
//             if (num > 5) {
//                 resolve()
//             } else {
//                 throw new Error('出错了')
//             }
//         })
//     }

//     ajax(6).then(function() {
//         console.log('log', 6);
//     }).catch(function(err) {
//         console.log('catch', err);
//     });

//     ajax(3).then(function() {
//         console.log('log', 3);
//     }).catch(function(err) {
//         console.log('catch', err);
//     });
// }


// 一个场景 所有的图片全部加载完成的时候图片再显示 否则不显示
// {
//     // 所有图片加载完再加载图片
//     function loadImg(src) {
//         return new Promise((resolve, reject) => {
//             // 创建一个img 标签
//             let img = document.createElement("img");
//             img.src = src;
//             img.onload = function() {
//                 resolve(img);
//             }
//             img.onerror = function(err) {
//                 reject(err);
//             }
//         })
//     }

//     // 添加图片到body
//     function showImgs(imgs) {
//         imgs.forEach(function(img) {
//             document.body.appendChild(img);
//         })
//     }

//     // 将多个promise 实例当做一个promise 实例
//     // all下面是个数组 数组传递多个promise 实例
//     // 当所有的promise 实例发生改变的时候 新的promise
//     // 实例才会发生变化 也就是三张图片全部加载完毕之后才会
//     // 执行新的promise对象 所以promise.all 也会有then方法
//     // loadImg是一个promise 实例 这个实例是一个加载图片的
//     // 动作 三个加载图片的动作放在一个all 里面 生成一个promise
//     // 实例 当加载完成之后才会执行 then的逻辑 也就是显示图片
//     Promise.all([
//         loadImg('http://i1.piimg.com/1949/4f411ed22ce88950.jpg'),
//         loadImg('http://i1.piimg.com/1949/5a35e8c2b246ba6f.jpg'),
//         loadImg('http://i1.piimg.com/1949/1afc870a86dfec5f.jpg')
//     ]).then(showImgs);
// }


// race 这个用法是 对于不同的地方的资源先加载哪一个 图片我不关心
// 只要加载出来了 就行了
{
    // 所有图片加载完再加载图片
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            // 创建一个img 标签
            let img = document.createElement("img");
            img.src = src;
            img.onload = function() {
                resolve(img);
            }
            img.onerror = function(err) {
                reject(err);
            }
        })
    }

    // 添加图片到body
    function showImgs(img) {
        let p = document.createElement('P');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    // 将多个promise 实例当做一个promise 实例
    // all下面是个数组 数组传递多个promise 实例
    // 当所有的promise 实例发生改变的时候 新的promise
    // 实例才会发生变化 也就是三张图片全部加载完毕之后才会
    // 执行新的promise对象 所以promise.all 也会有then方法
    // loadImg是一个promise 实例 这个实例是一个加载图片的
    // 动作 三个加载图片的动作放在一个all 里面 生成一个promise
    // 实例 当加载完成之后才会执行 then的逻辑 也就是显示图片
    Promise.race([
        loadImg('http://i1.piimg.com/1949/4f411ed22ce88950.jpg'),
        loadImg('http://i1.piimg.com/1949/5a35e8c2b246ba6f.jpg'),
        loadImg('http://i1.piimg.com/1949/1afc870a86dfec5f.jpg')
    ]).then(showImgs);
}