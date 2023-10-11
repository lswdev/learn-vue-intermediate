<template>
  <header>
    <h1>{{ transtxt }}</h1>
<!--    <div><input type="text" value="hi"></div>-->
  </header>
</template>

<script>
  export default {
    data: () => ({
      transtxt: 'Damn it!',
      // regex: /apple/, // apple 이라는 단어가 있는지 필터링
    }),
    created () {
      this.loadHead();
    },
    methods: {
      async loadHead (){
        const regex = /damn/igmsu;
        this.transtxt = this.transtxt.replace(regex,'TODO');
      }
    }
  }
</script>

<!-- scoped란 해당 컴포넌트 안에서만 유효한 스타일시트 -->
<style scoped>
  h1 {
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }
</style>