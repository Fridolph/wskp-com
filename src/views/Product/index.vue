<template>
  <PageContainer cname="page-product">
    <PageHeader />
    <div class="page-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
// import MBanner from './MBanner'

export default {
  components: {
    PageContainer,
    PageHeader,
    PageFooter,
    PageTools,
    // MBanner
  },
};
</script>


<style lang="stylus">
.pro-module
  margin-bottom 50px
  .m-title
    font-size 36px
    font-weight 400
    text-align center
    margin 50px auto 80px
    color #777

@media (min-width: 320px) and (max-width: 599px)
  .pro-module
    .m-title
      font-size 24px
</style>
