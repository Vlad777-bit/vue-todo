<template>
  <div class="container">
    <post-form 
      @create="createPost"
    />

    <post-list 
      :posts="posts"
    />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
export default {
  components: {
    PostForm, 
    PostList,
  },

  data() {
    return {
      posts: [
        { id: 1, title: 'Vue.js Practice', body: 'Мы проктикуемя Vue.js' },
        { id: 2, title: 'React Practice', body: 'Мы проктикуемя React' },
        { id: 3, title: 'Angular Practice', body: 'Мы проктикуемя Angular' },
      ],
      title: '',
      body: '',
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    }
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color:wheat;
  font-family:  Roboto, sans-serif;
}

.container {
  width: 800px;
  margin: 0 auto;
  padding: 15px;
}

.title {
  text-align: center;
}
</style>
