<template>
  <div class="about-module m-honor">
    <div class="title">
      <span>公司　荣誉</span>
    </div>
    <div class="honor-list">
      <div class="list-item">
        <div class="img-wrapper">
          <img
            src="/img/honor/h1.jpg"
            alt=""
          >
        </div>
      </div>
      <div class="list-item">
        <div class="img-wrapper">
          <img
            src="/img/honor/h2.jpg"
            alt=""
          >
        </div>
      </div>
      <div class="list-item">
        <div class="img-wrapper">
          <img
            src="/img/honor/h3.jpg"
            alt=""
          >
        </div>
      </div>
      <div class="list-item">
        <div class="img-wrapper">
          <img
            src="/img/honor/h4.jpg"
            alt=""
          >
        </div>
      </div>
      <div class="list-item">
        <div class="img-wrapper">
          <img
            src="/img/honor/h5.jpg"
            alt=""
          >
        </div>
      </div>
      <div class="list-item">
        <div class="img-wrapper">
          <img
            src="/img/honor/h6.jpg"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.m-honor
  background-color #eaedf3
  padding 50px 0 80px 0
.honor-list
  display flex
  flex-wrap wrap
  justify-content center
  max-width 1400px
  margin 0 auto
  margin-top 80px
  .list-item
    width 310px
    height 210px
    border 1px solid #dedede
    margin 0 30px 20px
    background-color #fff
    display flex
    align-items center
    justify-content center
    overflow hidden
    border-radius 4px
    &:hover
      img
        transform scale(1.25)
    .img-wrapper
      text-align center
      img
        max-width 100%
        height 100%
        transition transform 0.7s ease-in-out
</style>
