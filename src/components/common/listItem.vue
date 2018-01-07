<template>
    <router-link tag="div" :to="{name: 'play', params: { id: data.item.id}}" id="listItem">
        <div class="listItem">
            <p class="number">{{ ++data.index }}</p>
            <div class="music_info">
                <p>{{ data.item.name }}<span class="mvIcon" v-if="data.item.mv != 0"></span></p>
                <p>
                    <span v-for="item,i in data.item.ar" :key="i">
                        <span>{{ item.name }}</span><span v-if=" i != data.item.ar.length - 1">/</span>
                    </span>
                    <span>-{{ data.item.al.name }}</span>
                </p>
            </div>
            <div class="op"></div>
        </div>
        <div class="line"></div>
    </router-link>
</template>
<script>
    export default{
        props: ["data"],
        created(){
        },
        methods: {
            
        }
    }
</script>
<style>
    .listItem{
        height: 1.08rem;
        font-size: 0.293rem;
        color: #303131;
        display: flex;
        background-color: #fff;
    }
    .listItem .number{
        width: 1rem;
        text-align: center;
        line-height: 1.02rem;
        color: #919293;
        font-size: 0.32rem;
        position: relative;
        bottom: -2px;
    }
    .listItem .music_info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .listItem .music_info p{
        
    }
    .listItem .music_info p:nth-child(2){
        font-size: 0;
        color: #797A7B;
        margin-top: .15rem;
    }
    .listItem .music_info p:nth-child(2) span{
        font-size: 0.2rem;
    }
    .listItem .op{
        width: 0.967rem;
        height: 1.08rem;
        align-self: right;
        background: url(./../../../static/images/op2.png) no-repeat center center;
        background-size: 30%;
    }
    .listItem .mvIcon{
        height: 0.24rem;
        width: 0.6rem;
        line-height: 1.08rem;
        display: inline-block;
        background: url(./../../../static/images/mv_icon.png) no-repeat center center;
        background-size: contain;
        margin-left: 0.05rem;
    }
</style>
