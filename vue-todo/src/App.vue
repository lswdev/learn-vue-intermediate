<template>
  <div id="app">
    <TodoHeader />
    <TodoInput />
    <TodoList :propsdata="todoItems" /> <!-- :props="현재 위치 컴포넌트 데이터 속성" -->
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
