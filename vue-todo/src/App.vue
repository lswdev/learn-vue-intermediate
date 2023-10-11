<template>
  <div id="app">
    <TodoHeader />
    <TodoInput />
    <TodoList />
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
  components: { TodoHeader, TodoInput, TodoFooter, TodoList }
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
