<template>
  <div class="swiper-container">
    <swiper :options="swiperOption" ref="homeSwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="/img/banner1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/img/banner2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/img/banner3.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/img/banner4.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/img/banner5.jpg" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        delay: 5000,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        notNextTick: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-container
  width 100%
  overflow hidden
  img
    max-width 100%
</style>

<style lang="stylus">
.swiper-container-horizontal
  .swiper-pagination-bullets
    bottom 20px
.swiper-container
  .swiper-pagination-bullet
    opacity 1
    background rgba(255,255,255,0.3)
    border 1px solid #aaa

  .swiper-pagination-bullet-active
    background rgba(255,255,255,0.8)
  .swiper-pagination-bullet
    width 12px
    height 12px
    margin 8px 10px
</style>
