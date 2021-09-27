<template>
  <div class="container">
    <h3>Страница с постами</h3>

    <my-button 
      @click="showDialog" 
      class="mt15"
    >
      Создать пост
    </my-button>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list 
      :posts="posts"  
      @remove="removePost" 
      v-if="!isPostLoading"
    />

    <div v-else>Идёт загрузка...</div>
  </div>
</template>

<script>
import axios from 'axios';

import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
  components: {
    PostForm,
    PostList
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },

    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

    showDialog() {
      this.dialogVisible = true;
    },

    async fetchPosts() {
      try {
        this.isPostLoading = true;

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      } catch (e) {
        alert(e);
      } finally {
        this.isPostLoading = false;
      }
    }
  },

  mounted() {
    this.fetchPosts();
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: wheat;
  font-family: Roboto, sans-serif;
}

.container {
  width: 800px;
  margin: 0 auto;
  padding: 15px;
}

.mt15 {
  margin: 15px 0;
}
</style>
