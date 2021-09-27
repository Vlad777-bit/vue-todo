<template>
  <form @submit.prevent>
    <h1 class="title">Создание поста</h1>
    <my-input
      placeholder="Название поста"
      v-model="post.title"
    />
    <my-input
      placeholder="Описание"
      v-model="post.body"
    />

    <my-button class="flexE" @click="createPost">Создать</my-button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
}

.flexE {
  align-self: flex-end;
}

.title {
  text-align: center;
  color: teal;
  font-weight: 200;
}
</style>
