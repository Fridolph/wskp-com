<template>
  <footer class="page-footer">
    <div class="left">
      <img
        src="/img/footer-logo.png"
        alt=""
        class="logo"
      >
    </div>
    <div class="right">
      <div class="copyright">
        <p>Copyright © 2017 All Rights Reserved. 版权所有</p>
        <p>京ICP备15021836号-1</p>
      </div>
      <div class="ercode">
        <img
          src="/img/wx.jpg"
          alt="ercode"
        >
      </div>
    </div>
  </footer>
</template>

<style lang="stylus" scoped>
.page-footer
  background #000
  // height 160px
  padding 40px
  display flex
  justify-content space-between
  .left
    width 240px
  .right
    width 380px
    display flex
    justify-content space-between
    .copyright
      color #999
      font-size 12px
      text-align right
      line-height 2
      margin-top 10px
      p
        &:first-child
          margin-bottom 10px

@media (min-width: 320px) and (max-width: 599px)
  .page-footer
    flex-wrap wrap
    .left, .right
      flex 0 0 1

    .left
      width 100%
      text-align center
      margin-bottom 20px

    .right
      .copyright
        text-align left
        margin-top 0
      .ercode
        margin-top 6px
</style>
