<template>
    <div class="myvideo" ref="video">
        <div class="myPlayBtn" ref="btn" :style="showPlayBtn ? { display: 'block' } : { display: 'none' }"></div>
        <video id="video" controls class="video-js">
        </video>
    </div>
</template>
<script>
    import { ADDRESS } from "./../config" 
    import videojs from "video.js"
    import 'video.js/dist/video-js.css';
    export default {
        // url 有防盗链处理的视频播放url 可能为空字符
        props: ["url"],
        data(){
            return {
                baseUrl: ADDRESS,
                showPlayBtn: true
            }
        },
        watch:{
            url(url, old){
                if(url != "" && document.querySelectorAll("source").length == 0){
                    var source = document.createElement("source");
                    source.setAttribute("src", this.baseUrl + '/mv/url?url=' + url);
                    document.querySelector("#video_html5_api").appendChild(source);
                }
            }
        },
        mounted(){
            var vcomponent = this;
            videojs('video').ready(function(){
                vcomponent.myPlayer = this;
                this.on("timeupdate", () => {
                    // 播放进度
                })
                this.on("play", () => {
                    // 隐藏播放按钮
                    vcomponent.showPlayBtn = false;
                })
                this.on("pause", () => {
                    // 显示播放按钮
                    vcomponent.showPlayBtn = true;
                })
            });

            // 移动端不能自动播放，只能由用户手动点击
            this.$refs.btn.onclick = () => {
                // 这里貌似不可以用videojs的方法
                // this.myPlayer.play();
                document.querySelector("#video_html5_api").play()
            }
            
            
        }
    }
</script>
<style>
    #video{
        height: 4rem;
        width: 100%;
    }
    .myvideo{
        position: relative;
    }
    .myvideo .myPlayBtn{
        position: absolute;
        height: 100px;
        width: 100px;
        background-color: #f00;
        z-index: 99999;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: url(./../../static/images/play.png) no-repeat center center;
        background-size: 100%;
    }
    .vjs-big-play-button{
        display: none !important;
    }
</style>
