<template>
    <div id="playDetailHeader">
        <div class="cover">
            <div class="coverImg">
                <img :src="detailData.coverImgUrl" />
                <div class="playcount">
                    <img src="./../../../static/images/vv.png"/>
                    <span>{{ detailData.playCount | playCount }}</span>
                </div>
                <div class="playinfo">

                </div>
            </div>
            <div class="info">
                <p>{{ detailData.name }}</p>
                <div class="creatorInfo">
                    <div class="avatar" :style="{ backgroundImage: 'url(' + detailData.creator.avatarUrl + ')' }"></div>
                    <p>{{ detailData.creator.nickname }}</p>
                </div>
            </div>
        </div>
        <div class="operate">
            <section>
                <img src="./../../../static/images/subscribe_icon.png">
                {{ detailData.subscribedCount}}
            </section>
            <section>
                <img src="./../../../static/images/comment_icon.png">
                {{ detailData.commentCount }}
            </section>
            <section>
                <img src="./../../../static/images/share_icon.png">
                {{ detailData.shareCount }}
            </section>
            <section>
                <img src="./../../../static/images/download_icon.png">
                下载
            </section>
        </div>
        <div class="blur" :style="{ backgroundImage: 'url(' + detailData.coverImgUrl + ')' }"></div>
    </div>
</template>
<script>
export default {
    props: ['detailData'],
    created(){
    }
}
</script>
<style>
    #playDetailHeader{
        color: #fff;
        box-sizing: border-box;
        padding: 0.113rem 0.354rem 0 0.354rem;
        position: relative;
    }
    #playDetailHeader .blur{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        -webkit-filter: blur(25px);
    }
    #playDetailHeader .cover{
        display: flex;
    }
    #playDetailHeader .coverImg .playcount{
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        display: flex;
        align-items: center;
        font-size: .25rem;
        color: #fff;
    }
    #playDetailHeader .playcount img{
        width: .25rem;
        height: .25rem;
        padding-right: 3px;
    }
    #playDetailHeader .playinfo{
        height: 0.467rem;
        width: 0.467rem;
        position: absolute;
        right: 0.1rem;
        bottom: 0.1rem;
        background: url(./../../../static/images/info.png) no-repeat center center;
        background-size: 100%;
    }
    #playDetailHeader .operate{
        height: 1.127rem;
        padding: 0.267rem 0.267rem 0;
        display: flex;
    }
    #playDetailHeader .operate section{
        text-align: center;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #playDetailHeader .operate img{
        width: 0.367rem;
    }
    #playDetailHeader .coverImg{
        width: 2.513rem;
        height: 2.513rem;
        margin: 0 0.354rem 0 0;
        position: relative;
    }
    #playDetailHeader .coverImg > img{
        width: 100%;
    }
    #playDetailHeader .info{
        flex: 1;
        font-size: 0.333rem;
    }
    #playDetailHeader .creatorInfo{
        display: flex;
        align-items: center;
        margin-top: .5rem;
    }
    #playDetailHeader .creatorInfo p{
        color: #DDDCE2;
        font-size: 0.24rem;
        display: inline-block;
        background: url(./../../../static/images/arrow2.png) no-repeat right center;
        padding-right: 15px;
        background-size: 5%;
    }
    #playDetailHeader .creatorInfo .avatar{
        height: 0.533rem;
        width: 0.533rem;
        border-radius: 50%;
        margin-right: .15rem;
        background: url(http://p1.music.126.net/q-lk_Tva1HeBkOh1xZWcDw==/109951162868494744.jpg) no-repeat left center;
        background-size: cover;
    }
</style>

