<template>
    <div id="discover">
        <discover-bar :recommendData="recommendData"></discover-bar>
        <div class="line"></div>
        <recommend-list :recommendData="recommendPlayList" topTitle="推荐歌单"></recommend-list>
        <recommend-list :recommendData="privateContent.result" :topTitle="privateContent.name"></recommend-list>
        <recommend-list :recommendData="fetchRecommendMV.result" topTitle="推荐MV"></recommend-list>
        <recommend-list :recommendData="fetchDjProgram.result" topTitle="主播电台"></recommend-list>
    </div>
</template>
<script>
    import discoverBar from './../../components/recommend/recommendBar'
    import recommendList from './../../components/recommend/recommendList'

    export default {
        data(){
            return {
                recommendData: [
                    {title: "私人FM", img: "./../../../static/images/t_recommend_icn_fm.png"},
                    {title: "每日歌曲推荐", img: "./../../../static/images/t_recommend_icn_daily.png", day: new Date().getDate()},
                    {title: "云音乐热歌榜", img: "./../../../static/images/t_recommend_icn_rank.png"}
                ]
            }
        },
        created(){
            // 请求推荐歌单数据
            this.$store.dispatch("fetchDaysRecommendPlayList");

            // 请求独家放送数据
            this.$store.dispatch("fetchPrivateContent");

            // 主播电台
            this.$store.dispatch("fetchDjProgram");

            // 请求推荐mv
            this.$store.dispatch("fetchRecommendMV");

        },
        components: {
            discoverBar, recommendList
        },
        computed: {
            // 推荐歌单数据
            recommendPlayList(){
                return this.$store.state.recommend.recommendPlayList;
            },
            // 独家放送数据
            privateContent(){
                return this.$store.state.recommend.privateContent;
            },
            // 主播电台 
            fetchDjProgram(){
                return this.$store.state.recommend.djProgram;
            },
            // 推荐mv
            fetchRecommendMV(){
                console.log(this.$store.state.recommend.recommendMV, 1000)
                return this.$store.state.recommend.recommendMV;
            }
        }
    }

</script>
<style>
    #discover section{
        display: flex;
    }
</style>