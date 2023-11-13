
<template>
    <TransitionGroup name="list" tag="ul">
<!--  <li v-for="( todoItem, index ) in this.$store.getters.storedTodoItems" :key="todoItem.item" class="shadow">-->
      <li v-for="( todoItem, index ) in this.storedTodoItems" :key="todoItem.item" class="shadow">
        <i class="fa-solid fa-check checkBtn" :class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete({ todoItem, index })"></i>
        <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span><!-- 로컬스토리지에 있는 데이터의 completed가 true일때만 클래스 출력 -->
        <span class="removeBtn" @click="removeTodo({ todoItem, index })"><!-- 아이템과 인덱스를 넘긴다 -->
          <i class="fa-solid fa-trash"></i>
        </span>
      </li>
    </TransitionGroup>
</template>
<!--
<TransitionGroup tag="ul" name="fade" class="container">
  <div v-for="item in items" class="item" :key="item">
    {{ item }}
    <button @click="remove(item)">x</button>
  </div>
</TransitionGroup>
-->

<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    data: () => ({ }),
    // props: ['propsdata'],
    methods: {
      ...mapMutations({
        removeTodo : "removeOneItem",
        toggleComplete: "toggleOneItem",  // 아래 코드를 mapMutations로 간단히 정리
      }),
      // removeTodo (todoItem,index) {
      //   // this.$emit('removeItem', todoItem, index);
      //   this.$store.commit('removeOneItem', todoItem, index);
      // },
      // toggleComplete (todoItem, index) {
      //   // this.$emit('toggleComplete', todoItem, index);
      //   this.$store.commit('toggleOneItem', { todoItem, index }); //두개 이상의 인자를 객체로 넘겼다
      // },
    },
    computed: {
      ...mapGetters(['storedTodoItems']),
      // todoItems() { // getters 에서 가져온 데이터를 computed에 매핑
      //   return this.$store.getters.storedTodoItems;
      // }

      // ...mapGetters({   // store에서 정의한 객체와 컴포넌트에서 정의한 특정 메서드의 이름이 다를 때 이렇게 사용할 수 있다.
      //   todoItems: 'storedTodoItems'
      // }),
    }
  }
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background-color: #FFF;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 50px;
    color: #62ACDE;
    margin-right: 5px;
    cursor: pointer;
  }
  .removeBtn {
    margin-left: auto;
    color: #DE4343;
    cursor: pointer;
  }
  .checkBtnCompleted {
    color: #B3ADAD;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #B3ADAD;
  }

  /* 리스트 트랜지션 효과 */
  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>