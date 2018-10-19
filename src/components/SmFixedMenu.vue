<template>
  <div
    class="fixed-menu"
    :class="smShowMenu ? 'active' : ''"
  >
    <div class="menu-list">
      <div>
        <i
          class="icon icon-return"
          @click="closeSmallMenu"
        ></i>
      </div>
      <div
        class="item"
        @click="routerTo('/home')"
      >首页</div>
      <div class="item">
        <span>产品</span>
        <ul>
          <li @click="routerTo('/product/edr')">天蝎终端威胁侦测与响应系统</li>
          <li @click="routerTo('/product/tsgz')">天蝎安全态势感知平台</li>
          <li @click="routerTo('/product/stds')">天蝎服务器威胁监测系统</li>
          <li @click="routerTo('/product/tool')">天蝎恶意代码检测工具</li>
        </ul>
      </div>
      <div
        class="item"
        @click="routerTo('/service')"
      >服务</div>
      <div
        class="item"
        @click="routerTo('/solution')"
      >解决方案</div>
      <div
        class="item"
        @click="routerTo('/learn')"
      >研究</div>
      <div
        class="item"
        @click="routerTo('/about')"
      >关于</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState(['smShowMenu']),
  },
  methods: {
    routerTo(path) {
      this.$router.push({
        path,
      });
      this.closeSmallMenu();
    },
    ...mapMutations({
      openSmallMenu: 'openSmallMenu',
      closeSmallMenu: 'closeSmallMenu',
    }),
  },
};
</script>

<style lang="stylus" scoped>
.fixed-menu
  position fixed
  z-index 1000
  top 0
  right -70%
  background-color rgb(50, 60, 60)
  height 100vh
  width 240px
  padding 20px 10px 0 20px
  transition all 0.4s ease-in-out
  &.active
    right 0
  .menu-list
    color #ccc
    .icon
      display inline-block
      width 30px
      height 30px
      z-index 100
      border 1px solid #666
      border-radius 50%
      transform translate(-4px, -4px)
    .icon-return
      background url('/img/icon/return.png') no-repeat center center
      background-size 18px 18px
    .item
      line-height 2
      margin-bottom 15px
      display block
      color #ddd
      ul
        padding-left 15px
        li
          color #ddd
          font-size 14px
          line-height 1.5
          margin-bottom 6px
</style>
