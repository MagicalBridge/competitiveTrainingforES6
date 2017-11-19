import 'babel-polyfill';
import './class/lesson1';
// import './class/lesson2';
// import './class/lesson3';
// import './class/lesson4';
// import './class/lesson5';
// import './class/lesson6';
// import './class/lesson7';
// import './class/lesson8';
// import './class/lesson9';
// import './class/lesson10';
// import './class/lesson11';
// import './class/lesson12';
// import './class/lesson13';
// import './class/lesson14';
// import './class/lesson15';
// import './class/lesson16';
// import './class/lesson17';


/*
  这种导入的方式  导入的是一个一个的模块
  import { A, test, Hello } from './class/lesson17';
  console.log(A);
  console.log(test);
  console.log(Hello);
*/


// 这种导入的方式首先是导入全部 然后起一个 别名 使用.方式调用
/**
 * import * as lesson17 from './class/lesson17';
console.log(lesson17.A);
console.log(lesson17.test);
console.log(lesson17.Hello);
 */


//  使用export default 的方式导入模块 然后使用 这里模块的名字可以随意起
/**
 *import lessondefault from './class/lesson17';
console.log(lessondefault.A)
console.log(lessondefault.test)
console.log(lessondefault.Hello)
 
 */

// import Lottery from './lottery'; // 这个模块用于将所有的子模块进行整合