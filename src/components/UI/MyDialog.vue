<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-dialog',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  position: fixed;
  background-color: rgba($color: #000000, $alpha: 0.5);
  display: flex;

  &__content {
    min-width: 350px;
    min-height: 50px;
    margin: auto;
    background-color: sandybrown;
    border-radius: 15px;
    padding: 20px;
  }
}
</style>
