<template>
  <div class="pro-module m-1">
    <h2 class="m-title">识别未知威胁</h2>
    <div class="box-wrapper">
      <div class="box">
        <div class="circle">
          <i class="icon icon-1"></i>
        </div>
        <div class="text">
          <h3>设备指纹库</h3>
          <p>Devices Fingerprints</p>
        </div>
      </div>
      <div class="box">
        <div class="circle">
          <i class="icon icon-2"></i>
        </div>
        <div class="text">
          <h3>社工库</h3>
          <p>Social Engineering</p>
        </div>
      </div>
      <div class="box">
        <div class="circle">
          <i class="icon icon-3"></i>
        </div>
        <div class="text">
          <h3>高级威胁样本</h3>
          <p>APT Samples</p>
        </div>
      </div>
      <div class="box">
        <div class="circle">
          <i class="icon icon-4"></i>
        </div>
        <div class="text">
          <h3>黑客信息库</h3>
          <p>Hackers Records</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.m-1
  // background-color skyblue
  .m-title
    padding-top: 40px;
    text-align: center;
  .box-wrapper
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    .box
      margin: 0 2.5%;
      text-align: center;
      .circle
        display: inline-block;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        position: relative;
        z-index: 1;
        box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.05);
        &::after
          content: '';
          position: absolute;
          box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
          transition: opacity 0.3s, box-shadow 0.4s, transform 0.5s;
          transform: rotate(-180deg);
          width: 100%;
          height: 100%;
          border-radius: 50%;
          top: -10px;
          left: -10px;
          padding: 10px;
          z-index: -1;
          opacity: 0;
        &:hover
          &::after
            opacity: 1;
            box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.15);
            transform: rotate(0);
        .icon
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 116px;
          height: 116px;
        .icon-1
          background: url('/img/product/t-i-1.jpg') no-repeat center center;
          background-size: cover;
        .icon-2
          background: url('/img/product/t-i-2.jpg') no-repeat center center;
          background-size: cover;
        .icon-3
          background: url('/img/product/t-i-3.jpg') no-repeat center center;
          background-size: cover;
        .icon-4
          background: url('/img/product/t-i-4.jpg') no-repeat center center;
          background-size: cover;
      .text
        margin-top: 30px;
        h3
          margin-bottom: 10px;
          color: #777;
        p
          color: #999;

@media (min-width: 320px) and (max-width: 599px)
  .m-1
    .m-title
      padding 0
      margin 0 auto 40px
    .box-wrapper
      flex-wrap wrap
      margin-bottom 40px
      .box
        margin 0 auto
        margin-bottom 30px
        .circle
          width 140px
          height 140px
@media (min-width: 600px) and (max-width: 980px)
  .m-1
    .box-wrapper
      .box
        margin: 0 2%;
        .circle
          width: 140px;
          height: 140px;
</style>
