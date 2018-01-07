<template>
    <div id="playlist">
        <toolbar></toolbar>
        <div class="main">
            <play-detail-header :detailData="playListDetail"></play-detail-header>
            <music-list :listData="playListDetail.tracks"></music-list>
        </div>
    </div>
</template>
<script>
import toolbar from "./../../components/toolbar"
import playDetailHeader from "./../../components/playlistdetail/playDetailHeader"
import musicList from "./../../components/common/musicList"
export default {
    created(){ 
        this.$store.dispatch("fetchPlayListDetail", this.$route.params.id)
    },
    computed: {
        playListDetail(){
            return this.$store.state.detail.playListDetail;
        }
    },
    components: {
        toolbar, playDetailHeader,musicList
    }
}
</script>
<style>
    
</style>


