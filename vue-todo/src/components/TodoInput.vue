<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
<!--      <i class="fa-solid fa-plus addBtn"></i>  6.4.0 버전 plus icon -->
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
  export default {
    data: () =>({
      newTodoItem: ''
    }),
    methods: {
      addTodo() {
        var obj = {completed: false, item: this.newTodoItem};
        // console.log(this.newTodoItem);
        //저장하는 로직         // 참고사이트 : https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
        // 로컬스토리지에 저장  lacalStorage.setItem( key, value );
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));  //JSON.stringify 는 객체인 obj를 string으로 변환시켜주는 API.
        // 관리자도구 > 애플리케이션 > 로컬 스토리지
        this.clearInput();
      },
      clearInput() {
        this.newTodoItem = '';
      }
    }
  }
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    width: 100%;
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    width: 80%;
    height: 40px;
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
  .addBtn {
    color: white;
  }
</style>