<template>
  <input class="input" :value="modelValue" @input="updateInput" type="text" />
</template>

<script>
export default {
  name: 'my-input',

  props: {
    modelValue: [String, Number]
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }

};
</script>

<style lang="scss" scoped>
.input {
  margin: 15px 0 10px 0;
  width: 100%;
  padding: 10px;
  background-color: wheat;
  border: 2px solid teal;
}
</style>

