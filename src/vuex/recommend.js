import request from './request'
export default{
    state: {
        recommendPlayList: [],
        privateContent: {
            result: []
        },
        djProgram: {
            result: []
        },
        recommendMV: {
            result: []
        }
    },
    mutations: {
        setRecommendPlayList(state, newData){
            state.recommendPlayList = newData;
        },
        setPrivateContent(state, newData){
            state.privateContent = newData;
        },
        setDjProgram(state, newData){
            state.djProgram = newData;
        },
        setRecommendMV(state, newData){
            state.recommendMV = newData;
        }
    },
    actions: {
        // 获取推荐歌单
        fetchDaysRecommendPlayList: state => {
            request.requestDaysRecommendPlayList( res => {
                state.commit("setRecommendPlayList", res.data.result);
            });
        },
        // 获取独家推送
        fetchPrivateContent: state => {
            request.requestPrivateContent( res => {
                state.commit("setPrivateContent", res.data);
            });
        },
        // 获取主播电台
        fetchDjProgram: state => {
            request.requestDjProgram( res => {
                state.commit("setDjProgram", res.data);
            })
        },
        // 获取推荐mv
        fetchRecommendMV: state => {
            request.requestRecommendMV( res => {
                state.commit("setRecommendMV", res.data);
            })
        }
    }
}