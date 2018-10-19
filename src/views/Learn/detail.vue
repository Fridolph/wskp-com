<template>
  <PageContainer cname="page-learn-detail">
    <PageHeader />
    <div class="page-content">
      <div class="article-wrapper">
        <div class="title">{{article.title}}</div>
        <div class="date">{{article.date}}</div>
        <div
          class="content"
          v-html="article.content"
        ></div>
      </div>
    </div>
    <PageFooter />
    <PageTools />
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer';
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';
import PageTools from '../../components/PageTools';

export default {
  components: {
    PageContainer,
    PageHeader,
    PageFooter,
    PageTools,
  },
  data() {
    return {
      article: {
        title: '',
      },
    };
  },
  watch: {
    ['$route'](newVal) {
      // console.log('研究详情 newVal', newVal)
      let params = this.$route.params;
      this.article = params;
    },
  },
  mounted() {
    let params = this.$route.params;
    this.article = params;
  },
};
</script>

<style lang="stylus">
.article-wrapper
  max-width 830px
  margin 60px auto 100px
  padding 0 30px
  .title
    text-align center
    font-size 24px
    font-weight bold
    margin-bottom 15px
  .date
    text-align center
  .img-wrapper
    text-align center
    margin 30px auto
    img
      max-width 100%
  .content
    padding-top 30px
    line-height 1.7
    font-size 15px
    p
      margin-bottom 10px
      text-indent 2em
    ul
      margin 15px

  h3, h4, h5, h6
    margin-bottom 15px
</style>
