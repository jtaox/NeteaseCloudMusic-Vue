<template>
  <router-link tag="div" to="/detail/video" class="recommendMVItem">
      <figure>
        <div class="pe_img">
          <img :src="data.picUrl" class="pic_img" />
          <div class="meta_data">
            <img src="./../../../static/images/a76.png" class="playcount"/>
            <span>{{ data.playCount | playCount }}</span>
          </div>
        </div>
        <figcaption>
          <p>{{ data.name }}</p>
          <p>
            <span v-for="item, i in data.artists" :key="i">{{ item.name }}<span v-if="i != data.artists.length-1">/</span></span>
          </p>
        </figcaption>
      </figure>
  </router-link>
</template>
<script>
    export default{
        props: ["data"]
    }
</script>
<style>
  .recommendMVItem .pe_img{
    width: 100%;
    height: auto;
    position: relative;
  }
  .recommendMVItem .pe_img .pic_img{
    width: 100%;
  }
  .recommendMVItem figcaption{
    font-size: 0.22rem;
    box-sizing: border-box;
    padding: 3px;
  }
  .recommendMVItem figcaption p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .recommendMVItem .meta_data{
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    display: flex;
    align-items: center;
  }
  .recommendMVItem .meta_data .playcount{
    width: .247rem;
    height: .16rem;
    padding-right: 3px;
  }
  .recommendMVItem .meta_data span{
    font-size: .25rem;
    color: #fff;
  }
  .recommendMVItem figcaption p:first-child{
    font-size: 0.23rem;
    color: #303131;
  }



</style>
