<template>
  <PageContainer cname="page-service">
    <PageHeader />
    <div class="page-content">
      <MBanner />
      <MIntro />
      <MBBanner />
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
import MBanner from './MBanner'
import MIntro from './MIntro'
import MBBanner from './MBBanner'

export default {
  components: {
    PageContainer,
    PageHeader,
    PageFooter,
    PageTools,
    MBanner,
    MIntro,
    MBBanner
  }
}
</script>
