{
    // 供应商的原始的对象 有三个属性我们在业务开发中 把它当成原始的对象存储我们的数据
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };

    // 创建一个代理商 第一个参数要代理的东西
    // 有一个原始的供应商对象,通过proxy新生成一个对象
    // 这个对象是映射obj的,最终用户操作的是monitor
    // 最终通过 Proxy 传递给 obj
    // 如果我想操作 对象的time属性 并不是直接操作obj
    // 而是通过 Proxy 代理对time的操作
    // 这里的target指的是obj这个对象
    let monitor = new Proxy(obj, {
        // 拦截对象属性的读取
        get(target, key) {
            // console.log(target)
            return target[key].replace('2017', '2018')
        },
        // 拦截对象设置属性
        set(target, key, value) {
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },
        // 拦截key in object操作
        has(target, key) {
            if (key === 'name') {
                return target[key]
            } else {
                return false;
            }
        },
        // 拦截delete
        deleteProperty(target, key) {
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true;
            } else {
                return target[key]
            }
        },
        // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time')
        }
    });

    console.log('get', monitor.time);

    monitor.time = '2018';
    monitor.name = 'Louis';
    console.log('set', monitor.time, monitor);

    console.log('has', 'name' in monitor, 'time' in monitor);

    // delete monitor.time;
    // console.log('delete',monitor);
    //
    // delete monitor._r;
    // console.log('delete',monitor);
    console.log('ownKeys', Object.keys(monitor));

}

{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };

    console.log('Reflect get', Reflect.get(obj, 'time'));
    Reflect.set(obj, 'name', 'mukewang');
    console.log(obj);
    console.log('has', Reflect.has(obj, 'name'));
}