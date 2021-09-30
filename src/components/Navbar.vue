<template> 
<nav class="navbar">
  <span 
    @click="$router.push('/')"
    class="logo"
  >
    Vue-test
  </span>
  <div class="navbar__btns">
    <my-button 
      class="ml10" 
      @click="$router.push('/posts')
    ">
      Посты
    </my-button>
    <my-button 
      class="ml10" 
      @click="$router.push('/about')
    ">
      О нас
    </my-button> 
  </div>
</nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px whitesmoke;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}

.ml10 {
  margin: 0 10px;
}

.logo {
  cursor: pointer;
}
</style>
