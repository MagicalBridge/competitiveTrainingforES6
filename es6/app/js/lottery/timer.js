// 创建一个时间类
class Timer {
    // 创建一个倒计时函数 接收三个参数 截止时间 更新回调完成倒计时之后的回调
    countdown(end, update, handle) {
        // 获取当前的时间
        const now = new Date().getTime();
        // 保存当前的指针
        const self = this;
        // 如果当前时间 减去结束时间大于零 说明活动已经结束
        // 在当前作用域内部改变handle的指向 同时执行倒计时结束的事件回调
        if (now - end) {
            handle.call(self);
        } else {
            // 如果活动没有结束 判断当前的时间距离结束时间的剩余时间
            let last_time = end - now;
            // 设置一个常量 记录一天的毫秒数 一个小时的毫秒数 一分钟 一秒
            const px_d = 1000 * 60 * 60 * 24;
            const px_h = 1000 * 60 * 60;
            const px_m = 1000 * 60;
            const px_s = 1000;

            // 剩余的时间包含多少天 多少小时 多少分钟  多少秒
            let d = Math.floor(last_time / px_d);
            // 当前的毫秒数时间减去一天的毫秒数 剩余的时间 用于计算剩余多少小时
            let h = Math.floor((last_time - d * px_d) / px_h);
            let m = Math.floor((last_time - d * px_d - h * px_h) / px_m);
            let s = Math.floor((last_time - d * px_d - h * px_h - s * px_s) / px_s);
            // 创建空数组保存拼接的字符串
            let r = [];
            // 做一个判断 如果计算出来的day 大于零 说明活动的时间倒计时很大
            if (d > 0) {
                // 数组中添加 倒计时天数 模板
                r.push(`<em>${d}</em>天`);
            };
            // 如果数组的长度是零 说明 剩余时间不足天 但是又要保证 剩余时间用于保存小时数;
            if (r.length || (h > 0)) {
                // 数组中添加 倒计时小时数 模板
                r.push(`<em>${h}</em>时`)
            }
            if (r.length || (m > 0)) {
                // 数组中添加 倒计时小时数 模板
                r.push(`<em>${m}</em>分`)
            }
            if (r.length || (s > 0)) {
                // 数组中添加 倒计时小时数 模板
                r.push(`<em>${s}</em>秒`)
            }
            // 将这个值保存到对象的last——time属性上面
            self.last_time = r.join('');
            // 完成当前的更新
            update.call(self, r.join(''));

            // 一秒钟执行一次时间更新
            setTimeout(function() {
                self.countdown(end, update, handle)
            }, 1000);

        }

    }
}

export default Timer