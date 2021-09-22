<template>
  <div class="post">
    <div>
      <p><strong>Название поста: </strong>{{ post.title }}</p>
      <p><strong>Описание: </strong>{{ post.body }}</p>
    </div>
    <div class="post__buttons">
      <my-button>
        Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  margin-top: 10px;
  width: 100%;
  padding: 15px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
