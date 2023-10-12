
<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
  export default {
    methods: {
      clearTodo () {
        this.$emit('clearTodo');
      },
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