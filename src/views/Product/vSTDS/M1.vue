<template>
  <div class="pro-module m-1">
    <div class="img-wrapper">
      <img
        src="/img/product/pd_stds1.jpg"
        alt=""
      >
    </div>
    <div class="img-wrapper">
      <img
        src="/img/product/pd_stds2.jpg"
        alt=""
      >
    </div>
    <div class="img-wrapper">
      <img
        src="/img/product/pd_stds3.jpg"
        alt=""
      >
    </div>
    <div class="img-wrapper">
      <img
        src="/img/product/pd_stds4.jpg"
        alt=""
      >
    </div>
    <div class="img-wrapper">
      <img
        src="/img/product/pd_stds5.jpg"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.m-1
  text-align center
  .img-wrapper
    img
      max-width 100%
@media (min-width: 320px) and (max-width: 599px)
  .pro-module .m-title
    margin 20px auto 30px
  .m-1
    .box-wrapper
      flex-wrap wrap


@media (min-width: 600px) and (max-width: 960px)
  .m-1
    padding 0 30px

</style>
