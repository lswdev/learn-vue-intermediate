import Vue from 'vue';
import Vuex from 'vuex';
import todoApp from './modules/todoApp'
// import * as getters from './getters'
// import * as mutations from './mutations'

// use란 global functionality를 구사하고 싶을 때 사용. vue를 사용하는 모든 부분에 적용
Vue.use(Vuex);

// const storage = {
//   fetch() {
//     const arr = [];
//     if(localStorage.length > 0) {
//       for(let i = 0; i < localStorage.length; i++) {
//         if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
//           arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));  // JSON.stringify로 인해 string 처리된 데이터를 parsing 해준다.
//         }
//       }
//     }
//     return arr;
//   },
// }

export const store = new Vuex.Store({
  modules: {
    todoApp
  }
  // getters: {
  //   storedTodoItems(state) {
  //     return state.todoItems;
  //   }
  // },
  // getters: getters,     // 축약해서 getters만 써도 된다.
  // mutations: mutations,     // 축약해서 mutations만 써도 된다.
});


