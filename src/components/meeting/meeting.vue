<template>
  <div class="meeting child-view">
    <div class="meeting-all">
      <header-pub class="red" headerTitle="国际互联网体验峰会">
        <a class="share-tip"></a>
      </header-pub>
      <div class="meeting-banner">
        <div class="tips-live"></div>
        <img src="../../../jsonData/banner.png">
      </div>
      <div class="meeting-info">
        <h2 class="title">2018区块链拥抱未来全球高峰论坛</h2>
        <div class="end-time">距离开始：1天3时50分</div>
        <div class="people-num">报名人数：1230人</div>
        <div class="time">2018-05-26 - 2018-05-26</div>
        <div class="location">上海  张扬北路5658号</div>
        <div class="host">驱动力商学院</div>
        <div class="tips-gohere"></div>
      </div>
      <div class="meeting-nav">
        <div class="item" :class="{on:curShowNav === 1}" @click="changeCurNav(1)"><span>会议介绍</span></div>
        <div class="item" :class="{on:curShowNav === 2}" @click="changeCurNav(2)"><span>会议日程</span></div>
        <div class="item" :class="{on:curShowNav === 3}" @click="changeCurNav(3)"><span>会议嘉宾</span></div>
        <div class="item" :class="{on:curShowNav === 4}" @click="changeCurNav(4)"><span>参会指南</span></div>
      </div>
      <div class="meeting-con">
        <div class="con" v-show="curShowNav === 1">
          <img src="../../../jsonData/tianchong.png">
          <p>随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试，随便写写测试测试测试随便写写测试测试测试</p>
        </div>
        <div class="con" v-show="curShowNav === 2">
          <img src="../../../jsonData/tianchong.png">
          <p>随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试，随便写写测试测试测试随便写写测试测试测试</p>
        </div>
        <div class="con spec" v-show="curShowNav === 3">
          <div class="item">
            <div class="img-box">
              <img src="http://p1.qzone.la/upload/20150102/a3zs6l69.jpg">
            </div>
            <div class="info-box">
              <div class="name">嘉宾：王笑笑</div>
              <div class="des">从事互联网行业多年，精通各种坑爹技术，在互联网行业发展中有居住其中的作用，哈哈哈哈哈哈哈哈哈</div>
            </div>
          </div>
          <div class="item">
            <div class="img-box">
              <img src="http://p1.qzone.la/upload/20150102/a3zs6l69.jpg">
            </div>
            <div class="info-box">
              <div class="name">嘉宾：王笑笑</div>
              <div class="des">从事互联网行业多年，精通各种坑爹技术，在互联网行业发展中有居住其中的作用，哈哈哈哈哈哈哈哈哈</div>
            </div>
          </div>
          <div class="item">
            <div class="img-box">
              <img src="http://p1.qzone.la/upload/20150102/a3zs6l69.jpg">
            </div>
            <div class="info-box">
              <div class="name">嘉宾：王笑笑</div>
              <div class="des">从事互联网行业多年，精通各种坑爹技术，在互联网行业发展中有居住其中的作用，哈哈哈哈哈哈哈哈哈</div>
            </div>
          </div>
        </div>
        <div class="con" v-show="curShowNav === 4">
          <img src="../../../jsonData/tianchong.png">
          <p>随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试，随便写写测试测试测试随便写写测试测试测试</p>
        </div>
      </div>
      <!-- 底部fixed -->
      <div class="meeting-bottom five">
        <div class="ico-box">
          <i class="ico-kf"></i>
          <span>客服</span>
        </div>
        <div class="ico-box">
          <i class="ico-fav"></i>
          <span>收藏</span>
        </div>
        <div class="ico-box">
          <i class="ico-cart">
            <div class="tips-num">
              <span>90+</span>
            </div>
          </i>
          <span>购物车</span>
        </div>
        <a class="btn btn-1">参与围观</a>
        <a class="btn" @click="changeSpecIfShow">立即报名</a>
      </div>
      <!-- 购买规格popup -->
      <mt-popup v-model="popupVisible" position="bottom">
        <goods-spec @emitEvent="buyNow"></goods-spec>
      </mt-popup>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { needMixin } from 'common/js/mixin'
