<template>
    <!--设置一个根标签   并且只能有一个-->
    <div>
      <div class="stars" :class="`stars-${size}`">
        <span class="star" v-for="sc in starsClass" :class="sc"></span>
      </div>
    </div>
</template>

<script>

  const on = 'on';
  const half = 'half';
  const off = 'off';


  export default{
    props:{
      score:Number,
      size:Number
    },

    computed:{
      starsClass(){
        const scs = []
        const score = this.score
        const sInterger = Math.floor(score)

        /*添加on*/
        for(var i=0;i<sInterger;i++){
          scs.push(on)
        }
        /*添加half*/
        if(score-sInterger>=0.5){
          scs.push(half)
        }
        /*添加off*/
        if(scs.length<5){
          scs.push(off)
        }


        return scs
      }
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

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
</style>
