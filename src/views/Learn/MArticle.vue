<template>
  <div class="page-module m-article-wrapper">
    <div :class="['art-item', item.img ? 'has-img' : '']" v-for="item in articleList" :key="item.title">
      <div class="title">
        <h4 @click="toDetail(item)">{{item.title}}</h4>
      </div>
      <img v-if="item.img" :src="item.img">
      <span class="date">{{item.date}}</span>
      <div class="desc">{{item.description}}</div>
    </div>
    <!-- 这是有图片的模版 -->
    <!-- <div class="art-item has-img">
      <img src="/img/scorpionone.jpg" alt="wskp">
      <div class="title">2018国家网络安全宣传周：这个九月，和网思科平一起来成都</div>
      <span class="date">2018年9月19日</span>
      <div class="desc">九月，由中央宣传部、中央网信办、教育部、工业和信息化部、公安部、中国人民银行、国家广播电视总局、全国总工会、共青团中央、全国妇联十个部门联合举办的2018年国家网络安全宣传周即将拉开帷幕，以互动体验与宣传教育为一体的原则，聚焦“深入开展网络安全知识技能宣传普及，提高广大人民群众网络安全意识和防护技能”，组织安排成果展示、高端论坛、极客赛事、互动体验等多种形式的宣传活动。其中在成都世纪新城国际会展中心举办的网络安全博览会以“网络安全为人民，网络安全靠人民”为主题，突出关键信息基础设施安全防护，在展示内容和形式上更加强调创新性，互动性，体验性和整体性，是本届网络安全宣传周的重头戏。</div>
    </div> -->
    <!-- <div class="art-item">
      <div class="title">2018国家网络安全宣传周：这个九月，和网思科平一起来成都</div>
      <span class="date">2018年9月19日</span>
      <div class="desc">九月，由中央宣传部、中央网信办、教育部、工业和信息化部、公安部、中国人民银行、国家广播电视总局、全国总工会、共青团中央、全国妇联十个部门联合举办的2018年国家网络安全宣传周即将拉开帷幕，以互动体验与宣传教育为一体的原则，聚焦“深入开展网络安全知识技能宣传普及，提高广大人民群众网络安全意识和防护技能”，组织安排成果展示、高端论坛、极客赛事、互动体验等多种形式的宣传活动。其中在成都世纪新城国际会展中心举办的网络安全博览会以“网络安全为人民，网络安全靠人民”为主题，突出关键信息基础设施安全防护，在展示内容和形式上更加强调创新性，互动性，体验性和整体性，是本届网络安全宣传周的重头戏。</div>
    </div> -->
  </div>
</template>

<script>
import articleList from '@/config/articleList'

export default {
  data() {
    return {
      articleList
    }
  },
  methods: {
    toDetail(item) {
      // console.log('item', item)
      this.$router.push({
        name: 'detail',
        query: {
          id: item.id
        },
        params: {
          title: item.title,
          date: item.date,
          content: item.content
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.m-article-wrapper
  max-width 800px
  padding 0 30px
  margin 50px auto

  .art-item
    position relative
    padding-bottom 40px
    border-bottom 1px solid #dedede
    margin-bottom 40px

    .date
      position absolute
      top 0
      right 0
      font-size 14px


    .title
      font-weight bold
      font-size 18px
      margin-bottom 15px
      h4
        color #333
        cursor pointer
        &:hover
          color #4882fa


    .desc
      font-size 14px
      text-align justify
      line-height 1.7

  .has-img
    padding-right 200px

    img
      position absolute
      right 0
      top 40px
      width 160px
      height 120px
</style>
