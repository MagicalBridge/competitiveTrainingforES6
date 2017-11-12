import $ from 'jquery'; // 引入jq 模块使用ajax

class Interface {
    /**
     * [getOmit 获取遗漏数据函数]
     * @param {string} issue [当前期号]
     * @return {[type]}      {description}
     */
    getOmit(issue) {
        // 使用let 创建self 变量指向当前的对象的引用
        let self = this;
        // getOmit 这个方法返回的不是空 也不是false 而是一个promise对象
        // 这个对象是为了 一个异步操作 getOmit 这个方法是为了获取遗漏数据的
        // 从前端发起请求 到服务端给我操作 我期间还需要进行下一步操作；
        // 传统的方法是给 getOmit 方法传入一个参数 callback 回调参数
        // 现在promise可以解决这个问题
        // promise 对象接收练个参数 resolve 一个是 reject
        return new Promise((resolve, reject) => {
            $.ajax({
                url: './get/omit',
                data: {
                    issue: issue
                },
                dataType: "json",
                success: function(res) {
                    // 获取到的数据保存起来到当前对象上面 方便其他的引用
                    // setOmit 是一个方法
                    self.setOmit(res.data);
                    // 成功回调的时候 使用resolve
                    resolve.call(self, res)
                },
                error: function(err) {
                    reject.call();
                }
            })
        })
    }

    /**
     * [getOpenCode 获取开奖号码接口]
     * @param {string} issue [当前期号]
     * @return {[type]}      {description}
     */
    getOpenCode(issue) {
        // 使用let 创建self 变量指向当前的对象的引用
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: './get/opencode',
                data: {
                    issue: issue
                },
                dataType: "json",
                success: function(res) {
                    // 获取到的数据保存起来到当前对象上面 方便其他的引用
                    // setOpenCode 是一个方法
                    self.setOpenCode(res.data);
                    // 成功回调的时候 使用resolve
                    resolve.call(self, res)
                },
                error: function(err) {
                    reject.call();
                }
            })
        })
    }

    /**
     * [getState 获取当前状态的接口]
     * @param {string} issue [当前期号]
     * @return {[type]}      {description}
     * 11选5 每十分钟 开奖一期 销售完之后 开出号码进入下面一期
     * 每个状态 数据都和当期的整个期号密切相关
     */
    getState(issue) {
        // 使用let 创建self 变量指向当前的对象的引用
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: './get/state',
                data: {
                    issue: issue
                },
                dataType: "json",
                success: function(res) {
                    // 成功回调的时候 使用resolve
                    resolve.call(self, res)
                },
                error: function(err) {
                    reject.call();
                }
            })
        })
    }
}

export default Interface // 导出当前的接口