<template>
    <!--设置一个根标签   并且只能有一个-->
    <div>
      <ele_header :seller="seller"></ele_header>

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
  import axios from 'axios'
  import header from './components/header/header.vue'

  const ok = 0   /*ok为0说明接收数据正常*/

  export default{

    data(){
      return{
        seller:{}
      }
    },

    created(){   //异步操作发送ajax请求

      //使用vue-resource发送ajax请求express提供的模拟接口
      this.$http.get('/api/seller')
        .then((response) => {
          const data = response.body
          console.log('vue-resource',data);   // {code: 0, data: seller}
        })

      // 使用axios发送ajax请求mockjs提供的模拟接口
      setTimeout(() => {
        axios.get('api/seller')
          .then((response) => {
            const result = response.data
            console.log('axios',result);       // {code: 0, data: seller}

            if(result.code === ok){        /*ok为0说明接收数据正常*/
              this.seller = result.data
              console.log(this.seller);
              /*this.seller.score = 3.6*/
            }
          })
      },300)

    },

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
