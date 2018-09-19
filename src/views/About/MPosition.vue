<template>
  <div class="about-module m-position">
    <div class="addr-wrapper">
      <div class="addr-list">
        <div class="list-item">
          <p>成都市高新区天府大道中段666号</p>
          <p>希顿国际广场 B-905</p>
          <p>028-62319750</p>
        </div>
        <div class="list-item">
          <p>北京市海淀区马连洼北路125号</p>
          <p>亿城国际中心 5-25</p>
          <p>010-62673334</p>
        </div>
        <div class="list-item">
          <p>杭州市西湖区文三路553号</p>
          <p>浙江中小企业大厦 16-20</p>
          <p>010-62673334</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.addr-wrapper
  background url('/img/address.jpg') no-repeat center center
  background-size cover
  min-height 300px
  .addr-list
    padding-top 60px
    display flex
    justify-content center
    align-items center
    .list-item
      margin 0 20px
      background rgba(0,0,0,0.2)
      color #454545
      width 260px
      padding 20px
      font-size 14px
      text-align center
      border-radius 4px
      line-height 1.5
      p
        margin-bottom 15px
</style>
