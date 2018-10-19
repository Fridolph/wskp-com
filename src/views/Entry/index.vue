<template>
  <div class="page-container page-home">
    <HomeNavbar />
    <img
      src="/img/sl-title.png"
      alt="logo"
    >

    <h1>
      <router-link to="/home">为安全而生</router-link>
    </h1>

    <router-link to="/home">点击进入</router-link>

    <footer>
      <p>Copyright © 2017 北京网思科平科技有限公司</p>
    </footer>
  </div>
</template>

<script>
import HomeNavbar from '@/components/HomeNavbar';

export default {
  name: 'home',
  components: {
    HomeNavbar,
  },
};
</script>

<style lang="stylus" scoped>
.page-container
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  width 100%
  height 100%
  background-color #fafafa
  overflow hidden
  text-align center
  background #fafafa url('/img/home-bg.png') no-repeat center bottom
  background-size 100%

.page-home
  img
    max-width 100%
    margin-top 15%
  h1
    margin-top 60px
    font-weight 400
    font-size 50px
    a
      color #ccc
      position relative
      padding-bottom 16px
      &::after
        content ''
        position absolute
        left 0
        bottom 0
        width 0
        height 4px
        background #ccc
        transition all ease-in-out 0.4s
      &:hover
        &::after
          width 100%

  > a
    position absolute
    bottom 150px
    background-color orange
    border none
    border-radius 4px
    line-height 32px
    padding 0 16px
    left 50%
    font-size 14px
    color #fff
    cursor pointer
    transform translate(-50%, 0)
    &:hover
      background-color #fc9c00


  footer
    position absolute
    bottom 20px
    width 100%
    text-align center
    font-size 12px
    color #999

@media (min-width: 320px) and (max-width: 599px)
  .page-home
    > img
      margin-top 30%
      max-width 90%
    footer
      bottom 50px
</style>
