<template>
  <div class="pro-module m-1">
    <h2 class="m-title">天蝎恶意代码辅助检查工具</h2>
    <div class="box-wrapper">
      <div class="box">
        <div class="circle">
          <i class="iconfont icon-shenduheguangdu"></i>
        </div>
        <div class="text">
          <h3>深度</h3>
          <p>Depth</p>
        </div>
      </div>
      <div class="box">
        <div class="circle">
          <i class="iconfont icon-xingweifenxi"></i>
        </div>
        <div class="text">
          <h3>行为</h3>
          <p>Behavior</p>
        </div>
      </div>
      <div class="box">
        <div class="circle">
          <i class="iconfont icon-chouchongbug"></i>
        </div>
        <div class="text">
          <h3>已知</h3>
          <p>Known</p>
        </div>
      </div>
      <div class="box">
        <div class="circle">
          <i class="iconfont icon-tianqizitiku51"></i>
        </div>
        <div class="text">
          <h3>未知</h3>
          <p>Unknown</p>
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
  // background-color skyblue
  .m-title
    padding-top 40px
    text-align center
  .box-wrapper
    display flex
    justify-content center
    margin-bottom 100px
    .box
      margin 0 2.5%
      text-align center
      .circle
        display inline-block
        width 120px
        height 120px
        border-radius 50%
        position relative
        z-index 1
        box-shadow 0 0 0 4px rgba(0,0,0,0.05)
        transition box-shadow 0.4s
        &:hover
          box-shadow 0 0 0 4px rgba(0,0,0,0.15)
          .iconfont
            color #999
            font-size 70px
        &::after
          content ''
          position absolute
          box-shadow 0 0 0 rgba(0,0,0,0.1)
          transition opacity 0.3s, box-shadow 0.4s, transform 0.5s
          transform rotate(-180deg)
          width 100%
          height 100%
          border-radius 50%
          top -10px
          left -10px
          padding 10px
          z-index -1
          opacity 0
        &:hover
          &::after
            opacity 1
            box-shadow 3px 3px 0 rgba(0,0,0,0.15)
            transform rotate(0)
        .iconfont
          line-height 120px
          font-size 66px
          font-weight 400
          color #ccc
          transition all 0.3s ease-in
        .icon-shenduheguangdu
          font-size 56px
      .text
        margin-top 30px
        h3
          margin-bottom 10px
          color #777
        p
          color #999
</style>
