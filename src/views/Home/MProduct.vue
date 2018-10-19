<template>
  <div class="product-show home-module">
    <h2 class="title">
      <span>产品　展示</span>
    </h2>
    <ul class="product-list">
      <li class="list-item">
        <div class="img-wrapper">
          <img
            src="/img/homepage/pro1.jpg"
            alt="终端侦测与响应系统"
          >
        </div>
        <div class="text">
          <span>天蝎终端威胁侦测与响应系统（EDR）</span>
          <a href="/">查看更多</a>
        </div>
      </li>
      <li class="list-item">
        <div class="img-wrapper">
          <img
            src="/img/homepage/pro2.jpg"
            alt="底层硬件威胁检测工具"
          >
        </div>
        <div class="text">
          <span>天蝎底层硬件威胁检测工具</span>
          <a href="/">查看更多</a>
        </div>
      </li>
      <li class="list-item">
        <div class="img-wrapper">
          <img
            src="/img/homepage/pro3.jpg"
            alt="态势感知"
          >
        </div>
        <div class="text">
          <span>天蝎安全态势感知平台</span>
          <a href="/">查看更多</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>


<style lang="stylus" scoped>
.product-show
  margin: 50px 0 100px 0;
  .product-list
    margin-top: 60px;
    display: flex;
    justify-content: center;
    .list-item
      border: 1px solid #dedede;
      margin: 0 1.5%;
      border-radius: 4px;
      overflow: hidden;
      padding: 10px;
      transition: all 0.4s ease-in-out;
      &:hover
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
      .img-wrapper
        width: 290px;
        padding-bottom: 58%;
        position: relative;
        overflow: hidden;
        img
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          transition: 0.6s ease-in-out;
          &:hover
            transform: scale(1.1);
      .text
        font-size: 12px;
        margin: 15px 0 5px 0;
        position: relative;
        a
          position: absolute;
          right: 0;
          top: -4px;
          background-color: #eee;
          padding: 4px 6px;
          border-radius: 4px;
          color: #666;

@media (min-width: 320px) and (max-width: 599px)
  .product-show
    margin: 50px 0 50px 0
    .product-list
      padding 0 15px
      flex-wrap wrap
      .list-item
        width: 100%
        margin-bottom 15px
        .img-wrapper
          width: auto

@media (min-width: 600px) and (max-width: 980px)
  .product-show
    .product-list
      overflow: hidden;
      .list-item
        width: 30%;
        .img-wrapper
          width: auto;
</style>
