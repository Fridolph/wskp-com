<template>
  <div class="pro-module m-2">
    <h2 class="m-title">天蝎底层硬件威胁检测工具</h2>
    <div class="show-box">
      <div class="box">
        <div class="img-wrapper">
          <img src="/img/product/jc_1.jpg" alt="tool">
        </div>
      </div>
      <div class="box">
        <div class="img-wrapper">
          <img src="/img/product/jc_2.jpg" alt="tool">
        </div>
      </div>
      <div class="box">
        <div class="img-wrapper">
          <img src="/img/product/jc_3.jpg" alt="tool">
        </div>
      </div>
      <div class="box">
        <div class="img-wrapper">
          <img src="/img/product/jc_4.jpg" alt="tool">
        </div>
      </div>
    </div>
    <div class="jr">
      <div class="m-title">兼容主板</div>
      <dl>
        <dt>BIOS类型</dt>
        <dd>
          <ul>
            <li>
              <span class="name">Award</span>
              <div class="badge">130</div>
            </li>
            <li>
              <span class="name">AMI</span>
              <div class="badge">130</div>
            </li>
            <li>
              <span class="name">Phoenix</span>
              <div class="badge">4</div>
            </li>
            <li>
              <span class="name">UEFI</span>
              <div class="badge">489</div>
            </li>
          </ul>
        </dd>
        <dt>BIOS厂商</dt>
        <dd>
          <ul>
            <li>
              <span class="name">ASUS</span>
              <div class="badge">157</div>
            </li>
            <li>
              <span class="name">GIGABYTE</span>
              <div class="badge">91</div>
            </li>
            <li>
              <span class="name">INTEL</span>
              <div class="badge">55</div>
            </li>
            <li>
              <span class="name">MSI</span>
              <div class="badge">157</div>
            </li>
            <li>
              <span class="name">Biostar</span>
              <div class="badge">260</div>
            </li>
            <li>
              <span class="name">ASROCK</span>
              <div class="badge">27</div>
            </li>
            <li>
              <span class="name">foxconn</span>
              <div class="badge">94</div>
            </li>
            <li>
              <span class="name">onda</span>
              <div class="badge">10</div>
            </li>
            <li>
              <span class="name">soyo</span>
              <div class="badge">11</div>
            </li>
            <li>
              <span class="name">supermicro</span>
              <div class="badge">61</div>
            </li>
            <li>
              <span class="name">ECS</span>
              <div class="badge">27</div>
            </li>
            <li>
              <span class="name">Lenovo</span>
              <div class="badge">3</div>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.m-2
  background-color #f9f9f9
  padding-bottom 50px
  .m-title
    padding-top 80px
  .show-box
    display flex
    justify-content center
    .box
      margin 0 20px
  .jr
    .m-title
      padding-top 40px

dl
  padding 0 5%
  dt
    font-size 16px
    color #777
    margin-bottom 20px
    font-weight bold
  dd
    ul
      display flex
      flex-wrap wrap
      li
        margin 0 30px 30px 0
        width 140px
        background-color #dedede
        border-radius 2px
        position relative
        text-align center
        line-height 36px
        font-size 18px
        color #999
        .badge
          position absolute
          right -10%
          top -8px
          color #fff
          background-color #ff9c00
          border-radius 12px
          font-size 10px
          line-height 1.3
          padding 0 3px
</style>
