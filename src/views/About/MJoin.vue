<template>
  <div class="about-module m-join">
    <div class="join-bg">
      <p>成功源于选择</p>
      <h1>最酷的玩法，网络空间对抗最前线，喜安全的你赶快加入</h1>
    </div>
    <div class="title">
      <span>加入　我们</span>
    </div>
    <div class="zp-list">
      <div class="list-item" v-for="item in zpList" :key="item.id">
        <div class="title">{{item.job}}</div>
        <div class="content scrollbar">
          <div v-if="item.summary" class="summary">{{item.summary}}</div>
          <div v-if="item.require1 && item.require1.length > 0">
            <h5>岗位职责</h5>
            <ol>
              <li v-for="(v, i) in item.require1" :key="i" v-html="v"></li>
            </ol>
          </div>
          <div v-if="item.require2 && item.require2.length > 0">
            <h5>岗位要求：</h5>
            <ol>
              <li v-for="(v, i) in item.require2" :key="i" v-html="v"></li>
            </ol>
          </div>
        </div>
        <div class="more-wrapper">
          <a :href="item.href">查看更多</a>
        </div>
      </div>
      <!-- <div class="list-item">
        <div class="title">高级Java开发工程师</div>
        <div class="content scrollbar">
          <h5>岗位职责</h5>
          <ol>
            <li>负责主体模块代码的编写及相应模块的质量；</li>
            <li>参与产品的需求分析，以及原型实现等；</li>
            <li>负责相关研发信息的记录及整理；</li>
            <li>参与产品的实施与维护；</li>
            <li>配合项目经理或技术经理完成分派的任务。</li>
          </ol>
          <h5>岗位要求：</h5>
          <ol>
            <li>本科及以上学历，计算机或相关专业，不少于2年的J2EE开发经验；</li>
            <li>丰富的系统设计分析能力；有很好的面向对象分析和设计能力，熟悉常用设计模式；</li>
            <li>具有中大型软件系统的研发经验优先，熟悉或精通Linux操作系统者优先；</li>
            <li>熟悉Struts、SpringMVC、iBatis、Spring、JSP、Velocity、Freemarker等架构；同时具备WEB开发的client与server端技术者，如精通javascript、css3、HTML5者优先；</li>
            <li>熟练使用过Oracle数据库，熟悉SQL语言；</li>
            <li>熟悉使用Weblogic，进行开发与调试；</li>
            <li>良好的抽象思维和逻辑思维能力，独立分析问题和解决问题的能力；</li>
            <li>良好的职业道德，工作认真、踏实，责任心强，能承担一定的工作压力，有团队协作及质量意识。</li>
          </ol>
        </div>
        <div class="more-wrapper">
          <a href="">查看更多</a>
        </div>
      </div> -->
    </div>
    <div class="world-bg">
      <div class="text">世 界 很 美 　　而 你 正 好 有 空</div>
      <div class="people"></div>
      <div class="up-gray"></div>
      <div class="down-white"></div>
    </div>
  </div>
</template>

<script>
import zpList from '@/config/jobs'
export default {
  data() {
    return {
      zpList
    }
  }
}
</script>


<style lang="stylus">
body
  &::-webkit-scrollbar
    width 10px
  &::-webkit-scrollbar-track
    background-color rgba(0, 0, 0, 0.08)
    border-radius 2px
  &::-webkit-scrollbar-thumb
    background-color rgba(0, 10, 30, 0.25)
    border-radius 4px
.scrollbar
  &::-webkit-scrollbar
    width 6px
  &::-webkit-scrollbar-track
    background-color rgba(0, 0, 0, 0.07)
    border-radius 4px
  &::-webkit-scrollbar-thumb
    background-color rgba(0, 0, 0, 0.12)
    border-radius 8px
</style>

<style lang="stylus" scoped>
.m-join
  .join-bg
    min-height 120px
    background url('/img/banner/research.jpg') no-repeat left center
    background-size cover
    background-attachment fixed
    text-align center
    color #fff
    padding-top 20px
    p
      font-size 16px
      margin-bottom 10px
      text-shadow 4px 4px 8px rgba(0,0,0,0.3)
    h1
      font-weight 400
      font-size 30px
      text-shadow 4px 4px 8px rgba(0,0,0,0.3)
  .title
    margin-top 60px

  .world-bg
    margin-top 50px
    position relative
    .text
      position absolute
      left 50%
      top 50px
      transform translateX(-50%)
      font-size 20px
      color #666
      text-shadow 2px 2px 4px rgba(0,0,0,0.2)
    .people
      position absolute
      left 50%
      bottom 0
      width 380px
      height 210px
      transform translateX(-50%)
      background url('/img/world.jpg') no-repeat center center
      background-size 360px 200px
    .up-gray
      height 227px
      background-color #e9e9e9
    .down-white
      height 133px
      background-color #fff

  .zp-list
    max-width 1400px
    margin 0 auto
    display flex
    flex-wrap wrap
    .list-item
      width calc(25% - 40px)
      margin 0 20px
      .title
        text-align left
        font-size 15px
        font-weight bold
        background linear-gradient(to right, #4897f6, #c8e0fc)
        line-height 30px
        height 30px
        color #fff
        padding-left 10px
        border-radius 4px 4px 0 0
      .content
        background #f2f3f4
        padding 20px 15px
        height 240px
        overflow hidden
        overflow-y auto
        .summary
          font-size 13px
          margin-bottom 10px
          line-height 1.5
        h5
          margin-bottom 10px
        ol
          font-size 13px
          padding-left 20px
          margin-bottom 10px
          li
            list-style decimal
            margin-bottom 5px
      .more-wrapper
        text-align center
        a
          display block
          background-color #b0d2fb
          font-size 14px
          line-height 30px
          color #fff
          border-radius 0 0 4px 4px
          transition background 0.4s ease-in-out
          &:hover
            background-color #86bcf5
</style>
