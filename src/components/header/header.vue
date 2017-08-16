<template>
    <!--设置一个根标签   并且只能有一个-->
  <div class="header">
    <div class="header-main">
      <div class="img_logo">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="icon" :class="classes[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="five" v-if="seller.supports" @click="MaskShow(true)">
        <span>{{seller.supports.length}}个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin" @click="MaskShow(true)">
      <span class="bulletin_title"></span>
      <span class="bulletin_content">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <transition name="fade">
      <div class="mask" v-show="showMask">
        <div class="mask-main">
          <div class="mask-content">
            <h1 class="title">{{seller.name}}</h1>
            <div class="stars-wrapper">
              <start :score="seller.score" :size="48"></start>
            </div>
            <div class="info">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="list">
              <li v-for="support in seller.supports">
                <span class="icon" :class="classes[support.type]"></span>
                <span class="text">{{support.description}}</span>
              </li>
            </ul>
            <div class="info ">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="content">
              <p>{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="mask-footer">
          <span class="icon-close" @click="MaskShow(false)"></span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  import stars from '../stars/stars.vue'

  export default{

    //v-if="seller.supports"  当seller.supports有值才解析后面的页面  避免解决为空的undefined的情况

    props:{
      seller:Object,
    },

    data(){
      return{
        showMask : false,
        classes:['decrease','discount','guarantee','invoice','special']
      }
    },

    methods:{
      MaskShow(isShow){
        this.showMask = isShow
      }
    },

    components:{
      start:stars
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .header
    position relative
    color rgb(255,255,255)
    background rgba(7,17,27,.5)
    overflow hidden
    font-size 0  /*解决3像素缝隙*/
    .header-main
      margin 24px 12px 18px 24px
      .img_logo
        display inline-block
        vertical-align top
        img
          border-radius 2px
      .content
        display inline-block
        margin-left 20px
        .title
          margin 2px 0 10px 0
          .brand
            display inline-block
            vertical-align top
            width 30px
            height 18px
            background-size 100% 100%
            background-repeat no-repeat
            bg-image(brand)
          .name
            margin-left 6px
            font-size 16px
            font-weight bold
            line-height 18px
        .description
          font-size 12px
          line-height 12px
          font-weight 200
          margin-bottom 12px
        .supports
          margin-bottom 2px
          .icon
            display inline-block
            vertical-align top
            width 12px
            height 12px
            background-size 100% 100%
            background-repeat no-repeat
            &.decrease
              bg-image(decrease_1)
            &.discount
              bg-image(discount_1)
            &.guarantee
              bg-image(guarantee_1)
            &.invoice
              bg-image(invoice_1)
            &.special
              bg-image(special_1)
          .text
            margin-left 6px
            font-size 10px
            line-height 12px
            font-weight 200
      .five
        position absolute
        bottom 45px
        right 15px
        font-size 10px
        color: rgb(255,255,255)
        font-weight 200
        width 48px
        height 24px
        line-height 12px
        background rgba(0,0,0,.2)
        text-align center
        border-radius 10px
        padding 2px
        span
          line-height 24px
    .bulletin
      position relative
      height 28px
      padding 0 30px 0 12px
      font-size 10px
      font-weight 200
      line-height 28px
      background rgba(7,17,27,.2)
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      .bulletin_title
        vertical-align top
        margin-top 8px
        width 22px
        height 12px
        display inline-block
        bg-image(bulletin)
        background-repeat no-repeat
        background-size 100% 100%
      .bulletin_content
        font-size 10px
        text-align center
        line-height 28px
        margin-left:6px
      .icon-keyboard_arrow_right
        position absolute
        right 12px
        bottom 6px
    .background
      position: absolute
      left 0
      top 0
      width 100%
      height 100%
      z-index -1
      filter blur(10px)
    .mask
      position: fixed
      left 0
      top 0
      z-index 99
      width 100%
      height 100%
      background rgba(7,17,27,.8)
      overflow auto
      &.fade-enter-active,&.fade-leave-active
        transition opacity .5s
      &.fade-enter,&.fade-leave-to
        opacity 0
    .mask-main
      min-height 100%
      .mask-content
        padding-top 64px
        font-size 14px
        padding-bottom 64px
        .title
          font-size 16px
          font-weight 700
          text-align center
          color rgb(255,255,255)
          margin-bottom 16px
        .stars-wrapper
          height 24px
          margin 16px 0 28px 0
        .info
          width 80%
          margin 0 auto
          display flex
          .line
            flex 1
            height 1px
            background-color rgba(255,255,255,.2)
            margin-top 8px
          .text
            margin 0 12px
            font-size 16px
            font-weight 700
            color rgb(255,255,255)
        .list
          width 80%
          margin 24px auto 28px
          li
            margin-left 12px
            margin-bottom 12px
            &:last-child
              margin-bottom 0
            .icon
              display inline-block
              margin-right 6px
              width 16px
              height 16px
              background-repeat no-repeat
              background-size 100% 100%
              vertical-align top
              &.decrease
                bg-image(decrease_2)
              &.discount
                bg-image(discount_2)
              &.guarantee
                bg-image(guarantee_2)
              &.invoice
                bg-image(invoice_2)
              &.special
                bg-image(special_2)
            .text
              font-size 12px
              font-weight 200
              line-height 12px
              color rgb(255,255,255)
        .content
          width 80%
          margin 0 auto
          p
            margin-top 24px
            padding-left 12px
            font-size 12px
            font-weight 200
            color rgb(255,255,255)
            line-height 24px
    .mask-footer
      margin-top -64px
      font-size 32px
      color rgba(255,255,255,.5)
      text-align center
</style>
