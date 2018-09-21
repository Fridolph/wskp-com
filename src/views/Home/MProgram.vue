<template>
  <div class="home-module program">
    <h2 class="title">
      <span>方案　案例</span>
    </h2>
    <div class="article">
      <div class="article-item">
        <div class="img-wrapper">
          <img src="/img/homepage/case1.jpg" alt="金融行业信息安全解决方案">
        </div>
        <div class="content">
          <div class="title">金融行业信息安全解决方案</div>
          <div class="tools">天蝎终端威胁侦测与响应系统（EDR）</div>
          <div class="desc">
            强化金融行业对终端的安全监控手段，降低终端安全风险，协助金融行业用户建设主动、深层、立体、智能的信息安全防御体系。
            <p><a href="/" class="more">>>详情</a></p>
          </div>
        </div>
      </div>
      <div class="article-item">
        <div class="img-wrapper">
          <img src="/img/homepage/case2.jpg" alt="电子政务云信息安全解决方案">
        </div>
        <div class="content">
          <div class="title">电子政务云信息安全解决方案</div>
          <div class="tools">天蝎服务器威胁监测系统</div>
          <div class="desc">
            完善对电子政务（内／外网）系统中核心资产的威胁监管，减少繁杂的安全防御系统建设，降低信息化成本。
            <p><a href="/" class="more">>>详情</a></p>
          </div>
        </div>
      </div>
      <div class="article-item">
        <div class="img-wrapper">
          <img src="/img/homepage/case3.jpg" alt="能源行业信息安全解决方案">
        </div>
        <div class="content">
          <div class="title">能源行业信息安全解决方案</div>
          <div class="tools">天蝎底层硬件威胁检测工具</div>
          <div class="desc">
            加强国家基础设施的安全防御建设，重点对系统的底层硬件威胁进行发现、查杀，保障基础设施数据安全。
            <p><a href="/" class="more">>>详情</a></p>
          </div>
        </div>
      </div>
      <div class="article-item">
        <div class="img-wrapper">
          <img src="/img/homepage/case4.jpg" alt="运营商IDC信息安全解决方案">
        </div>
        <div class="content">
          <div class="title">运营商IDC信息安全解决方案</div>
          <div class="tools">天蝎安全态势感知平台</div>
          <div class="desc">
            为推进运营商信息安全的可视化监控、入侵检测、弱点分析，我们利用大数据分析技术通过人工智能实现机器学习。
            <p><a href="/" class="more">>>详情</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.program
  margin-top 100px
  padding 0 30px
  .article
    margin-top 100px
    display flex
    flex-wrap wrap
    .article-item
      width calc(50% - 60px)
      margin 0 30px 50px 30px
      min-height 170px
      .img-wrapper
        position absolute
        width 230px
        height 170px
        overflow hidden
        img
          max-width 100%
      .content
        padding-left 250px
        .title
          text-align left
          font-size 14px
          margin-bottom 15px
        .tools
          background url('/img/icon/plan.png') no-repeat 0 center
          padding-left 40px
          font-size 13px
          line-height 1.5
          margin-bottom 10px
        .desc
          font-size 13px
          line-height 24px
          color #666
          a
            color #4085fa
            font-size 13px
</style>
