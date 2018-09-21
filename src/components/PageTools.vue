<template>
  <div class="page-tools">
    <div class="tool-item" v-show="showTop" @click="toTop">
      <span>></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'scroll-top',
    data() {
      return {
        scrollTop: 0,
        time: null,
        dParams: 20,
        scrollState: 0
      }
    },
    computed: {
      showTop() {
        let value = this.scrollTop > 200 ? true : false
        return value
      },
    },
    mounted() {
      window.addEventListener('scroll', this.getScrollTop)
    },
    methods: {
      toTop(e) {
        if(!!this.scrollState){
          return
        }
        this.scrollState = 1
        e.preventDefault()
        let distance = document.documentElement.scrollTop || document.body.scrollTop
        let _this = this
        this.time = setInterval(function(){ _this.gotoTop(_this.scrollTop-_this.dParams) }, 10)
      },

      gotoTop(distance){
        this.dParams += 20
        distance = distance > 0 ? distance : 0
        document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance

        if (this.scrollTop < 10) {
          clearInterval(this.time)
          this.dParams = 20
          this.scrollState = 0
        }
      },

      getScrollTop() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      }
    },

  }
</script>


<style lang="stylus" scoped>
.page-tools
  position fixed
  bottom 100px
  right 50px

  .tool-item
    font-size 20px
    background-color #fff
    color #999
    border 1px solid #dedede
    border-radius 2px
    height 40px
    width 40px
    display flex
    justify-content center
    align-items center
    cursor pointer
    span
      font-weight 400
      display block
      transform translateX(-2px) rotate(-90deg) scale(1, 1.5)

@media (max-width: 800px) {
  .page-tools {
    display none
  }
}
</style>
