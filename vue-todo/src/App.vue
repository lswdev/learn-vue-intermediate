<template>
  <div id="app">
    <TodoHeader />
    <TodoInput /> <!-- <TodoInput @addTodoItem="addOneItem" />--> <!-- @하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드명"  >>  store에서 mutations로 변경-->
    <TodoList /><!-- <TodoList :propsdata="todoItems" @removeItem="removeOneItem" @toggleComplete="toggleOneItem" />--> <!-- :props="현재 위치 컴포넌트 데이터 속성" -->
    <TodoFooter /><!--<TodoFooter @clearTodo="clearAllItems" />-->
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoList from './components/TodoList.vue'
export default {
  name: 'App',
  components: { TodoHeader, TodoInput, TodoFooter, TodoList },
  data: () => ({}),
  methods: {
    // addOneItem (todoItem) {
    //   const obj = {completed: false, item: todoItem};
    //   // 로컬스토리지에 저장  lacalStorage.setItem( key, value );
    //     localStorage.setItem(todoItem, JSON.stringify(obj));  //JSON.stringify 는 객체인 obj를 string으로 변환시켜주는 API.
    //     this.todoItems.unshift(obj); //저장하는 로직  // 참고사이트 : https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
    // },
    // removeOneItem (items, index) {
    //   localStorage.removeItem(items.item);  // Object 내부 문자열 선택
    //   this.todoItems.splice(index, 1);  //특정 index에서 하나를 지운다  // slice는 기존 배열을 변경한다.  // splice는 기존 배열을 유지한다.
    // },
    // toggleOneItem (items, index) {
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(items.item); // 로컬스토리지 데이터 갱신하는 DOM
    //   localStorage.setItem(items.item, JSON.stringify(items));
    // },
    // clearAllItems () {
    //   localStorage.clear();
    //   this.todoItems = [];
    // },
  },
}
</script>

<style>
  body {
    font-family: 'Ubuntu', sans-serif;
    background-color: #F6F6F6;
    text-align: center;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
