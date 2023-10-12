<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
<!--      <i class="fa-solid fa-plus addBtn"></i>  6.4.0 버전 plus icon -->
      <i class="fas fa-plus addBtn"></i>
    </span>
    <ModalForm v-if="showModal" @close="showModal = false">
      <template #header><!-- slot="header" -->
        <h3 class="closeModalBtn" @click="showModal = false">경고 <i class="fa-solid fa-xmark"></i></h3>
      </template>
      <div slot="body">
        아무것도 입력하지 않았습니다.
      </div>
<!--      <div slot="footer">
        COPYRIGHT ©LSWDEV RESERVED
        <button class="modal-default-button" @click="showModal = false">OK</button>
      </div>-->
    </ModalForm>
  </div>
</template>

<script>
  import ModalForm from "@/components/common/Modal.vue";

  export default {
    components: { ModalForm },
    props: ['modalOpen'],
    data: () =>({
      newTodoItem: '',
      showModal: false,
    }),
    methods: {
      addTodo() {
        if (this.newTodoItem.replace(/(\s*)/g, "") !== '') {  // this.$emit('이벤트 이름', 인자1, 인자2)
          this.$emit('addTodoItem', this.newTodoItem, this.showModal);
          this.clearInput();
        } else {
          this.showModal = !this.showModal;
          this.clearInput();
        }
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
  .closeModalBtn {
    color: #42B983;
    cursor: pointer;
  }
</style>