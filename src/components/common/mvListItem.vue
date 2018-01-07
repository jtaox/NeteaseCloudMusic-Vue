<template>
    <div>
        <div class="mvListItem">
            <div class="mv_img" 
                :style="{backgroundImage: 'url(' + data.cover + ')'}"></div>
            <div class="mv_info">
                <p>{{ data.name }}</span></p>
                <p> 
                    <span v-for="item,i in data.artists" :key="i">
                        <span>{{ item.name }}</span>
                        <span v-if=" i != data.artists.length - 1">/</span>
                    </span>
                </p>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>
<script>
    export default{
        props: ["data"],
        created(){
        }
    }
</script>
<style>
    .mvListItem{
        height: 1.08rem;
        font-size: 0.293rem;
        color: #303131;
        display: flex;
        padding: 0.1rem 0;
    }
    .mvListItem .mv_img{
        width: 1.733rem;
        height: 1rem;
        background-size: contain;
        border-bottom: 0.2rem solid #fff;
        border-right: 0.15rem solid #fff;
    }
    .mvListItem .mv_info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 0.2rem;

    }
    .mvListItem .mv_info p{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .mvListItem .mv_info p:nth-child(2){
        font-size: 0;
        color: #797A7B;
        margin-top: .15rem;
    }
    .mvListItem .mv_info p:nth-child(2) span{
        font-size: 0.2rem;
    }
</style>
