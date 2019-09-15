import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)
Axios.defaults.headers.post["Content-Type"] = "application/json";

export default new Vuex.Store({
  state: {
    IP: "http://10.91.7.229:8080",
    IPl: "http://localhost:8080"
  },
  mutations: {

  },
  actions: {
    LOG_IN(context, state) {
      console.log(state)

      return new Promise((resolve, reject) => {
        Axios.post(
          context.state.IPl + "/users/signin",
          {
            "username": state.email,
            "password": state.pass,
          },
          { withCredentials: false }
        ).then(ans => {
          console.log(ans)
          Axios.defaults.headers.post['Authorization'] = "Bearer " + ans;
          resolve();
        })
          .catch(() => { reject() })

      })

    },
    GET_CARDS(context, payload) {
      return new Promise((resolve, reject) => {
        Axios.post(context.state.IPl + "/cards", {

        }, { withCredentials: false }).then(() => {
          resolve();
        }).catch(() => { reject(); })
      })
    }
  },

})

