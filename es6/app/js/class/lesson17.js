// // 导出一个变量
// export let A = 123;

// // 导出一个函数
// export function test() {
//     console.log('test');
// }

// // 导出一个类
// export class Hello {
//     test() {
//         console.log('class');
//     }
// }



let A = 123;
let test = function() {
    console.log('test');
}
class Hello {
    test() {
        console.log('class');
    }
}


//  这种导出的方式 比较常用
export default {
    A,
    test,
    Hello
}