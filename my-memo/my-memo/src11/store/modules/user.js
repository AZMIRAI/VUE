import axios from 'axios';

export default {
    state : () => ({
        asscessToken : null,
        userid : null,
    }),
    getters : {
      isAuth(state) {
          if(state.accessToken==null)
              return false;
          return true;
      },
        getUserid(state) {
          return state.userid;
        }
    },
    mutations : {
        signin(state, payload) {
            state.accessToken = payload.accessToken;
            state.userid = payload.userid;
            localStorage.setItem('accessToken', state.accessToken);
            localStorage.setItem('userid', state.userid);
        },
        signout(state) {
            state.accessToken = null;
            state.userid = null;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userid');
            location.reload();
        },
        getAccessToken(state) {
            state.accessToken = localStorage.getItem('accessToken');
            state.userid = localStorage.getItem('userid');
        },
        loginFailed(state) {
            state.accessToken = null;
            state.userid = null
            localStorage.removeItem('accessToken');
        },

    }
    ,
    actions : {
        signin({commit}, payload) {
            const data = {userid : payload.email, password : payload.password};
            return axios.post('/api/auth/login',data)
                .then(response => {
                    console.log('signin status : ' + response.status);
                    if(response.status === 200)
                        commit('signin', {accessToken:response.data.token, userid:payload.email});


                }). catch( (err) => {
                    commit('loginFailed');
                    console.log('Store error')
                    return Promise.reject(err)
                });
        },
    }
};