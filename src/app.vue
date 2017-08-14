<template>
    <!--设置一个根标签   并且只能有一个-->
    <div>
      <ele_header></ele_header>

      <div class="tab border-1px">
        <div class="tab-item">
          <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/ratings">评价</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/seller">商家</router-link>
        </div>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
</template>

<script>
  import header from './components/header/header.vue'
  export default{
    components:{
      'ele_header' : header
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display flex
    height 40px
    line-height 40px
    font-size 14px
    border-1px(rgba(7,17,27,.1))
    .tab-item
      flex 1
      display inline-block
      &>a
        display block
        text-align center
        color rgb(77,85,93)
      .router-link-active
        color rgb(240,20,20)
</style>
