export default{
    state: {
        isShow: true
    },
    mutations: {
        setToolbarState: (state, newState) => {
            state.isShow == newState || (state.isShow = newState);
        }   
    }
}