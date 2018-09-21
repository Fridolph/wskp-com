<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<style lang="stylus">
*
  margin 0
  padding 0
  box-sizing border-box
ul, li, ol
  list-style none
a
  text-decoration none

.page-content
  padding-top 50px
</style>
