<template>
  <div class="pro-module m-1">
    <div class="img-wrapper">
      <img src="/img/product/pd_stds1.jpg" alt="">
    </div>
    <div class="img-wrapper">
      <img src="/img/product/pd_stds2.jpg" alt="">
    </div>
    <div class="img-wrapper">
      <img src="/img/product/pd_stds3.jpg" alt="">
    </div>
    <div class="img-wrapper">
      <img src="/img/product/pd_stds4.jpg" alt="">
    </div>
    <div class="img-wrapper">
      <img src="/img/product/pd_stds5.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.m-1
  text-align center
  .img-wrapper
    img
      max-width 100%

@media (max-width: 800px) {
  .m-1 {
    padding 0 30px
  }
}
</style>
