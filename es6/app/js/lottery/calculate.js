class Calculate {
    /**
     * [computeCount 计算注释]
     * @param {number} active [当前选中的号码]
     * @param {string} play_name [当前玩法标识]
     * @return {number}      {注数}
     */
    computeCount(active, play_name) {
        // 申明一个变量的标识 初始化注数为0;
        let count = 0;
        // 判断这个当前选的玩法标识是不是符合规则 这个paly_list 
        // 是一个Map数据类型 通过has 方法进行判断
        const exist = this.play_list.has(play_name);
        // 生成一个数组进行运算 es6 中这里使用 new Array 里面传入的参数active
        // 用于声明指定长度的数组，但是这里只是声明了但是没有给他赋值 使用fill()
        // 方法对它的每一项进行填充; 如果 这个放在es5中  需要进行for 循环然后使用
        // push 方法进行填充 没有这种操作简单快捷
        const arr = new Array(active).fill("0");
        // 如果这种玩法存在并且这种玩法的字符串的首字母是用r开头的
        if (exist && play_name.at(0) === 'r') {
            // 执行combine方法 接收两个参数 数组和玩法的字符串的第二个字符;对count赋值
            count = Calculate.combine(arr, play_name.split('')[1]);
        }
        return count;
    }

    /**
     * [computeBonus 奖金范围预测]
     * @param {number} active [当前选中的号码]
     * @param {string} play_name [当前玩法标识]
     * @return {array}      {奖金范围}
     */
    computeBonus(active, play_name) {
        // 拿到玩法的字符串 分割成两个部分
        const play = play_name.split('');
        // 保存当前的对象引用指针;
        const self = this;
        // 创建一个数组 传入的参数是 分割后的第二个值 ['r','2'];
        let arr = new Array(play[1] * 1).fill('0');
        let min, max;
        if (paly[0] === 'r') {
            // 设置一个最小命中数;
            let min_active = 5 - (11 - active);
            // 最小命中数大于零;
            if (min_active > 0) {
                if (min_active - play[1] >= 0) {
                    arr = new Array(min_active).fill(0);
                    min = Calculate.combine(arr, play[1]).length;
                } else {
                    if (play[1] - 5 > 0 && active - play[1] >= 0) {
                        arr = new Array(active - 5).fill(0);
                        min = Calculate.combine(arr.play[1] - 5).length;
                    } else {
                        min = active - play[1] > -1 ? 1 : 0;
                    }
                }
            } else {
                min = active - play[1] > -1 ? 1 : 0;
            }

            let max_active = Math.min(active, 5);

            if (play[1] - 5 > 0) {
                if (active - play[1] >= 0) {
                    arr = new Array(active - 5).fill(0);
                    max = Calculate.combine(arr, play[1] - 5).length;
                } else {
                    max = 0;
                }
            } else if (play[1] - 5 < 0) {
                arr = new Array(Math.min(active, 5)).fill(0);
                max = Calculate.combine(arr, play[1]).length;
            } else {
                max = 1;
            }
        }
        return [min, max].map(item => * self.play_list.get(play_name).bonus);
    }

    // 如果使用 类名引用的这个方法肯定是静态方法 这里的combine方法就是静态方法
    /**
     * [combine 组合运算]
     * @param {array} arr [参与组合运算的数组]
     * @param {number} size [组合运算的基数]
     * @return {number}      {计算的注数}
     */
    static combine(arr, size) {
        let allResult = [];
        (function f(arr, size, result) {
            // 将数组的长度赋值给arrLen;
            let arrLen = arr.length;
            // 如果size 大于数组的长度 递归运算需要截止
            if (size > arrLen) {
                return;
            }
            // 如果最后传入的 size 等于数组的长度了
            if (size === arrLen) {

                allResult.push([].concat(result, arr));
            } else {
                for (let i = 0; i < arrLen; i++) {
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if (size == 1) {
                        allResult.push(newResult);
                    } else {
                        let newArr = [].concat(arr);
                        newArr.splice(0, i + 1);
                        f(newArr, size - 1, newResult);
                    }
                }
            }
        })(arr, size, [])

    }

}

export default Calculate