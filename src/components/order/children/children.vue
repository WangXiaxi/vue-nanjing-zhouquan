<template>
  <div class="order-children">
    <div class="order-box" v-if="orderData.length >= 0 && firstLoading">
      <div class="order-list">
        <div class="order-item">
          <div class="o-status"></div>
          <div class="o-goods-box"></div>
          <div class="o-btn">
          </div>
        </div>
      </div>
      <LoadScroll :loadType="loadType"></LoadScroll>
    </div>
    <div class="nothing" v-if="orderData.length === 0 && firstLoading">
      <!-- 空的情况 -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LoadScroll from 'base/load-scroll/load-scroll'
export default {
  components: {
    LoadScroll
  },
  data () {
    return {
      queryData: { // 默认查询首页数据
        page: 1 // 参数1
      },
      firstLoading: false, // 进入时页面是否加载完成
      loadType: 1, // 加载更多标签
      orderData: [{}, {}]
    }
  },
  created () {
    // this.loading.open({ // 添加等待
    //   spinnerType: 'snake'
    // })
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
.order-children
  width: 100%
  height: 1000px
</style>
