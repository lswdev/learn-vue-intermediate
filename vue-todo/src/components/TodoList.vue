
<template>
  <div>
    <ul>
      <li v-for="( todoItem, index ) in todoItems" :key="todoItem.item" class="shadow">
        <i class="fa-solid fa-check checkBtn" :class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete(todoItem, index)"></i>
        <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span><!-- 로컬스토리지에 있는 데이터의 completed가 true일때만 클래스 출력 -->
        <span class="removeBtn" @click="removeTodo(todoItem, index)"><!-- 아이템과 인덱스를 넘긴다 -->
          <i class="fa-solid fa-trash"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: () => ({
      todoItems: []
    }),
    created() {
      if(localStorage.length > 0) {
        for(var i = 0; i < localStorage.length; i++) {
          if(localStorage.key(i) !== '' && localStorage.key(i) !== 'loglevel:webpack-dev-server'){
            this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));  // JSON.stringify로 인해 string 처리된 데이터를 parsing 해준다.
          }
        }
      }
    },
    methods: {
      removeTodo: (items,index) => {
        localStorage.removeItem(items.item);
        this.todoItems.splice(index, 1);  //특정 index에서 하나를 지운다
        // slice는 기존 배열을 변경한다.  // splice는 기존 배열을 유지한다.
      },
      toggleComplete: (items) => {
        localStorage.removeItem(items.item);
        // 로컬스토리지 데이터 갱신하는 DOM
        items.completed = !items.completed;
        localStorage.setItem(items.item, JSON.stringify(items));
      },
    }
  }
</script>

<style scoped>
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
</style>