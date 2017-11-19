// 修饰器作为一个函数是修改类的行为
// 修饰器只在类的范围内有效 其他地方不能用

// 限制某一个属性是只读的
{
    // 修饰器函数 接收三个参数 修改的类本身 修改了什么属性 该属性的描述对象 
    let readonly = function(target, name, descriptor) {
        // 属性的描述对象 写的属性 置为false
        descriptor.writable = false;
        return descriptor
    };

    class Test {
        @readonly
        time() {
            return '2017-03-11'
        }
    }

    let test = new Test();

    //  //如果试图修改这个被修饰的函数 就会报错 
    // test.time=function(){
    //   console.log('reset time');
    // };

    console.log(test.time());
}


// 在类的外面进行修饰 
{
    let typename = function(target, name, descriptor) {
        // 添加了静态方法 这个静态方法的name 通过类来调用;
        target.myname = 'hello';
    }

    @typename
    class Test {

    }

    console.log('类修饰符', Test.myname);
    // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

// 模拟埋点系统
{
    let log = (type) => {
        return function(target, name, descriptor) {
            let src_method = descriptor.value;
            descriptor.value = (...arg) => {
                src_method.apply(target, arg);
                console.info(`log ${type}`);
            }
        }
    }
    class AD {
        @log('show')
        show() {
            console.info('ad is show')
        }

        @log('click')
        click() {
            console.info('ad is click')
        }
    }

    let ad = new AD();
    ad.show();
    ad.click();
}