<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <post-item 
      v-for="post in posts" 
      :post="post" 
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>

  <h3 class="title" v-else>Вы не создали ни одного поста</h3>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  color: teal;
  font-weight: 400;
}
</style>
