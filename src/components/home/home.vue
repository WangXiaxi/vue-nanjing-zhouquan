<template>
  <div class="home child-view">
    <div class="box-all">
      <!-- 头先不写 -->
      <div class="home-header">
        <div class="locat">{{curCity}}</div>
        <div class="model-input">
          <div class="search-swiper">
            <swiper :options="swiperOptionSearch" ref="SearchSwiper">
              <swiper-slide v-for="(item, index) in optionSearch" :key="index">
                <a>{{item.title}}</a>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <!-- banner -->
      <div class="home-banner">
        <div class="banner-swiper">
          <swiper :options="swiperOptionBanner" ref="bannerSwiper">
            <swiper-slide v-for="(item, index) in optionBanner" :key="index">
              <a :href="item.url"><img src="http://www.51ehang.com/upload/2018/05/11/20180511091519216.jpg"></a>
            </swiper-slide>
            <div class="home-swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <!-- 滚动标签 -->
      <div class="home-nav">
        <div class="nav-scroll-box">
          <div class="nav-scroll">
            <div class="item on">IT互联网</div>
            <div class="item">医疗医学</div>
            <div class="item">能源化工</div>
            <div class="item">金融财经</div>
            <div class="item">金融财经</div>
          </div>
        </div>
      </div>
      <div class="home-list">
        <news-items></news-items>
        <news-items></news-items>
        <news-items></news-items>
        <news-items></news-items>
        <news-items></news-items>
        <news-items></news-items>
        <LoadScroll :loadType="loadType"></LoadScroll>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { needMixin } from 'common/js/mixin'
import NewsItems from 'base/news-items/news-items'
import LoadScroll from 'base/load-scroll/load-scroll'
export default {
  mixins: [needMixin],
  components: {
    NewsItems,
    LoadScroll
  },
  data () {
    return {
      swiperOptionBanner: {
        loop: true,
        speed: 600,
        pagination: '.home-swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        autoplay: 3000,
        autoHeight: true,
        autoplayDisableOnInteraction: false
      },
      swiperOptionSearch: {
        direction: 'vertical',
        speed: 300,
        spaceBetween: 10,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
      },
      curCity: '全国', // 当前城市
      optionSearch: [{title: '国际互联网峰会'}, {title: 'JavaScript入门到放弃'}, {title: 'php要饭技巧'}],
      optionBanner: [{url: 'www'}, {url: 'www'}], // 轮播数据
      loadType: 1
    }
  },
  created () {

  },
  deactivated () {
    if (this.$refs.bannerSwiper) { // 优化路由跳转轮播定时器bug
      this.$refs.bannerSwiper.swiper.stopAutoplay()
    }
  },
  activated () {
    if (this.$refs.bannerSwiper) { // 优化路由跳转轮播定时器bug
      this.$refs.bannerSwiper.swiper.startAutoplay()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.swiper-container-horizontal
  .home-swiper-pagination
    position: absolute
    z-index: 1
    text-align: center
    bottom: 6px !important
    .swiper-pagination-bullet
      margin: 0 3px
      width: 6px
      height: 6px
      opacity: 1
      background: RGB(204, 204, 204)
      transition: all 0.3s
      &.swiper-pagination-bullet-active
        background: RGB(255, 255, 255)
        width: 12px
        border-radius: 5px
</style>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
.home
  background: #f5f5f5
  width: 100%
  bottom: 50px
  .box-all
    width: 100%
    height: 100%
    position: relative
  .home-header
    position: fixed
    z-index: 100
    height: 44px
    // background: red
    width: 100%
    display: flex
    padding-top: 6px
    .locat
      margin-left: 16px
      font-size: 16px
      color: #fff
      line-height: 30px
      padding-right: 20px
      letter-spacing: 1px
    .model-input
      margin-left: 10px
      width: 232px
      background: rgba(255, 255, 255, .7)
      height: 30px
      border-radius: 30px
      padding-right: 30px
      .search-swiper
        width: 100%
        height: 30px
        overflow: hidden
        position: relative
        .swiper-slide
          height: 30px
          width: 100%
          a
            text-indent: 30px
            display: block
            height: 30px
            width: 100%
            text-align: center
            color: #999
            line-height: 30px
            font-size: 14px
            letter-spacing: 1px
            no-wrap()
  .home-banner
    height: 157px
    width: 100%
    background: #fff
    overflow: hidden
    position: relative
    z-index: 1
    .banner-swiper
      .swiper-slide
        img
          width: 100%
          height: 157px
  .home-nav
    position: relative
    -webkit-overflow-scrolling: touch
    overflow: hidden
    z-index: 0
    height: 48px
    background: #fff
    box-shadow: 0 0 5px 0 #fdf9f9
    .nav-scroll-box
      position: relative
      overflow-x: auto
      overflow-y: hidden
      height: 70px
      .nav-scroll
        display: block
        width: 10000px
        .item
          font-size: 14px
          color: #999
          line-height: 48px
          float: left
          padding: 0 17px
          text-align: center
          position: relative
          letter-spacing: 1px
          &.on
            color: #ef011d
            &:after
              content: ' '
              position: absolute
              height: 2px
              bottom: 0
              left: 19px
              right: 19px
              background: #ef011d
  .home-list
    position: absolute
    -webkit-overflow-scrolling: touch
    top: 211px
    bottom: 0
    background: #fff
    width: 100%
    overflow-x: hidden
    overflow-y: auto
    .news-items
      border-bottom: 1px solid #ededed
      &:last-child
        border-bottom: none
</style>
