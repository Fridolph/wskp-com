<template>
  <div :class="['page-container', cname]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    cname: String
  }
}
</script>


<style lang="stylus" scoped>
.page-container
  display flex
  min-height 100vh
  flex-direction column
</style>
