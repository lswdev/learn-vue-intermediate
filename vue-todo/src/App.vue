<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @addTodoItem="addOneItem" /> <!-- @하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드명" -->
    <TodoList :propsdata="todoItems" @removeItem="removeOneItem" /> <!-- :props="현재 위치 컴포넌트 데이터 속성" -->
    <TodoFooter />
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
  data: () => ({
    todoItems: [],
  }),
  methods: {
    addOneItem: function(todoItem) {
      // console.log(todoItem);
      var obj = {completed: false, item: todoItem};
      // 로컬스토리지에 저장  lacalStorage.setItem( key, value );
      localStorage.setItem(todoItem, JSON.stringify(obj));  //JSON.stringify 는 객체인 obj를 string으로 변환시켜주는 API.
      this.todoItems.push(obj);
      //저장하는 로직         // 참고사이트 : https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
    },
    removeOneItem: function (items, index) {
      // console.log(items, index)
      localStorage.removeItem(items.item);  // Object 내부 문자열 선택
      this.todoItems.splice(index, 1);  //특정 index에서 하나를 지운다
      // slice는 기존 배열을 변경한다.  // splice는 기존 배열을 유지한다.
    },
  },
  created() {
    if(localStorage.length > 0) {
      for(var i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== '' && localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));  // JSON.stringify로 인해 string 처리된 데이터를 parsing 해준다.
        }
      }
    }
    // console.log(this.todoItems);
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
