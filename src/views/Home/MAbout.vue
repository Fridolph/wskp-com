<template>
  <div class="home-module about-us">
    <div class="title">
      <span>关于　我们</span>
    </div>
    <div class="about-list">
      <div class="list-item">
        <div class="sub-title">公司企业文化</div>
        <div class="desc">
          我们坚持做正确的事，我们所做的一切都诚实和正直
        </div>
      </div>
      <div class="list-item">
        <div class="sub-title">公司服务宗旨</div>
        <div class="desc">
          我们秉承更高的道德标准，不侵害用户隐私
        </div>
      </div>
      <div class="list-item">
        <div class="sub-title">公司核心战略</div>
        <div class="desc">
          我们致力于可提升网络价值的安全技术研究，积极成为网络空间战略平衡的主动参与者
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
.about-us
  margin 100px 0 140px
  .about-list
    margin-top 80px
    display flex
    justify-content center
    .list-item
      width 280px
      margin 0 50px
      .sub-title
        margin-bottom 30px
      .desc
        font-size 12px
        line-height 1.7
</style>
