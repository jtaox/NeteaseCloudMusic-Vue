import axios from 'axios'
const PROTOCOL = 'http://';
const HOST = '138.128.208.113';
const PORT = ':3000'
const PATH = "/api"

const ADDRESS = PROTOCOL + HOST + PORT;

export default {
    // 个性推荐 推荐歌单
    requestDaysRecommendPlayList: (res) => {
        axios.get(PATH + "/personalized").then(success => {
            if(success.status == 200){
                res(success);
            }
        });
    },

    // 个性推荐 独家放送
    requestPrivateContent: (res) => {
        axios.get(PATH + "/personalized/privatecontent").then(success => {
            if(success.status == 200){
                res(success);
            }
        });
    },
    // 个性推荐 主播电台
    requestDjProgram: (res) => {
        axios.get(PATH + "/personalized/djprogram").then(success => {
            if(success.status == 200){
                res(success);
            }
        })
    },

    // 歌单详情
    requestPlayListDetail: (id, res) => {
        axios.get(PATH + "/playlist/detail", {
            params: {
                id
            }
        }).then( success => {
            if(success.status == 200){
                res(success);
            }
        } )
    },

    // mv
    requestMV: (mvid, res) => {
        axios.get(PATH + "/mv", {
            params: {
                mvid
            }
        }).then( success => {
            if(success.status == 200){
                res(success);
            }
        })
    },

    // 推荐mv
    requestRecommendMV: (res) => {
        axios.get(PATH + "/personalized/mv").then( success => {
           if(success.status == 200){
               res(success);
           } 
        })
    },

    // 相关推荐
    requestSimiMv: (mvid, res) => {
        axios.get(PATH + "/simi/mv", {
            params: {
                mvid
            }
        }).then( success => {
            if(success.status == 200){
                res(success)
            }
        })
    },

    // 获取歌曲url
    requestSongUrl: (id, res) => {
        axios.get(PATH + "/music/url", {
            params: {
                id
            }
        }).then( success => {
            if(success.status == 200){
                res(success);
            }
        })
    },

    // 获取音乐详情
    requestSongDetail: (ids, res) => {
        axios.get(PATH + "/song/detail", {
            params: {
                ids
            }
        }).then(success => {
            if(success.status == 200){
                res(success);
            }
        })
    },

    // 获取歌词
    requestLyric: (id, res) => {
        axios.get(PATH + "/lyric", {
            params: {
                id
            }
        }).then(success => {
            if(success.status == 200){
                res(success);
            }
        })
    },
    
    // 登陆
    requestLogin: (phone, password) => {
        axios.get(PATH + "/login/cellphone", {
            params: {
                 phone, password
            }
        }).then( res => {
            console.log(res)
        });
    }
}