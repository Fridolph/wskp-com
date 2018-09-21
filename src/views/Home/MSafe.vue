<template>
  <div class="safe-service home-module">
    <h2 class="title">
      <span>安全　服务</span>
    </h2>
    <ul class="service-box">
      <li class="service-item">
        <div class="content c1">
          <div class="circle"></div>
          <i class="icon icon1"></i>
          <div class="desc">
            脆弱性<br/>分析
          </div>
        </div>
        <div class="info">
          <p>渗透测试</p>
          <p>弱点分析</p>
        </div>
      </li>
      <li class="service-item">
        <div class="content c2">
          <div class="circle"></div>
          <i class="icon icon2"></i>
          <div class="desc">
            代码审计
          </div>
        </div>
        <div class="info">
          <p>黑盒测试</p>
          <p>白盒测试</p>
        </div>
      </li>
      <li class="service-item">
        <div class="content c3">
          <div class="circle"></div>
          <i class="icon icon3"></i>
          <div class="desc">
            合规性<br/>评估
          </div>
        </div>
        <div class="info">
          <p>风险评估</p>
          <p>等级保护咨询</p>
          <p>分级保护咨询</p>
        </div>
      </li>
      <li class="service-item">
        <div class="content c4">
          <div class="circle"></div>
          <i class="icon icon4"></i>
          <div class="desc">
            安全巩固
          </div>
        </div>
        <div class="info">
          <p>主机加固</p>
          <p>应用加固</p>
          <p>数据库加固</p>
        </div>
      </li>
    </ul>

    <div class="more-wrapper">
      <a href="/" class="btn btn-more">了解更多</a>
    </div>

    <div class="service-bg">
      <div class="text">网络威胁无处不在,网蝎确保安全</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>


<style lang="stylus" scoped>
.safe-service
  background-color #fafafa
  padding-top 100px
  .title
    margin-bottom 70px

.service-box
  display flex
  justify-content center

  .service-item
    width 25%
    text-align center
    .content
      display inline-block
      width 114px
      height 114px
      border-radius 50%
      margin 0 auto
      position relative
      border 1px solid #ccc
      cursor pointer
      .circle
        background url('/img/icon/service-img.png') no-repeat center center
        width 142px
        height 148px
        position absolute
        left 50%
        transform translate(-50%, -19px) rotate(0deg)
        transform-origin 50% 50% 0
        transition transform .5s ease-out
      .icon
        margin 15px auto 10px
        display block
      .icon1
        width 34px
        height 40px
        background url('/img/icon/service1.png') no-repeat 0 0
        background-size contain
      .icon2
        height 36px
        width 36px
        background url('/img/icon/service2.png') no-repeat 0 0
        background-size contain
      .icon3
        width 36px
        height 34px
        background url('/img/icon/service3.png') no-repeat 0 0
        background-size contain
      .icon4
        width 36px
        height 40px
        background url('/img/icon/service4.png') no-repeat 0 0
        background-size contain
      .desc
        color #777
        font-size 14px
      &:hover
        background #7c7c7c
        .desc
          color #fff
        .circle
          transform translate(-50%, -19px) rotate(90deg)
    .c1
      &:hover
        .icon1
          background url('/img/icon/service1-hover.png') no-repeat 0 0
    .c2
      &:hover
        .icon2
          background url('/img/icon/service2-hover.png') no-repeat 0 0
    .c3
      &:hover
        .icon3
          background url('/img/icon/service3-hover.png') no-repeat 0 0
    .c4
      &:hover
        .icon4
          background url('/img/icon/service4-hover.png') no-repeat 0 0

    .info
      font-size 12px
      margin-top 45px
      p
        margin-bottom 5px
        color #777


.more-wrapper
  margin-top 80px
  text-align center
  .btn-more
    display inline-block
    width 180px
    height 40px
    line-height 40px
    border-radius 4px
    background-color #ff9c00
    font-size 12px
    color #fff
    transition background ease-out 0.4s
    &:hover
      background-color #ffb43e

.service-bg
  margin-top 90px
  height 270px
  line-height 270px
  background url('/img/banner/service-bg.jpg') no-repeat center center
  background-size 100% 100%
  background-attachment fixed
  .text
    color #fff
    font-size 48px
    text-align center
</style>
