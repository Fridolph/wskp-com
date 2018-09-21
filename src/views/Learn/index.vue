<template>
  <PageContainer cname="page-learn">
    <PageHeader />
    <div class="page-content">
      <Swiper />
      <MArticle />
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
import Swiper from '@/components/Swiper'
import MArticle from './MArticle'

export default {
  components: {
    PageContainer,
    PageHeader,
    PageFooter,
    PageTools,
    Swiper,
    MArticle
  }
}
</script>
