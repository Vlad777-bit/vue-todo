<template>
  <div class="container">
    <h3>Страница с постами</h3>

    <my-input
      v-model="searchQuery"
      placeholder="Поиск"
    />

   <div class="app__btns">
      <my-button 
        @click="showDialog" 
      >
        Создать пост
      </my-button>

      <my-select
        v-model="selectedSort"
        :options="sortOptions "
      ></my-select>
   </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list 
      :posts="sortedAndSeachedPosts"  
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
      selectedSort: '',
      searchQuery: '', 
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержанию'}
      ],
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

        // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        //   .then(response => response.json())
        //   .then(json => this.posts = json)

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
  },

  computed: {
    sortedPost() {
      return [...this.posts]
        .sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },

    sortedAndSeachedPosts() {
      return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },

  watch: {
    selectedSort(newValue) {
      this.posts.sort()
    }
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

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between; 
}
</style>
