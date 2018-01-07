<template>
<div class="recommend_playlist">
    <div class="top_title">
        <p>{{ topTitle }}</p>
    </div>
    <div v-if="recommendData.length && recommendData.length == 6" class="list">
        <recommend-item v-for="item, index in recommendData" :key="index" :data="item"></recommend-item>
    </div>
    <div v-else-if="recommendData.length && recommendData.length == 3" class="listType">
        <div>
            <recommend-item :data="recommendData[1]"></recommend-item>
            <recommend-item :data="recommendData[2]"></recommend-item>
        </div>
        <recommend-item :data="recommendData[0]"></recommend-item>
    </div>
    <div v-else-if="recommendData.length && recommendData.length == 4" class="listType2">
        <div>
            <recommend-mv-item v-for="item, index in recommendData" :key="index" :data="item"></recommend-mv-item>
        </div>
    </div>
</div>  
</template>
<script>
    import recommendItem from './recommendItem'
    import recommendMvItem from './recommendMVItem'
    export default{
        // 推荐数据  头部title数据
        props: ["recommendData", "topTitle"],
        created(){
        },
        components: {
            recommendItem, recommendMvItem
        },
        
    }
</script>
<style>
    .recommend_playlist .list{
        display: flex;
        flex-wrap: wrap;
    }
    .recommend_playlist .top_title{
        height: 0.9rem;
        display: flex;
        align-items: center;
    }
    .recommend_playlist .top_title p{
        padding: 0 .3rem 0 0.17rem;
        box-shadow: inset 0.05rem 0 #D33A31;
        background: url(./../../../static/images/arrow.png) no-repeat right center;
        background-size: 10%;
        display: inline-block;
    }
    .recommendItem{
        width: 33%;
        margin-right: 0.33%;
        margin-bottom: 0.366rem;
    }
    .recommendItem:nth-of-type(3), .recommendItem:nth-of-type(6){
        margin-right: 0;
    }
    .listType > div{
        display: flex;
    }
    .listType > div .recommendItem{
        width: 49.835%;
    }
    .listType > div .recommendItem:first-child{
        margin-right: 0.33%;
    }
    .listType > .recommendItem{
        display: block;
        width: 100%;
    } 
    .listType2 > div{
        display: flex;
        flex-wrap: wrap;
    }
    .listType2 > div .recommendMVItem{
        width: 49.835%;
        margin-bottom: 0.33rem;
    }
    .listType2 > div .recommendMVItem:nth-child(1),
    .listType2 > div .recommendMVItem:nth-child(3){
        margin-right: 0.33%;
    }
</style>
