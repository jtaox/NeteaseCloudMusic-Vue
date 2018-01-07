import request from "./vuex/request"

// 封装audio
export default {
    // 播放url队列
    playUrlList: [],

    // 播放id队列，暂时用不到
    playIdList: [],

    // audio实例
    audio: null,

    // 播放模式
    mode: "",

    // 当前播放url
    currentPlayUrl: "",
    // 当前播放id
    currentPlayId: "",

    // 当前播放index
    currentPlayIndex: 0,

    // 通知更新
    updateArr: [],

    // 进行初始化
    init(id){
        this.audio = document.querySelector(id);
        this.audio.onloadedmetadata = () => this.onLoadedMetadata(this.audio.duration);
        // 播放时间更新
        this.audio.ontimeupdate = () => {
            // cb(this.currentTime,this.duration, this.buffered);
            this.updateArr.forEach((ele) => {
                ele(this.audio.currentTime,this.audio.duration, this.audio.buffered);
            });
        }

        this.audio.onpause = this.onPause;
        this.audio.onplaying = this.onPlaying;

    },

    // 播放
    play(){
        this.audio.play();
    },
    // 暂停
    pause(){
        this.audio.pause();
    },
    // 下一首
    next(){
        
    },

    // 播放当前
    playNow(id){
        // 请求音乐url
        request.requestSongUrl(id, res => {
            // 请求成功后
            // 更新播放url列表
            var result = res.data.data.some((ele, i) => {
                if(ele){
                    this.currentPlayUrl = ele.url;
                    this.playUrlList.splice(this.currentPlayIndex ? (this.currentPlayIndex + 1) : 0, 0, ele.url);
                    return true;
                }
            })

            if(result){
                // 添加到正在播放的下一个
                // 更新id列表
                this.playIdList.splice(this.currentPlayIndex ? (this.currentPlayIndex + 1) : 0, 0, id);
                // 更新正在播放index
                !this.currentPlayIndex || (this.currentPlayIndex += 1);
                this.currentPlayId = id;
                this.audio && (this.audio.src =  this.currentPlayUrl)

            } else {
                // 没有播放数据
            }

            
        })

        // 请求音乐详情
        request.requestSongDetail(id, res => {
            this.onLoadSongDetail(res);
        })
    },

    
    // 进度更新回调
    onTimeUpdate(cb){
        this.updateArr.push(cb);
    },

    // 加载元素据成功回调
    onLoadedMetadata: () => {},  

    // 记载歌曲详情回调
    onLoadSongDetail: () => {},

    // 开始暂停回调
    onPause: () => {},
    onPlaying: () => {}

}

