<template>
  <PageContainer cname="page-about">
    <PageHeader />
    <div class="page-content">
      <MBanner />
      <MCompany />
      <MHonor />
      <MPosition />
      <MJoin />
    </div>
    <PageFooter />
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer'
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'
import MBanner from './MBanner'
import MCompany from './MCompany'
import MHonor from './MHonor'
import MPosition from './MPosition'
import MJoin from './MJoin'

export default {
  components: {
    PageContainer,
    PageHeader,
    PageFooter,
    MBanner,
    MCompany,
    MHonor,
    MPosition,
    MJoin
  }
}
</script>

<style lang="stylus">
.about-module
  .title
    font-size 18px
    font-weight 500
    text-align center
    span
      padding-bottom 5px
      border-bottom 1px solid #dedede
</style>
