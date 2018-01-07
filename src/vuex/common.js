import request from './request'
export default{
    state: {

    },
    mutations: {
        
    },
    actions: {
        login: (state, { phone, password }) => {
            request.requestLogin(phone, password)
        }
    }
}