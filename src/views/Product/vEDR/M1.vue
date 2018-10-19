<template>
  <div class="pro-module m-1">
    <h2 class="m-title">识别未知威胁</h2>
    <div class="threat-box">
      <div class="item">
        <p>对抗勒索软件</p>
        <div class="icon-wrapper">
          <i class="iconfont icon-33"></i>
        </div>
      </div>
      <div class="item">
        <p>识别横向攻击</p>
        <div class="icon-wrapper">
          <i class="iconfont icon-computer"></i>
        </div>
      </div>
      <div class="item">
        <p>定位恶意通信</p>
        <div class="icon-wrapper">
          <i class="iconfont icon-tongxin"></i>
        </div>
      </div>
      <div class="item">
        <p>截取攻击矢量</p>
        <div class="icon-wrapper">
          <i class="iconfont icon-shougongji"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.m-1
  .threat-box
    padding 0 5%
    display flex
    justify-content center
    .item
      margin 0 50px
      position relative
      &::after
        content ''
        position absolute
        border 0.5px solid #dedede
        right -40%
        top 5%
        display block
        height 90%
      &:last-child
        &::after
          display none
      p
        font-size 20px
        color #999
        margin-bottom 40px
        text-align center
      .icon-wrapper
        display inline-block
        width 90px
        height 90px
        line-height 90px
        margin 0 10px
        text-align center
        position relative
        transition transform 0.2s ease-out
        border-radius 50%
        background rgba(0,0,0,0.05)
        i
          font-size 42px
          color #ccc

        &::after
          content ''
          z-index -1
          width 100%
          height 100%
          background rgba(0,0,0,0.12)
          position absolute
          left 0
          top 0
          border-radius 50%
          opacity 0
          transform scale(0.9)
          box-shadow 0 0 0 2px rgba(0,0,0,0.1)
          opacity 0

        &:hover
          background rgba(0, 0, 0, 0.05)
          transform scale(0.93)
          i
            color #999
          &::after
            animation sonarEffect 1.3s ease-out 75ms

@keyframes sonarEffect {
	0% {
		opacity: 0.3;
	}
	40% {
		opacity: 0.5;
		box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #d7cfd5, 0 0 0 10px rgba(255,255,255,0.4);
	}
	100% {
		box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #b195ab, 0 0 0 10px rgba(255,255,255,0.4);
		transform: scale(1.2);
		opacity: 0;
	}
}
</style>
