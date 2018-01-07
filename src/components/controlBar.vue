<template>
    <div id="controlBar" :style="{ display: (typeof(isShow) == 'undefined' ? 'flex' : (isShow ? 'flex' : 'none')) }">
        <div class="ctrlMusicImg">
            <img src="" >
        </div>
        <div class="ctrlMusicInfo">
            <p>越过群山</p>
            <p>莫西子诗</p>
        </div>
        <div class="ctrlBtn">
            <div class="ctrlPlay"></div>
            <div class="ctrlList"></div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["isShow"]
    }
</script>
<style>
    #controlBar{
        height: 1rem;
        background-color: rgba(255, 255, 255, .9);
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0.133rem;
        box-sizing: border-box;
        display: flex;
    }
    #controlBar .ctrlMusicImg{
        height: 0.73rem;
        width: 0.73rem;
    }
    #controlBar .ctrlMusicImg img{
        width: 100%;
    }
    #controlBar .ctrlMusicInfo{
        flex: 1;
        display: flex;
        margin-left: 0.3rem;
        flex-direction: column;
        justify-content: space-around;
    }
    #controlBar .ctrlMusicInfo p:nth-child(1){
        font-size: 0.28rem;
    }
    #controlBar .ctrlMusicInfo p:nth-child(2){
        font-size: 0.207rem;
    }
    #controlBar .ctrlBtn{
        display: flex;
        align-items: center;
    }
    #controlBar .ctrlPlay{
        height: 0.553rem;
        width: 0.553rem;
        margin-right: 0.3rem;
        background: url(./../../static/images/ctrl_play.png) no-repeat center center;
        background-size: 100%;
    }
    #controlBar .ctrlList{
        height: 0.553rem;
        width: 0.553rem;
        background: url(./../../static/images/ctrl_list.png) no-repeat center center;
        background-size: contain;
    }
</style>
