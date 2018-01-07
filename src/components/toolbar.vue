<template>
    <div id="actionBar" :class="{ 
            toolbarHideAnim: barState ? !barState.isShow : true,
            
        }">
        <div class="back" @click="back"></div>
        <div class="content">
            <p>歌单</p>
            <p>编辑推荐：这里是编辑推荐内容</p>
        </div>
        <div class="search"></div>
        <div class="op"></div>
    </div>
</template>
<script>
    export default{
        props: ["barState", "searchState", "opState"],
        data(){
            return {
                // toolbarState: (typeof(this.searchState) == "undefined") ? true : this.searchState
            }
        },
        created(){
            // this.$store.commit("setToolbarState", this.searchState);
        },
        methods: {
            back: () => window.history.back()
        }
    }
</script>
<style>
    #actionBar{
        height: 1.033rem;
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 99;
        background-color: #f00;
    }
    #actionBar .back{
        height: 1.033rem;
        width: 1.033rem;
        background: url(../../static/images/back.png) no-repeat center center;
        background-size: 45%;
    }
    #actionBar .search{
        height: 1.033rem;
        width: 1.033rem;
        background: url(../../static/images/search.png) no-repeat center center;
        background-size: 45%;
    }
    #actionBar .op{
        height: 1.033rem;
        width: 1.033rem;
        background: url(../../static/images/op.png) no-repeat center center;
        background-size: 45%;
    }
    #actionBar .content{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        font-size: 0.3066rem;
    }
    #actionBar .content p:nth-child(2){
        font-size: 0.1933rem;
        color: #8A889A;
    }
    .toolbarHideAnim{
        transform: translateY(-1.033rem);
        transition: all 1s;
    }
    .toolbarShowAnim{
        transform: translateY(0);
        transform: all 1s;
    }
</style>
