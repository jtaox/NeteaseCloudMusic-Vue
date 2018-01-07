import request from './request'
export default{
    state: {
        playListDetail: {
            creator: {
                nickname: ""
            },
            tracks: [],
            subscribedCount: 0,
            commentCount: "加载中",
            shareCount: "加载中"
        },
        mv: {
            data: {
                brs: {}
            }
        },
        simiMv: {
            mvs: []
        },
        lyric: {
            
        }
    },
    mutations: {
        setPlayListDetail: (state, newData) => {
            state.playListDetail = newData;
        },
        setMv: (state, newData) => {
            state.mv = newData;
        },
        setSimiMv: (state, newData) => {
            state.simiMv = newData;
        },
        setLyric: (state, newData) => {
            state.lyric = newData;
        }
    },
    actions: {
        fetchPlayListDetail: (state, id) => {
            request.requestPlayListDetail(id, (res) => {
                state.commit("setPlayListDetail", res.data.playlist)
            });
        },
        // 获取mv
        fetchMv: (state, id) => {
            request.requestMV(id, res => {
                state.commit("setMv", res.data)
            });
        },

        // 请求相关mv
        fetchSimiMv: (state, id) => {
            request.requestSimiMv(id, res => {
                state.commit("setSimiMv", res.data)
            });
        },

        // 获取歌词
        fetchLyric: (state, id) => {
            request.requestLyric(id, res => {
                state.commit("setLyric", res.data);
            })
        }

    }
}