<template>
    <div id="play">
        <tool-bar :barState="{ isShow: true }"></tool-bar>
        <div class="ctrl">
            <div class="main">
                <div :style="{ display: isShow? 'block' : 'none' }"  class="topCtrl" ref="playState" >
                    <div class="bar" :style="{animationName: isPlay ? 'play' : 'pause'}">
                        <img src="./../../../static/images/bar.png" >
                    </div>
                    <div class="circle" :style="{ animationName: 'rotate', animationPlayState:  isPlay ? 'running' : 'paused'}">
                        <img src="./../../../static/images/circle.png" >
                        <div class="circleImg" :style="{ backgroundImage: 'url(' + picUrl + ')' }"></div>
                    </div>
                </div>
                <lyric-view @click.native="isShowCtrl()" :style="{ display: !isShow? 'block' : 'none' }" :id="$route.params.id"></lyric-view>
                <div class="bottomCtrl">
                    <div class="opBar">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <div class="progress">
                        <span>{{ currTime | timeFormat }}</span>
                        <div class="proBar">
                            <p class="buffer" :style="{ width: bufferWidth + '%' }"></p>
                            <p class="currWidth" :style=" {width: currWidth + '%' } "></p>
                            <i :style="{ transform: 'translate(' + translateX + 'px, -0.12rem)' }"></i>
                        </div>
                        <span>{{ duration | timeFormat }}</span>
                    </div>
                    <div class="btns">
                        <span></span>
                        <p></p>
                        <div ref="playBtn" :class="{ pauseState: !isPlay }"></div>
                        <p></p>
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="blur" :style="{ backgroundImage: 'url(' + picUrl + ')' }"></div>
        </div>
    </div>
</template>
<script>
    import toolBar from "./../../components/toolbar"
    import lyricView from "./../../components/play/lyricView"

    export default{
        data(){
            return {
                isPlay: false,
                translateX: 0, // 进度条偏移量
                progWidth: 0,  
                bufferWidth: 0,
                currWidth: 0,
                duration: 0,
                currTime: 0,
                picUrl: "",
                isShow: true,  // 图片 歌词切换状态
                isPlayState: false
            }
        },
        created(){
            this.myEventBus.$emit("isShowCtrlBar", false);
            // 播放
            this.musicPlay.playNow(this.$route.params.id);
            this.musicPlay.onPlaying = () => {
                this.isPlayState = this.musicPlay.paused ? false : true;
            }

            this.musicPlay.onPause = () => {
                this.isPlayState = this.musicPlay.paused ? false : true;
            }

        },
        mounted(){
            // 获取进度条总宽度
            this.progWidth = document.querySelector(".proBar").clientWidth;

            // 控制条播放暂停
            this.$refs.playBtn.onclick = () => {
                if(this.isPlay){
                    this.musicPlay.pause();
                } else {
                    this.musicPlay.play();
                }
                this.isPlay = !this.isPlay;
            }

            // 点击图片
            this.$refs.playState.onclick = () => {
                this.isShowCtrl();
            }

            
            
            // 播放进度更新监听
            this.musicPlay.onTimeUpdate((cur, dur, buffered) => {
                this.currTime = cur;
                var rate = cur / dur;

                this.currWidth = (rate * 100).toFixed();

                this.translateX =  rate * this.progWidth;
                // 只有缓冲时间不等于当前播放时间才会更新缓冲进度
                if(buffered.length){
                    var b = buffered.end(0);
                    if(cur != b){ 
                        this.bufferWidth = (b / dur * 100).toFixed();
                    }
                }
            })

            // 元数据加载回调
            this.musicPlay.onLoadedMetadata = dur => {
                this.duration = dur;
            }

            this.musicPlay.onLoadSongDetail = data => {
                var res = data.data.songs.some(v => {
                    if(v){
                        this.picUrl = v.al.picUrl;
                        return true;
                    }
                })
            }

        },
        methods: {
            isShowCtrl(){
                console.log(this)
                this.isShow = !this.isShow;
            }
        },
        components: {
            toolBar, lyricView
        }
    }
