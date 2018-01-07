<template>
  <router-link :to="data.type == 0 ? { name: 'playdetail', params: { id: data.id }} : {} " class="recommendItem">
      <figure>
        <div class="pe_img">
          <img :src="data.picUrl" class="pic_img" >
          <div v-if="data.type == 0" class="meta_data">
            <img src="./../../../static/images/vv.png" class="playcount">
            <span>{{ data.playCount | playCount }}</span>
          </div>
          <img v-if="data.type == 1" src="./../../../static/images/dj_icon.png" class="djicon" >
          <img v-if="data.type ==24" src="./../../../static/images/video_icon.png" class="comicon" >
          <img v-if="data.type == 6" src="./../../../static/images/com_icon.png" class="comicon">
          <img v-if="data.type == 19" src="./../../../static/images/link_icon.png" class="comicon" >
        </div>
        <figcaption><p>{{ data.name }}</p></figcaption>
      </figure>
  </router-link>
</template>
<script>
    export default{
        props: ["data"]
    }
</script>
<style>
  .recommendItem .pe_img{
    width: 100%;
    height: auto;
    position: relative;
  }
  .recommendItem .pe_img .pic_img{
    width: 100%;
  }
  .recommendItem figcaption{
    font-size: 0.22rem;
    box-sizing: border-box;
    padding: 3px;
  }
  .recommendItem figcaption p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .recommendItem .meta_data{
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    display: flex;
    align-items: center;
  }
  .recommendItem .meta_data .playcount{
    width: .25rem;
    height: .25rem;
    padding-right: 3px;
  }
  .recommendItem .djicon{
    width: 0.44rem;
    height: 0.44rem;
    position: absolute;
    right: 0.1rem;
    bottom: 0.1rem;
  }
  .recommendItem .comicon{
    width: 0.44rem;
    height: 0.44rem;
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
  }
  .recommendItem .meta_data span{
    font-size: .25rem;
    color: #fff;
  }
</style>
