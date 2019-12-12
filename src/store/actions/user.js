import axios from 'axios'

export default {
    addUser({commit}, params){
        return axios.post('/api/account/add', params)
    },
    deleteUser({commit}, params){
        return axios.post('/api/account/delete', params)
    },
    modifyUser({commit}, params){
        return axios.post('/api/account/modify', params)
    },
    getUserList({commit}, params){
        return axios.post('/api/account/list', params)
    },
    login({commit}, params){
        return axios.post('/api/account/login', params)
    },
    modifyPassword({commit}, params){
        return axios.post('/api/password/modify', params)
    }
}