import HeaderPub from 'base/header/header-pub'
import GoodsSpec from 'base/goods-spec/goods-spec'
export default {
  mixins: [needMixin],
  components: {
    HeaderPub,
    GoodsSpec
  },
  data () {
    return {
      curShowNav: 1, // 显示当前是哪个导航
      popupVisible: false // 显示购买规格
    }
  },
  created () {
    this._getAllData() // 所有数据获取 然后赋值给对象，页面填充即可 所有接口都统一封装到api.js中统一管理
  },
  methods: {
    _getAllData () {

    },
    buyNow (query) { // 立即购买操作
      this.loading.open({ // 添加等待
        spinnerType: 'snake'
      })
      console.log(query)
      // 请求后台执行，后台请求成功返回订单id等 简要信息
      // 模拟成功后跳转
      setTimeout(() => {
        this.loading.close()
        this.$router.push({path: '/sure-order', query: {'id': 1}})
      }, 500)
    },
    changeCurNav (index) { // 切换内容
      this.curShowNav = index
    },
    changeSpecIfShow () { // 是否显示购买规格操作
      this.popupVisible = !this.popupVisible
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.meeting
  .v-modal
    background: none
  .mint-popup-bottom
    width: 100%
    height: 350px
    background: #fff
.mint-toast.is-placemiddle // 要比mint-popup大
  z-index: 2002
.mint-popup.mint-popup-bottom
  z-index: 2000 !important
.v-modal
  z-index: 1999 !important
</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
.meeting
  background: #f5f5f5
  width: 100%
  padding-top: 42px
  padding-bottom: 52px
  .share-tip
    display: block
    height: 42px
    width: 42px
    background: url("~common/images/share.png") right 50%/19px 19px no-repeat
  .meeting-banner
    width: 100%
    height: 208px
    position: relative
    overflow: hidden
    img
      width: 100%
      display: block
    .tips-live
      position: absolute
      left: 10px
      top: 10px
      width: 50px
      height: 20px
      background: url("~common/images/live@3x.png") 50% 50%/100% 100% no-repeat
  .meeting-info
    width: 100%
    padding: 8px 12px 12px 12px
    background: #fff
    position: relative
    box-shadow: 0 0 5px 0 #eaeaea
    .tips-gohere
      position: absolute
      width: 90px
      height: 24px
      right: 12px
      bottom: 34px
      background: 50% 50%/100% auto no-repeat
      bg-image("~common/images/gohere")
    .title
      font-size: 18px
      font-weight: 500
      line-height: 26px
      letter-spacing: 1px
    .end-time, .people-num, .time, .location, .host
      letter-spacing: 1px
      margin-top: 12px
      line-height: 16px
      color: #808080
      padding-left: 18px
      font-size: 13px
    .end-time, .people-num
      color: #f53e3f
    .end-time
      margin-top: 10px
      background: url("~common/images/33@3x.png") 1px center/11px auto no-repeat
    .people-num
      background: url("~common/images/morepeo.png") left center/14px auto no-repeat
    .time
      background: url("~common/images/time.png") left center/14px auto no-repeat
    .location
      background: url("~common/images/locat.png") 1px center/12px auto no-repeat
    .host
      background: url("~common/images/mine.png") left center/14px auto no-repeat
  .meeting-nav
    margin-top: 10px
    height: 40px
    background: #fff
    position: relative
    display: flex
    &:after
      line-scale()
    .item
      flex: 1
      width: 25%
      text-align: center
      line-height: 40px
      color: #808080
      position: relative
      letter-spacing: 1px
      span
        font-size: 14px
        display: inline-block
        position: relative
      &.on
        color: #f53e3f
        span
          &:before
            content: ' '
            position: absolute
            background: #f53e3f
            z-index: 2
            height: 2px
            bottom: 1px
            left: 0
            right: 0
  .meeting-con
    width: 100%
    .con
      padding: 10px 12px
      width: 100%
      background: #fff
      min-height: 100px
      img
        width: 100%
      p
        font-size: 14px
        color: #808080
        line-height: 2
      &.spec
        position: relative
        .item
          display: flex
          position: relative
          margin-top: 15px
          padding-bottom: 15px
          &:first-child
            margin-top: 10px
          &:last-child
            &:after
              display: none
          &:after
            line-scale()
        .img-box
          width: 60px
          height: 60px
          img
            width: 100%
            height: 100%
            border-radius: 50px
        .info-box
          flex: 1
          margin-left: 20px
          .name
            font-size: 14px
            line-height: 1.5
          .des
            font-size: 13px
            line-height: 2
            margin-top: 16px
  .meeting-bottom
    position: fixed
    z-index: 10
    bottom: 0
    height: 42px
    width: 100%
    max-width: 750px /*no*/
    background: #fff
    display: flex
    text-align: center
    .ico-box
      flex: 1
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      color: #808080
      span
        font-size: 10px
      i
        display: block
        height: 18px
        width: 100%
        margin-bottom: 5px
        position: relative
        &.ico-kf
          background: url("~common/images/kf.png") 50% 50%/auto 100% no-repeat
        &.ico-fav
          background: url("~common/images/fav.png") 50% 50%/auto 96% no-repeat
        &.ico-cart
          background: url("~common/images/cart.png") 50% 50%/auto 102% no-repeat
      .tips-num
        position: absolute
        height: 10px
        max-width: 16px
        right: 15%
        background: #f53f3f
        top: 0px
        border-radius: 6px
        overflow: hidden
        color: #fff
        span
          font-style: normal
          display: block
          width: 32px
          height: 20px
          font-size: 16px
          line-height: 20px
          transform: scale(0.5)
          transform-origin: 0 0
    .btn
      display: block
      width: 186px
      letter-spacing: 1px
      line-height: 42px
      background: #f53e3f
      color: #fff
      font-size: 16px
    &.five
      .btn
        width: 105px
      .btn-1
        background: #fad34a
</style>
