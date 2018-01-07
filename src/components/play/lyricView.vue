<template>
    <div id="lyricView">
        <div class="lyricDiv">
            <!--<div></div>-->
            <ul ref="lrcUl" :style="{ transform: 'translate(0, -' + translateY + 'px)' }">
                <li v-for="ele, i in lrc" :key="i" :class="{ curLyric: i == currentLrc }">{{ ele.lrc }}</li>
            </ul>
            <!--<div></div>-->
            <p v-if="!hasLrc">暂时没有歌词</p>
        </div>
    </div>
</template>
<script>
    import axios from "axios"

    export default {
        props: ["id"],
        data(){
            return {
                lrc: [],
                hasLrc: true,
                currentLrc: 0,
            }
        },
        created(){
            // 请求歌词
            // this.$store.dispatch("fetchLyric", this.id);

            // this.$store.commit("setLineHeight", )
            // 异步请求
            axios.get("/api/lyric", {
                params: {
                    id: this.id
                }
            }).then(success => {
                if(success.status == 200){

                    // 请求数据成功
                    let lrcArr = success.data.lrc.lyric.split("\n");
                    lrcArr = lrcArr.map( ele => {
                        var arr = ele.split("]");
                        arr[0] = arr[0].replace("[", "");
                        return {
                            time: this.timeConver(arr[0]),
                            lrc: arr[1]
                        };
                    });
                    this.lrc = lrcArr;
                }
                this.musicPlay.play();
            })

            this.musicPlay.onTimeUpdate((cur, dur) => {
                this.lrc.filter((item, index) => {
                    if(cur > item.time){
                        this.currentLrc = index;
                        if(index > 3){
                            this.$store.commit("setTranslateY", index);
                        }
                        return item;
                    }
                });
            })

        },
        mounted(){
            let h = parseFloat(document.querySelector("html").style.fontSize) * 0.8;
            console.log(h)
            this.$store.commit("setLineHeight", h);
        },
        methods: {
            timeConver(time){
                let tArr = time.split(":");
                let m = Number(tArr[0]);
                m = m * 60;
                return Number(tArr[1]) + m;
            }
        },
        computed: {
            translateY(){
                return this.$store.state.lrcTask.translateY.y;
            }
            // lyric(){
            //     if(this.$store.state.detail.lyric.lrc){
            //         console.log(this.$store.state.detail.lyric.lrc.lyric.split("\n"))
            //         return this.$store.state.detail.lyric.lrc.lyric.split("\n");
                    
            //     } else {
            //         return [];
            //     }
            // }
        }
    }
</script>
<style>
    #lyricView .lyricDiv{
        height: 3.8rem;
        padding-top: 1rem;
        margin: 1rem auto 0;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
    }

    #lyricView .lyricDiv div{
        position: absolute;
        z-index: 99;
        left: 0;
        right: 0;
        height: 2rem;
    }

    #lyricView .lyricDiv div:nth-of-type(1){
        top: 0;
        background: linear-gradient(to bottom, #F3F4F6, rgba(245, 246, 248, 0));
    }
    #lyricView .lyricDiv div:nth-of-type(2){
        bottom: 0;
        background: linear-gradient(to bottom, rgba(245, 246, 248, 0), #F3F4F6);
    }

    #lyricView .lyricDiv ul{
        color: rgba(255, 255, 255, .5);
        transition: all 1s;
    }

    #lyricView .lyricDiv li{
        height: 0.8rem;
        text-align: center;
    }

    #lyricView .lyricDiv .curLyric{
        color: #fff;
    }
    
</style>

