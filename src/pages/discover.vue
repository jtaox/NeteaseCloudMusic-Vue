<template>
    <div id="discover">
        <ul class="menu">
            <router-link tag="li" to="/discover/recommend">个性推荐</router-link>
            <router-link tag="li" to="/discover/playlist">歌单</router-link>
            <router-link tag="li" to="/discover/radio">主播电台</router-link>
            <router-link tag="li" to="/discover/top">排行榜</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
    }
</script>
<style>
    #discover .menu{
        height: 0.746rem;
        line-height: 0.746rem;
        display: flex;
        font-size: 0.28rem;
    }
    #discover .menu li{
        text-align: center;
        flex: 1;
    }
    #discover .menu .router-link-active{
        color: #D33A31;
        box-shadow: inset 0 -2px #D33A31;
    }
    
</style>

