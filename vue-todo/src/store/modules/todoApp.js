const storage = {
  fetch() {
    const arr = [];
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));  // JSON.stringify로 인해 string 처리된 데이터를 parsing 해준다.
        }
      }
    }
    return arr;
  },
}

const state = {
  todoItems: storage.fetch(),
}

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
}

const mutations = {
  addOneItem(state, todoItem) {
    const obj = { completed: false, item: todoItem };
    // 로컬스토리지에 저장  lacalStorage.setItem( key, value );
    localStorage.setItem(todoItem, JSON.stringify(obj));  //JSON.stringify 는 객체인 obj를 string으로 변환시켜주는 API.
    state.todoItems.unshift(obj); //저장하는 로직  // 참고사이트 : https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
  },
  removeOneItem (state, { todoItem, index }) {
    localStorage.removeItem(todoItem.item);  // Object 내부 문자열 선택
    state.todoItems.splice(index, 1);  //특정 index에서 하나를 지운다  // slice는 기존 배열을 변경한다.  // splice는 기존 배열을 유지한다.
  },
  toggleOneItem (state, payload){
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item); // 로컬스토리지 데이터 갱신하는 DOM
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  },
  clearAllItems (state){
    localStorage.clear();
    state.todoItems = [];
  }
}

export default {
  state,
  getters,
  mutations
}