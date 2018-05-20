<template>
  <div class="order-children">
    <div class="order-item">
      <div class="o-status"></div>
      <div class="o-goods-box"></div>
      <div class="o-btn">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      queryData: { // 默认查询首页数据
        page: 1 // 参数1
      }
    }
  },
  created () {
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
.order-children
  width: 100%
  height: 1000px
</style>