</script>
<style>
    @keyframes play{
        from{
            transform: rotateZ(-30deg)
        }
        to{
            transform: rotateZ(0deg)
        }
    }
    @keyframes pause{
        from{
            transform: rotateZ(0deg)
        }
        to{
            transform: rotateZ(-30deg)
        }
    }
    @keyframes rotate{
        from{
            transform: rotateZ(0deg)
        }
        to{
            transform: rotateZ(360deg)
        }
    }
    #play{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    #play .ctrl{
        padding-top: 1.033rem;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    #play .ctrl > div{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    #play .blur{
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        -webkit-filter: blur(80px);
        z-index: 1;
    }
    #play .ctrl .main{
        z-index: 9;
        top: 1.033rem;
    }
    #play .bar{
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        left: 50%;
        top: -0.28rem;
        z-index: 2;
        transform-origin: 20% top;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
    #play .bar img{
        width: 100%;
    }
    #play .circle{
        width: 5.33rem;
        height: 5.33rem;
        margin: 0 auto;
        margin-top: 0.85rem;
        z-index: 1;
        animation-delay: 1s;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;  
        position: relative;  
    }
    #play .circle .circleImg{
        height: 3.55rem;
        width: 3.55rem;
        position: absolute;
        top: 50%;
        left: 50%;
        background-size: contain;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }
    #play .circle img{
        width: 100%;
    }
    #play .topCtrl{
        position: relative;
        overflow: hidden;
    }
    #play .bottomCtrl{
        margin-top: 1rem;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0.5rem;
    }
    #play .opBar{
        display: flex;
        justify-content: space-around;
        height: 1.18rem;
        padding: 0 1rem;
    }
    #play .opBar i{
        width: 1.18rem;
        height: 100%;
        background-size: cover;
    }
    #play .opBar i:nth-of-type(1){
        background-image: url(../../../static/images/a_w.png);
    }
    #play .opBar i:nth-of-type(2){
        background-image: url(../../../static/images/a_n.png);
    }
    #play .opBar i:nth-of-type(3){
        background-image: url(../../../static/images/a_k.png);
    }
    #play .opBar i:nth-of-type(4){
        background-image: url(../../../static/images/aa0.png);
        background-size: 1.1rem 1.1rem;
    }

    #play .progress{
        display: flex;
        padding: 0 .5rem;
        font-size: 0.23rem;
        color: rgba(255, 255, 255, 0.7);
        align-items: center;
    }
    #play .proBar{
        flex: 1;
        height: 0.04rem;
        border-radius: 0.04rem;
        background-color: rgba(255, 255, 255, 0.3);
        margin: 0 0.1rem;
        position: relative;
    }
    #play .proBar .buffer{
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
    }
    #play .proBar .currWidth{
        height: 100%;
        position: relative;
        top: -0.04rem;
        background-color: #D33A31;
    }
    #play .proBar i{
        height: 0.27rem;
        width: 0.27rem;
        display: block;
        background: url(./../../../static/images/aeg.png) no-repeat center center;
        background-size: 100%;
        position: absolute;
        top: 0;
        left: 0;
        margin-left: -0.05rem;
    }
    #play .btns{
        height: 1.67rem; 
        display: flex;
        align-items: center;
    }
    #play .btns span{
        height: 1.07rem;
        flex: 0.6;
        display: block; 
    }
    #play .btns span:nth-of-type(1){
        background: url(./../../../static/images/a_u.png) no-repeat center center;
        background-size: contain;
    }
    #play .btns span:nth-of-type(2){
        background: url(./../../../static/images/aai.png) no-repeat center center;
        background-size: contain;
    }
    #play .btns p{
        height: 1.41rem;
        flex: 0.8;
    }
    #play .btns p:nth-of-type(1){
        background: url(./../../../static/images/a9s.png) no-repeat center center;
        background-size: contain;
    }
    #play .btns p:nth-of-type(2){
        background: url(./../../../static/images/a9m.png) no-repeat center center;
        background-size: contain;
    }
    #play .btns div{
        height: 1.67rem;
        flex: 1;
        background: url(./../../../static/images/a9o.png) no-repeat center center;
        background-size: cover;
    }
    #play .btns .pauseState{
        background: url(./../../../static/images/a9q.png) no-repeat center center;
        background-size: cover;
    }
    
</style>