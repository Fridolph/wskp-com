<template>
  <header class="header">
    <div class="logo">
      <img src="/img/pro-logo.png" alt="logo">
    </div>
    <div class="side">
      <div class="menu">
        <div class="menu-item">
          <router-link to="/home">首页</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/product">产品</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/service">服务</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/solution">解决方案</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/learn">研究</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/about">关于</router-link>
        </div>
      </div>
      <div class="tel">
        400-008-1587
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.header
  position fixed
  z-index 999
  top 0
  left 0
  width 100%
  height 50px
  background #222
  .logo
    position absolute
    left 60px
    padding-top 18px
  .side
    position absolute
    right 60px
    .menu, .tel
      display inline-block
      font-size 14px

    .menu
      margin-top 16px
      .menu-item
        display inline-block
        margin 0 10px
        a
          color #fff
          padding 0 10px
          &:hover
            color #ff9c00
    .tel
      margin-left 30px
      color #ff9c00

</style>
