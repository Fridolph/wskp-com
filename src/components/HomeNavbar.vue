<template>
  <nav class="nav">
    <input
      type="checkbox"
      class="nav__cb"
      id="menu-cb"
    />
    <div class="nav__content">
      <ul class="nav__items">
        <li class="nav__item">
          <router-link to="/home">
            <span class="nav__item-text">
              首页
            </span>
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to="/product">
            <span class="nav__item-text has__menu">
              产品
            </span>
          </router-link>
        </li>
        <li class="nav__item">
          <span class="nav__item-text">
            服务
          </span>
        </li>
        <li class="nav__item">
          <span class="nav__item-text">
            解决方案
          </span>
        </li>
        <li class="nav__item">
          <span class="nav__item-text">
            研究
          </span>
        </li>
        <li class="nav__item">
          <span class="nav__item-text">
            关于
          </span>
        </li>
      </ul>
    </div>
    <label
      class="nav__btn"
      for="menu-cb"
    ></label>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isHover: false,
    };
  },
  methods: {
    showMenu() {
      this.isHover = true;
    },
  },
};
</script>

<style lang="stylus" scoped>
.nav {
  // overflow: hidden;
  position: absolute;
  top 0
  right 0
  height: 90px;
  // background: #fff;
  border-radius: 5px;
  transform: translate3d(-10%, 0, 0);
  // box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
}
.nav__cb {
  z-index: -1000;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  pointer-events: none;
}
.nav__content {
  position: relative;
  width: 90px;
  -webkit-transition: width 1s cubic-bezier(0.49, -0.3, 0.68, 1.23);
  transition: width 1s cubic-bezier(0.49, -0.3, 0.68, 1.23);
}
.nav__cb:checked ~ .nav__content {
  -webkit-transition: width 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
  transition: width 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
  width: 540px;
}
.nav__items {
  position: relative;
  width: 540px;
  height: 100%;
  padding-left: 20px;
  padding-right: 80px;
  list-style-type: none;
  font-size: 0;
  .menu {
    position absolute
    display none
    left 18px
    top 70px
    width 200px
    padding 10px 0
    font-size 12px
    border 1px solid #eee
    background-color #fff
    text-align left
    border-radius 4px
    box-shadow 2px 2px 4px rgba(0,0,0,0.1)
    .menu-item {
      line-height 2
      margin-bottom 5px
      padding 0 10px
      &:last-child {
        margin 0
      }
      &:hover {
        background #fd9b27
        color #fff
      }
    }
  }
}
.nav__item {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  padding 0 20px
  color: #6C7784;
  font-size: 14px;
  line-height: 90px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  -webkit-perspective: 1000px;
          perspective: 1000px;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  cursor: pointer;
  a {
    color #6C7784
  }
}
.nav__item:hover {
  span {
    color: #ffb155;
  }
}
.nav__item-text {
  display: block;
  height: 100%;
  -webkit-transform: rotateY(-70deg);
          transform: rotateY(-70deg);
  opacity: 0;
  -webkit-transition: opacity 0.7s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
  transition: opacity 0.7s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
  transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.7s;
  transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.7s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
}
.nav__cb:checked ~ .nav__content .nav__item-text {
  -webkit-transform: rotateY(0);
          transform: rotateY(0);
  opacity: 1;
  -webkit-transition: opacity 0.2s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
  transition: opacity 0.2s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
  transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.2s;
  transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.2s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
}
.nav__item:nth-child(1) .nav__item-text {
  -webkit-transition-delay: 0.3s;
          transition-delay: 0.3s;
}
.nav__cb:checked ~ .nav__content .nav__item:nth-child(1) .nav__item-text {
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}
.nav__item:nth-child(2) .nav__item-text {
  -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
}
.nav__cb:checked ~ .nav__content .nav__item:nth-child(2) .nav__item-text {
  -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
}
.nav__item:nth-child(3) .nav__item-text {
  -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
}
.nav__cb:checked ~ .nav__content .nav__item:nth-child(3) .nav__item-text {
  -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
}
.nav__item:nth-child(4) .nav__item-text {
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}
.nav__cb:checked ~ .nav__content .nav__item:nth-child(4) .nav__item-text {
  -webkit-transition-delay: 0.3s;
          transition-delay: 0.3s;
}
.nav__btn {
  position: absolute;
  right: 0;
  top: 0;
  width: 90px;
  height: 90px;
  padding: 36px 31px;
  cursor: pointer;
}
.nav__btn:before, .nav__btn:after {
  content: "";
  display: block;
  width: 28px;
  height: 4px;
  border-radius: 2px;
  background: #fd9b27;
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  -webkit-transition: background-color 0.3s, -webkit-transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
  transition: background-color 0.3s, -webkit-transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
  transition: transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3), background-color 0.3s;
  transition: transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3), background-color 0.3s, -webkit-transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
}
.nav__btn:before {
  margin-bottom: 10px;
}
.nav__btn:hover:before, .nav__btn:hover:after {
  background: #ffb155;
}
.nav__cb:checked ~ .nav__btn:before {
  -webkit-transform: translateY(7px) rotate(-225deg);
          transform: translateY(7px) rotate(-225deg);
}
.nav__cb:checked ~ .nav__btn:after {
  -webkit-transform: translateY(-7px) rotate(225deg);
          transform: translateY(-7px) rotate(225deg);
}

@media (min-width: 320px) and (max-width: 599px)
  .nav__cb:checked ~ .nav__content
    width auto
  .nav__items
    width auto
    padding-right 40px
  .nav__item
    width auto
    height 50px
    line-height 50px
  .nav__btn
    width 60px
    height 50px
    line-height 50px
</style>
