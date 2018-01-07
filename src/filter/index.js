import Vue from "vue"
export default function(){
    // 已定义播放次数过滤器
    Vue.filter("playCount", function(val){
        if(!val) return ''
        if(val < 10000){
            return val + "万"
        } else {
            return Math.ceil(val / 10000) + "万";
        }
       
    })

    // 格式化时间
    Vue.filter("timeFormat", function(val){
        val = val.toFixed();
        var minute = parseInt(val / 60);
        var m = minute < 10 ? ("0" + minute) : minute;
        var second = val % 60;
        var s = second < 10 ? ("0" + second) : second;
        return m + ":" + s;
    })

}