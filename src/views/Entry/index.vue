<template>
  <div class="page-container page-home">
    <HomeNavbar />
    <img src="/img/sl-title.png" alt="logo">

    <h1>为安全而生</h1>

    <footer>
      <p>Copyright © 2017 北京网思科平科技有限公司</p>
    </footer>
  </div>
</template>

<script>
import HomeNavbar from '@/components/HomeNavbar'

export default {
  name: 'home',
  components: {
    HomeNavbar
  }
}
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

.page-home
  img
    margin-top 15%
  h1
    margin-top 50px
    color #999
    font-weight 400
    font-size 50px
  footer
    position absolute
    bottom 20px
    width 100%
    text-align center
    font-size 12px
    color #999
</style>
