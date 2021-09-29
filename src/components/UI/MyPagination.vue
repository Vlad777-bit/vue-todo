<template>
  <div class="page__wrapper">
    <div
      class="page"
      v-for="pageN in totalPage"
      :key="pageN"
      :class="{
        current__page: page === pageN,
      }"
      @click="$emit('paginationChange', pageN)"
    >
      {{ pageN }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-pogination',

  props: {
    totalPage: {
      type: Number,
      required: true,
    },

    page: {
      type: Number,
      required: true,
    }
  }
};
</script>

<style lang="scss" scoped>
.page__wrapper {
  margin-top: 15px;
  display: flex;
}

.page {
  border: 1px solid teal;
  padding: 10px;
  cursor: pointer;
}

.current__page {
  background-color: teal;
  color:sandybrown;
}
</style>
