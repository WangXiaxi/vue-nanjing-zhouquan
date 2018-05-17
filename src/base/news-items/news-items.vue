<template>
  <a class="news-items">
    <div class="img-box">
      <img src="http://www.51ehang.com/upload/2018/05/11/20180511091519216.jpg">
      <div class="tips-live"></div>
      <div class="tips-bot">
        <div class="le">上海</div>
        <div class="ri">2018-05-19</div>
      </div>
    </div>
    <div class="info-box">
      <h3>2018区块链拥抱未来全球高峰论坛2018区块链拥抱未来全球高峰论坛2018区块链拥抱未来全球高峰论坛</h3>
      <div class="eyes">543443</div>
      <div class="price">¥300起</div>
      <div class="time">2天3时50分</div>
    </div>
  </a>
</template>

<script type="text/ecmascript-6">
import { URL } from '@/api/config'
export default {
  props: {
    newsInfo: {
      type: Object,
      dafault: {}
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
.news-items
  display: block
  padding: 12px
  background: #fff
  display: flex
  .img-box
    width: 157px
    height: 105px
    position: relative
    img
      display: block
      width: 100%
      height: 100%
      background: #f5f5f5
    .tips-live
      position: absolute
      width: 36px
      height: 14px
      background: red
      top: 3px
      left: 3px
    .tips-bot
      position: absolute
      bottom: 0
      background: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.1)))
      color: #fff
      width: 100%
      padding: 3px
      .le
        float: left
      .ri
        float: right
  .info-box
    margin-left: 12px
    flex: 1
    width: 0
    position: relative
    h3
      letter-spacing: 1px
      font-size: 13px
      overflow: hidden
      line-height: 1.5
      padding-top: 2px
      color: #666
      need-wrap()
    .eyes
      position: absolute
      bottom: 27px
      left: 0
      line-height: 1.4
    .price
      color: #de0015
      position: absolute
      bottom: 0
      left: 0
      line-height: 1.4
    .time
      position: absolute
      bottom: 0
      color: #f0303a
      right: 0
      line-height: 1.4
</style>
