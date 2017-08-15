<template>
    <!--设置一个根标签   并且只能有一个-->
  <div class="header">
    <div class="header-main">
      <div class="img_logo">
        <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊（回龙观）</span>
        </div>
        <div class="description">
          蜂鸟专送/38分钟送达
        </div>
        <div class="supports">
          <span class="icon decrease" ></span>
          <span class="text">在线支付满88送妹子</span>
        </div>
      </div>
      <div class="five">
        <span>5个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin">
      <span class="bulletin_title"></span>
      <span class="bulletin_content">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" width="100%" height="100%">
    </div>
    <div class="mask">
      <div class="mask-main">
        <div class="mask-content">
          <h1 class="title">粥品香坊 ( 回龙观 )</h1>
          <div class="stars-wrapper">
            <div class="stars stars-48">
              <span class="star on"></span>
              <span class="star on"></span>
              <span class="star on"></span>
              <span class="star half"></span>
              <span class="star off"></span>
            </div>
          </div>
          <div class="info">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="list">
            <li>
              <span class="icon decrease"></span>
              <span class="text">在线支付满28减5,满50减10</span>
            </li>
            <li>
              <span class="icon discount"></span>
              <span class="text">单人精彩赛</span>
            </li>
            <li>
              <span class="icon guarantee"></span>
              <span class="text">清肺雪梨汤8折抢购</span>
            </li>
            <li>
              <span class="icon invoice"></span>
              <span class="text">特价饮品8折抢购</span>
            </li>
            <li>
              <span class="icon special"></span>
              <span class="text">单人特色套餐</span>
            </li>
          </ul>
          <div class="info ">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="content">
            <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
          </div>
        </div>
      </div>
      <div class="mask-footer">
        <span class="icon-close"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{}

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
          .stars
            text-align center
            .star
              display inline-block
              background-repeat no-repeat
              background-size 100% 100%
            &.stars-48
              .star
                width 20px
                height 19px
                margin-right 20px
                &:last-child
                  margin-right 0
                &.on
                  bg-image("../stars/star48_on")
                &.half
                  bg-image("../stars/star48_half")
                &.off
                  bg-image("../stars/star48_off")
            &.stars-36
              .star
                width 15px
                height 15px
                margin-right 15px
                &:last-child
                  margin-right 0
                &.on
                  bg-image("../stars/star36_on")
                &.half
                  bg-image("../stars/star36_half")
                &.off
                  bg-image("../stars/star36_off")
            &.stars-24
              .star
                width 10px
                height 10px
                margin-right 10px
                &:last-child
                  margin-right 0
                &.on
                  bg-image("../stars/star24_on")
                &.half
                  bg-image("../stars/star24_half")
                &.off
                  bg-image("../stars/star24_off")
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
