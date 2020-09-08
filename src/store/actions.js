/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

const actions = {

    // /////////////////////////////////////////////
    // COMPONENTS
    // /////////////////////////////////////////////

    // Vertical NavMenu
    updateVerticalNavMenuWidth({ commit }, width) {
      commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
    },

    // VxAutoSuggest
    updateStarredPage({ commit }, payload) {
      commit('UPDATE_STARRED_PAGE', payload)
    },

    // The Navbar
    arrangeStarredPagesLimited({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_LIMITED', list)
    },
    arrangeStarredPagesMore({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_MORE', list)
    },

    // /////////////////////////////////////////////
    // UI
    // /////////////////////////////////////////////

    toggleContentOverlay({ commit }) {
      commit('TOGGLE_CONTENT_OVERLAY')
    },
    updateTheme({ commit }, val) {
      commit('UPDATE_THEME', val)
    },

    // /////////////////////////////////////////////
    // User/Account
    // /////////////////////////////////////////////

    updateUserInfo({ commit }, payload) {
      commit('UPDATE_USER_INFO', payload)
    },

    //JKs shitz

    login({ commit }, credentials) {
      console.log(credentials);
      this.$http
        .get("/sanctum/csrf-cookie")
        .then(response => {
          console.log('have we reached sanctum? stauts: ' + response.status);
          // console.log(response.data);
          console.log(response.status);
          //console.log(response.statusText);
          // console.log(response.headers);
          //console.log(response.config);

          this.$http
            .post("/login", credentials)
            .then(response => {
              this.$http.get("/api/user").then(response => {
                // console.log(response.data);
                console.log(response.status);
                // console.log(response.statusText);
                //  console.log(response.headers);
                // console.log(response.config);
                commit("setUserData", response.data);
              });

              console.log(response.data);
            })
            .catch(function(error) {
              commit("setStatusError", error);
              console.log('bruschan, vi har error vid post login: ');
              console.log(response.status);
              console.log(error);
            });
        })
        .catch(function(error) {
          commit("setStatusError", error);
          console.log(error);
        });
    },

    logout({ commit }) {
      this.$http.post("/logout").then(response => {
        if (response.status === 204) {
          commit("clearUserData");
        }
      });
    }


}

export default actions
