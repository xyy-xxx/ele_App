<template>
    <!--设置一个根标签   并且只能有一个-->
    <div>
      <ele_header></ele_header>

      <div class="tab">
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
        <router-view :seller="seller"></router-view>
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
  .tab
    .tab-item
      display inline-block
      .router-link-active
        color red
</style>
