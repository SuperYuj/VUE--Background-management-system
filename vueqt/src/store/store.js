import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
const state={
    user:''
}

const mutations={
    setUser(state,users){
        // state.user.username=users.username;
        // state.user.headurl=users.headurl;
        state.user=users;
        sessionStorage.setItem('user',JSON.stringify(users));
        console.log('>>>>>'+state.user.username)
        console.log('>>>>>'+JSON.parse(sessionStorage.getItem('user')).username)
    },
    clearUser(state){
        state.user='';
        sessionStorage.removeItem('user');
    }
}

const actions={
    setUser({commit},users){
        commit('setUser',users)
    },
    clearUser({commit}){
        commit('clearUser')
    }
}

const getters={
    getUser(state){
        if(state.user!==null&&state.user!==''){
            return state.user;
        }
        return JSON.parse(sessionStorage.getItem('user')) 
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})