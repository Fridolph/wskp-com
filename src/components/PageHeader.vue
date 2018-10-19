<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img
          src="/img/pro-logo.png"
          alt="logo"
        >
      </router-link>
    </div>
    <div class="small-screen">
      <span @click="handleClickMenu">菜单</span>
    </div>
    <div class="side">
      <ul class="menu">
        <router-link
          tag="li"
          to="/home"
        ><a>首页</a></router-link>
        <li>
          <a>产品</a>
          <ul class="submenu">
            <router-link
              tag="li"
              to="/product/edr"
            ><a>天蝎终端威胁侦测与响应系统</a></router-link>
            <router-link
              tag="li"
              to="/product/tsgz"
            ><a>天蝎安全态势感知平台</a></router-link>
            <router-link
              tag="li"
              to="/product/stds"
            ><a>天蝎服务器威胁监测系统</a></router-link>
            <router-link
              tag="li"
              to="/product/tool"
            ><a>天蝎恶意代码检测工具</a></router-link>
          </ul>
        </li>
        <router-link
          tag="li"
          to="/service"
        ><a>服务</a></router-link>
        <router-link
          tag="li"
          to="/solution"
        ><a>解决方案</a></router-link>
        <router-link
          tag="li"
          to="/learn"
        ><a>研究</a></router-link>
        <router-link
          tag="li"
          to="/about"
        ><a>关于</a></router-link>
      </ul>
      <div class="tel">
        <i class="iconfont icon-ai-tel"></i>
        <span>400-008-1587</span>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      isActive: false,
    };
  },
  watch: {
    ['$route'](newVal) {
      let innerRoutes = [
        '/product/edr',
        '/product/tsgz',
        '/product/stds',
        '/product/tool',
      ];
      let href = window.location.href;
      let route = href.substr(href.indexOf('#') + 1);
      if (innerRoutes.includes(route)) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
  methods: {
    handleClickMenu() {
      this.openSmallMenu();
    },
    ...mapMutations({
      openSmallMenu: 'openSmallMenu',
      closeSmallMenu: 'closeSmallMenu',
    }),
  },
};
</script>

<style lang="stylus" scoped>
.header
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #222;
  .logo
    position: absolute;
    left: 60px;
    padding-top: 16px;
  .small-screen
    display none
  .side
    position: absolute;
    right: 60px;
    .menu, .tel
      display: inline-block;
      font-size: 14px;
    .tel
      margin-left: 40px;
      color: #ff9c00;
      span
        margin-left: 8px;
.menu
  margin: 0;
  > li
    min-width: 80px;
    display: inline-block;
    position: relative;
    text-align: center;
    padding: 0 15px;
    font-size: 14px;
    transition: all 0.3s ease-out;
    &:first-child
      border-radius: 5px 0 0;
    &:hover
      background-color: #1c1c1c;
      background: linear-gradient(#090909, #101010);
      a
        border-radius: 5px 0 0 0;
        color: #ff9c00;
    &.active
      background-color: #1c1c1c;
      background: linear-gradient(#090909, #101010);
      a
        border-radius: 5px 0 0 0;
        color: #ff9c00;
  a
    transition: all 0.4s ease-in-out;
    color: #808080;
    display: block;
    line-height: 50px;
    text-decoration: none;
    text-transform: uppercase;
.menu li:hover > a
  border-radius: 5px 0 0 0;
/* submenu styles */
.submenu
  left: 0;
  max-height: 0;
  position: absolute;
  top: 100%;
  z-index: 0;
  perspective: 400px;
  width: 220px;
  text-align: left;
  li
    background-color: #222;
    opacity: 0;
    transform: rotateY(90deg);
    transition: opacity 0.4s, transform 0.5s;
    a
      border-left: 3px solid transparent;
      padding-left: 14px;
      color: #808080;
    &:hover
      background: linear-gradient(#090909, #101010);
      a
        border-left: 3px solid #ff9c00;
        border-radius: 0;
        color: #fff;
.menu > li:hover .submenu, .menu > li:focus .submenu
  max-height: 1000px;
  z-index: 10;
.menu > li:hover .submenu li, .menu > li:focus .submenu li
  opacity: 1;
  transform: none;
/* CSS3 delays for transition effects */
.menu li:hover .submenu li:nth-child(1)
  transition-delay: 0s;
.menu li:hover .submenu li:nth-child(2)
  transition-delay: 70ms;
.menu li:hover .submenu li:nth-child(3)
  transition-delay: 140ms;
.menu li:hover .submenu li:nth-child(4)
  transition-delay: 210ms;
.submenu li:nth-child(1)
  transition-delay: 210ms;
.submenu li:nth-child(2)
  transition-delay: 140ms;
.submenu li:nth-child(3)
  transition-delay: 70ms;
.submenu li:nth-child(4)
  transition-delay: 0ms;

@media (min-width: 320px) and (max-width: 599px)
  .header
    .logo
      left: 20px;
    .side
      right: 20px;
      display none
    .small-screen
      margin-right 20px
      display block
      float right
      span
        color #ccc
        cursor pointer
        line-height 50px

@media (min-width: 600px) and (max-width: 980px)
  .header
    .logo
      left: 20px;
    .side
      right: 20px;
  .menu
    > li
      min-width: 70px;
      padding: 0 10px;
</style>
