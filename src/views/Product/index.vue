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
import PageContainer from '@/components/PageContainer'
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'
import PageTools from '../../components/PageTools'
// import MBanner from './MBanner'

export default {
  components: {
    PageContainer,
    PageHeader,
    PageFooter,
    PageTools,
    // MBanner
  }
}
</script>
