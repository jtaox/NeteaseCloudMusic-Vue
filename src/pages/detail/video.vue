<template>
    <div id="videoDetail">
        <toolbar :barState="barState"></toolbar>
        <video-plus ref="videoPlus" class="videoPlus" :url="mv.data.brs['240'] ? mv.data.brs['240'] : ''">
        </video-plus>
        <div class="videoBottom">
            <div id="videoInfo">
                <div>
                    <p class="mvName">{{ mv.data.name }}</p>
                    <p class="mvBaseInfo"><span class="mvArtistName">歌手：
                        <span v-for="item, i in mv.data.artists" :key="i">{{ item.name }}<span v-if="i == mv.data.artists.length">/</span></span>    
                    </span><span class="mvPlayCount">播放：6666</span></p>
                    <p class="mvPublishTime">发行时间：{{ mv.data.publishTime }}</p>
                    <p class="mvDesc">{{ mv.data.desc }}</p>
                </div>
            </div>
            <div class="operate">
                <section>
                    <img src="./../../../static/images/subscribe_icon2.png">
                    {{ mv.data.subCount }}
                </section>
                <section>
                    <img src="./../../../static/images/comment_icon2.png">
                    {{ mv.data.commentCount}}
                </section>
                <section>
                    <img src="./../../../static/images/share_icon2.png">
                    分享
                </section>
                <section>
                    <img src="./../../../static/images/download_icon2.png">
                    下载
                </section>
            </div><div>
                
            </div>
            <div class="line"></div>
            <div class="recommend">
                <div class="top_title">
                    <p>相关推荐</p>
                </div>
                <div class="mv_list">
                    <mv-list-item v-for="item, i in simiMv.mvs" :data="item" :key="i"></mv-list-item>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import videoPlus from "./../../components/video"
    import toolbar from "./../../components/toolbar"
    import mvListItem from "./../../components/common/mvListItem.vue"

    export default{
        data(){
            return {
                barState: {
                    isShow: true
                }
            }
        },
        created(){
            // 请求mv数据
            this.$store.dispatch("fetchMv", "5565903");
            // 请求推荐数据
            this.$store.dispatch("fetchSimiMv", "5565903");
            setTimeout(() => {
                this.barState.isShow = false;
            }, 1000);

        },
        mounted(){
        },
        computed: {
            mv(){
                return this.$store.state.detail.mv;
            },
            simiMv(){
                return this.$store.state.detail.simiMv;
            }
        },
        components: {
            videoPlus, toolbar, mvListItem
        }
    }

</script>
<style>
    #videoDetail{
        background-color: #f2f4f5;
        
    }
    #videoDetail .videoToolbar{
         height: 1.033rem;
         background-color: rgba(0, 0, 0, 0);
         position: fixed;
         top: 0;
         left: 0;
         right: 0;
    }
    #videoDetail .back{
        height: 1.033rem;
        width: 1.033rem;
        background: url(../../../static/images/back.png) no-repeat center center;
        background-size: 45%;
    }
    #videoInfo{
        padding: 0 0.2rem;
        margin: 0.2rem 0 0;
    }
    #videoInfo .mvName{
        font-size: 0.3rem;
        color: #333;
        line-height: 0.6rem;
    }
    #videoInfo .mvBaseInfo,
    #videoInfo .mvPublishTime,
    #videoInfo .mvDesc{
        font-size: 0.247rem;
        line-height: 0.5rem;
    }
    #videoInfo .mvBaseInfo{
        display: flex;
    }
    #videoInfo .mvArtistName{
        color: #507DAF;
        flex: 7;
    }
    #videoInfo .mvPlayCount{
        color: #919293;
        flex: 3;
    }
    #videoInfo .mvPublishTime{
        color: #999;
    }
    #videoInfo .mvDesc{
        color: #626262;
    }
    #videoDetail .operate{
        height: 1.127rem;
        padding: 0.10rem 0 0;
        display: flex;
    }
    #videoDetail .operate section{
        text-align: center;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 0.247rem;
    }
    #videoDetail .operate section:nth-child(2) img{
        width: 0.43rem;
    }
    #videoDetail .operate img{
        width: 0.5rem;
    }
    #videoDetail .operate span{
        font-size: 0.23rem;
    }
    #videoDetail .top_title{
        height: 0.9rem;
        display: flex;
        align-items: center;
    }
    #videoDetail .top_title p{
        padding: 0 .3rem 0 0.17rem;
        font-size: 0.247rem;
        box-shadow: inset 0.05rem 0 #D33A31;
        background: url(./../../../static/images/arrow.png) no-repeat right center;
        background-size: 10%;
        display: inline-block;
    }
    #videoDetail .mv_list{
        padding: 0 .1rem;
    }

    #videoDetail .videoPlus{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    #videoDetail .videoBottom{
        position: fixed;
        top: 4rem;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: scroll;
    }

</style>


