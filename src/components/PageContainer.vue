<template>
  <div :class="['page-container', cname]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    cname: String,
  },
};
</script>

<style lang="stylus" scoped>
.page-container
  position relative
  display: flex;
  min-height: 100vh;
  min-width: 800px;
  flex-direction: column;

@media (min-width: 320px) and (max-width: 600px)
  .page-container
    min-width 100%
</style>
