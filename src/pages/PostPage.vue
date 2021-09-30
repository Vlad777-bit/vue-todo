<template>
  <div>
    <h3>Страница с постами</h3>

    <my-input
        v-model="searchQuery"
        placeholder="Поиск"
        v-focus
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

    <div v-intersection="loadMorePosts" class="observer"></div>

    <!-- <my-pogination
      :totalPage="totalPage"
      :page="page"
      @paginationChange="changePage"
    >
    </my-pogination> -->
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
      page: 1,
      limit: 10,
      totalPage: 0,
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

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch (e) {
        alert(e);
      } finally {
        this.isPostLoading = false;
      }
    },

    async loadMorePosts() {
      try {
        this.page += 1;

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data ];
      } catch (e) {
        alert(e);
      }
    },

    // changePage(pageNum) {
    //   this.page = pageNum;
    // }
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
    // page() {
    //   this.fetchPosts();
    // }
  }
};
</script>

<style lang="scss">


.mt15 {
  margin: 15px 0;
}

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.observer {
  height: 30px;
  background-color: saddlebrown;
}
</style>
