<template>
  <select
    class="select" 
    v-model="modelValue" 
    @change="changeOption">
    <option disabled value="">Выбирите из списка</option>
    <option 
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    > 
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',

  props: {
    modelValue: {
      type: String, 
    },
    options: {
      type: Array,
      default: () => [],
    }
  },

  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  background-color:wheat;
  color: teal;
}
</style>