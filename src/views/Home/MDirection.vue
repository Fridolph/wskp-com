<template>
  <div class="home-module learn-direction">
    <div class="title">
      <span>研究　方向</span>
    </div>
    <div class="list">
      <div class="item">
        <div class="icon safe"></div>
        <div class="text">安全方向</div>
      </div>
      <div class="item">
        <div class="icon data"></div>
        <div class="text">大数据方向</div>
      </div>
      <div class="item">
        <div class="icon tsgz"></div>
        <div class="text">态势感知</div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.learn-direction
  background-color #000
  margin 50px 0
  background url('/img/banner/research.jpg') no-repeat left center
  background-size 100% 100%
  background-attachment fixed
  padding 90px 0
  .title
    color #fff
    margin-bottom 140px
  .list
    display flex
    justify-content center
    margin-bottom 70px
    .item
      background-color #fff
      width 220px
      flex 0 0 220px
      margin 0 40px
      text-align center
      color #666
      position relative
      &::before, &::after
        content ''
        width 0
        height 0
        position absolute
        left 0
        display block
        border-style solid
      &::before
        top -60px
        border-width 0 110px 60px 110px
        border-color transparent transparent #fff transparent
      &::after
        bottom -60px
        border-width 60px 110px 0 110px
        border-color #fff transparent transparent transparent
      .icon
        height 110px
      .safe
        background url('/img/icon/fx-safe.png') no-repeat center 20px
        background-size 62px 74px
      .data
        background url('/img/icon/fx-data.png') no-repeat center 20px
        background-size 64px 77px
      .tsgz
        background url('/img/icon/fx-tsgz.png') no-repeat center 20px
        background-size 82px 62px

@media (min-width: 320px) and (max-width: 599px)
  .learn-direction
    padding 40px 0
    .list
      flex-wrap wrap
      .item
        width 100%
        margin-bottom 140px
        &:last-child
          margin-bottom 0
</style>
