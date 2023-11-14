const addOneItem = (state, todoItem) => {
  const obj = { completed: false, item: todoItem };
  // 로컬스토리지에 저장  lacalStorage.setItem( key, value );
  localStorage.setItem(todoItem, JSON.stringify(obj));  //JSON.stringify 는 객체인 obj를 string으로 변환시켜주는 API.
  state.todoItems.unshift(obj); //저장하는 로직  // 참고사이트 : https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
}

const removeOneItem = (state, { todoItem, index }) => {
  localStorage.removeItem(todoItem.item);  // Object 내부 문자열 선택
  state.todoItems.splice(index, 1);  //특정 index에서 하나를 지운다  // slice는 기존 배열을 변경한다.  // splice는 기존 배열을 유지한다.
}

const toggleOneItem = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  localStorage.removeItem(payload.todoItem.item); // 로컬스토리지 데이터 갱신하는 DOM
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }  // 함수 앞에 일일히 export 써주기 어려우니 마지막에 전체 export 해주기
