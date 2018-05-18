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
            </div>
            <div class="info-box">
              
            </div>
          </div>
        </div>
        <div class="con" v-show="curShowNav === 4">
          <img src="../../../jsonData/tianchong.png">
          <p>随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试随便写写测试测试测试，随便写写测试测试测试随便写写测试测试测试</p>
        </div>
      </div>
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
        <a class="btn">立即报名</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { needMixin } from 'common/js/mixin'
import HeaderPub from 'base/header/header-pub'
export default {
  mixins: [needMixin],
  components: {
    HeaderPub
  },
  data () {
    return {
      curShowNav: 1 // 显示当前是哪个导航 
    }
  },
  methods: {
    changeCurNav (index) {
      this.curShowNav = index
    }
  }
}
</script>
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
      background: url("~common/images/33@3x.png") left center/11px auto no-repeat
    .people-num
      background: url("~common/images/morepeo.png") left center/14px auto no-repeat
    .time
      background: url("~common/images/time.png") left center/14px auto no-repeat
    .location
      background: url("~common/images/locat.png") left center/12px auto no-repeat
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
        .img-box
          width: 60px
          height: 60px
          border-radius: 50px
          background: red
        .info-box
          flex: 1
          margin-left: 12px
          background: red
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
