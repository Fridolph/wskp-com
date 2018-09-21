<template>
  <PageContainer cname="page-learn-detail">
    <PageHeader />
    <div class="page-content">
      <div class="article-wrapper">
        <div class="title">{{article.title}}</div>
        <div class="date">{{article.date}}</div>
        <div class="content" v-html="article.content"></div>
      </div>
    </div>
    <PageFooter />
    <PageTools />
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer'
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'
import PageTools from '../../components/PageTools'

export default {
  components: {
    PageContainer,
    PageHeader,
    PageFooter,
    PageTools
  },
  data() {
    return {
      article: {
        title: ''
      }
    }
  },
  mounted() {
    console.log(this.$route.params)
    let params = this.$route.params
    this.article = params
  }
}
</script>

<style lang="stylus">
.article-wrapper
  max-width 800px
  margin 60px auto 100px
  .title
    text-align center
    font-size 24px
    font-weight bold
    margin-bottom 10px
  .date
    text-align center
  .img-wrapper
    text-align center
    margin 30px auto
    img
      max-width 100%
  .content
    line-height 1.7
    font-size 14px
    p
      margin-bottom 10px
      text-indent 2em
</style>
