import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 一级 发现
const discover = r => require.ensure([], () => r(require('../pages/discover')), 'discover')
// 二级个性化
const recommend = r => require.ensure([], () => r(require('../pages/discover/recommend')), 'recommend')
const playlist = r => require.ensure([], () => r(require('../pages/discover/playlist')), 'playlist')
const radio = r => require.ensure([], () => r(require('../pages/discover/radio')), 'radio')
const top = r => require.ensure([], () => r(require('../pages/discover/top')), 'top')

// 一级音乐
const music = r => require.ensure([], () => r(require('../pages/music')), 'music');

// 一级朋友
const friends = r => require.ensure([], () => r(require('../pages/friends')), 'friends');

// 一级详情
const detail = r => require.ensure([], () => r(require('../pages/detail')), 'detail');
// 二级歌单详情
const playdetail = r => require.ensure([], () => r(require('../pages/detail/playlist')), 'playdetail');
const video = r => require.ensure([], () => r(require('../pages/detail/video')), 'video')


// 一级播放音乐
const play = r => require.ensure([], () => r(require("./../pages/detail/play")))

export default new Router({
  mode: 'history',
  base: "/163/",
  routes: [
      {
          path: '',
          redirect: '/discover'
      },
      {
          path: '/discover',
          name: 'discover',
          component: discover,
          children: [
              {
                  path: '',
                  redirect: '/discover/recommend'
              },
              {
                  path: 'recommend',
                  name: 'recommend',
                  component: recommend
              },
              {
                  path: 'playlist',
                  name: 'playlist',
                  component: playlist
              },
              {
                  path: 'radio',
                  name: 'radio',
                  component: radio
              },
              {
                  path: 'top',
                  name: 'top',
                  component: top
              }
          ]
      },
      {
          path: '/music',
          name: 'music',
          component: music
      },
      {
        path: '/friends',
        name: 'friends',
        component: friends
      },
      {     // 详情 
          path: '/detail',
          name: 'detail',
          component: detail,
          children: [
                {   // 歌单详情
                    path: '/',
                    redirect: '/detail/playdetail'
                },
                {   // 歌单详情
                    path: 'playdetail/:id',
                    name: 'playdetail',
                    component: playdetail
                },
                {
                    path: "video",
                    name: "video",
                    component: video
                }
           ]
      },
      {
          path: "/play/:id",
          name: "play",
          component: play
      }
  ]
})
