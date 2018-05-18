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
      </div>
      <div class="meeting-nav">
        
      </div>
      <div class="">
        
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
  methods: {
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.meeting
  background: #f5f5f5
  width: 100%
  padding-top: 42px
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
</style>
