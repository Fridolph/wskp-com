<template>
  <div class="pro-module m-2">
    <h2 class="m-title">平台化方案</h2>
    <div class="threat-box">
      <div class="item">
        <p>数据中心</p>
        <div class="icon-wrapper">
          <i class="iconfont icon-33"></i>
        </div>
      </div>
      <div class="item">
        <p>风险监控</p>
        <div class="icon-wrapper">
          <i class="iconfont icon-computer"></i>
        </div>
      </div>
      <div class="item">
        <p>应急响应</p>
        <div class="icon-wrapper">
          <i class="iconfont icon-tongxin"></i>
        </div>
      </div>
      <div class="item">
        <p>主动防御</p>
        <div class="icon-wrapper">
          <i class="iconfont icon-shougongji"></i>
        </div>
      </div>
      <div class="item">
        <p>数据可视化</p>
        <div class="icon-wrapper">
          <i class="iconfont icon-shougongji"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.m-2
  background: #f8f8f8;
  padding: 70px 0 100px;
  .threat-box
    padding: 0 5%;
    display: flex;
    justify-content: center;
    .item
      margin: 0 50px;
      position: relative;
      &::after
        content: '';
        position: absolute;
        border: 0.5px solid #dedede;
        right: -40%;
        top: 5%;
        display: block;
        height: 90%;
      &:last-child
        &::after
          display: none;
      p
        font-size: 20px;
        color: #999;
        margin-bottom: 40px;
        text-align: center;
      .icon-wrapper
        display: inline-block;
        width: 90px;
        height: 90px;
        line-height: 90px;
        margin: 0 10px;
        text-align: center;
        position: relative;
        transition: transform 0.2s ease-out;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.05);
        i
          font-size: 42px;
          color: #ccc;
        &::after
          content: '';
          z-index: -1;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.12);
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 50%;
          opacity: 0;
          transform: scale(0.9);
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
          opacity: 0;
        &:hover
          background: rgba(0, 0, 0, 0.05);
          transform: scale(0.93);
          i
            color: #999;
          &::after
            animation: sonarEffect 1.3s ease-out 75ms;
@keyframes sonarEffect
  0%
    opacity: 0.3;
  40%
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #d7cfd5, 0 0 0 10px rgba(255, 255, 255, 0.4);
  100%
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #b195ab, 0 0 0 10px rgba(255, 255, 255, 0.4);
    transform: scale(1.2);
    opacity: 0;

@media (min-width: 320px) and (max-width: 599px)
  .m-2
    padding 30px 0
    .threat-box
      flex-wrap wrap
      .item
        margin 0 20px
        margin-bottom 30px
        &::after
          display none
        p
          margin-bottom 15px
@media (min-width: 600px) and (max-width: 980px)
  .m-2
    .threat-box
      padding: 0 3%;
      .item
        margin: 0 3%;
        &::after
          right: -20%;
</style>
