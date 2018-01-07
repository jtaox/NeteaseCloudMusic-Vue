<template>
  <div id="app">
    <div id="toolbar" v-show="isShowToolbar">
        <div class="icon menu">
        </div>
        <div class="menu_container">
            <router-link tag="div" to="/music" class="icon big local"></router-link>
            <router-link tag="div" to="/discover" class="icon big music"></router-link>
            <router-link tag="div" to="/friends" class="icon big topic"></router-link>
        </div>
        <div class="icon search">
        </div>
    </div>
    <router-view></router-view>
    <control-bar :isShow="isShow"></control-bar>
    <audio id="audio"></audio>
  </div>
</template>

<script>
import controlBar from "./components/controlBar"
export default {
    data(){
        return {
            isShow: true
        }
    },
    created(){
        // 监听底部控制条
        this.myEventBus.$on("isShowCtrlBar", b => this.isShow = b);

    },
    mounted(){
        // 初始化audio
        this.musicPlay.init("#audio");  
    },
    computed: {
        isShowToolbar(){
            return this.$store.state.toolbar.isShow;
        }
    },
	components: {
        controlBar
    },
    watch: {
        $route(to, from){
            switch(to.name){
                case "video":
                case "play":
                case "playdetail":
                    this.$store.commit("setToolbarState", false);
                    break;
                default:
                    this.$store.commit("setToolbarState", true);
                    break;
            }
        }
    }

}
</script>

<style>
    @import "assets/css/reset.css";
    #app #toolbar{
        height: 1.033rem;
        background-color: #D33A31;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .3rem;
    }
    #toolbar .icon{
        height: 0.44rem;
        width: 0.44rem;
    }
    #toolbar .menu{
        background: url(./images/lo.png);
    }
    #toolbar .search{
        background: url(./images/search.png);
    }

    #toolbar .local{
        background: url(./images/t_actionbar_music_normal.png);
    }

    #toolbar .music{
        background: url(./images/t_actionbar_discover_selected.png);
    }
    #toolbar .topic{
        background: url(./images/t_actionbar_friends_normal.png);
    }
    #toolbar .icon{
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
    }
    #toolbar .big{
        height: 1.033rem;
        width: 1.033rem;
        margin: 0 .05rem;
    }
    #toolbar .menu_container{
        display: flex;
    }
    #toolbar .router-link-active{

    }

</style>
