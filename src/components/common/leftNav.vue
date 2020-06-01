<template>
  <div class="left-nav" id="set-blue-bg">
      <ul >
          <li>
              <i class="iconfont icon-zuanshi "></i>
              <div>收银</div>
          </li>
          <li>
              <i class="iconfont icon-jinrudianpu "></i>
              <div>店铺管理</div>
          </li>
          <li>
              <i class="iconfont icon-hanbao "></i>
              <div>商品管理</div>
          </li>
          <li>
              <i class="iconfont icon-fenqigou "></i>
              <div>会员管理</div>
          </li>
          <li>
              <i class="iconfont icon-xiebao "></i>
              <div>统计</div>
          </li>
          <li>
              <i class="iconfont icon-gongnengjianyi "></i>
              <div>设置</div>
          </li>

      </ul>
  </div>
</template>

<script>
    export default {
        mounted:function(){
            var setHeight = document.documentElement.clientHeight;
            // console.log(setHeight)
            document.getElementById('set-blue-bg').style.height = setHeight + 'px'
        }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .left-nav{
        color: aliceblue;
        font-size: 10px;
        height: 100%;
        background-color: #1D8CE0;
        float: left;
        width: 5%;
    }
    .iconfont{
        font-size: 24px;
    }
    .left-nav ul{
        padding: 0px;
        margin: 0px;
    }
    .left-nav li{
        list-style:none;
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        padding: 10px;
    }
</style>




