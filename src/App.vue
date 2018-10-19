<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <SmFixedMenu />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import SmFixedMenu from './components/SmFixedMenu';
export default {
  components: {
    SmFixedMenu,
  },
};
</script>

<style lang="stylus">
@import '~@/assets/css/iconfont.css';
*
  margin: 0;
  padding: 0;
  box-sizing: border-box;
ul, li, ol
  list-style: none;
a
  text-decoration: none;
.page-content
  padding-top: 50px;
body
  &::-webkit-scrollbar
    width: 7px;
  &::-webkit-scrollbar-track
    background-color: rgba(200, 200, 200, 0.6);
    border-radius: 2px;
  &::-webkit-scrollbar-thumb
    background-color: rgba(66, 66, 66, 0.3);
    border-radius: 2px;
</style>
