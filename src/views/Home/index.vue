<template>
  <PageContainer cname="page-home">
    <PageHeader />
    <div class="page-content">
      <Swiper />
      <MProduct />
      <MSafe />
      <MProgram />
      <MDirection />
      <MAbout />
    </div>
    <PageFooter />
    <PageTools />
  </PageContainer>
</template>

<script>
import PageContainer from '../../components/PageContainer';
import PageHeader from '@/components/PageHeader';
import Swiper from '@/components/Swiper';
import MProduct from './MProduct';
import MSafe from './MSafe';
import MProgram from './MProgram';
import MDirection from './MDirection';
import MAbout from './MAbout';
import PageFooter from '../../components/PageFooter';
import PageTools from '../../components/PageTools';

export default {
  components: {
    PageContainer,
    PageHeader,
    Swiper,
    MProduct,
    MSafe,
    MProgram,
    MDirection,
    MAbout,
    PageFooter,
    PageTools,
  },
};
</script>

<style lang="stylus">
.page-content
  flex 1
.home-module
  .title
    font-size: 18px
    font-weight: 550
    text-align: center
    span
      padding-bottom: 5px
      border-bottom: 1px solid #dedede
</style>
