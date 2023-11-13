
<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    methods: {  // methods에 위치했으니 mutations로 전환
      ...mapMutations({
        clearTodo: 'clearAllItems'
      })
      // clearTodo () {
      //   this.$store.commit('clearAllItems');
      // },
    }

  }
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #FFF;
    border-radius: 5px;
    margin: 1rem auto;
  }
  .clearAllBtn {
    color: #E20303;
    display: block;
    cursor: pointer;
  }
</style>