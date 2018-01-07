export default{
    state: {
        translateY: { y: 0},
        lineHeight: 0,
        itv: null,
        curIndex : 0,
        el: null
    },
    mutations: {
        setLineHeight: (state, h) => {
            state.lineHeight = h;
        },
        setTranslateY: (state, i) => {
            state.translateY.y = i * state.lineHeight - (state.lineHeight * 2);

        }
    }
}