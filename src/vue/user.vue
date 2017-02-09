<style  scoped>
  .person_box_1{ overflow:hidden; clear:both; position:relative; top:0px; }
.banner_cell_1{ overflow:hidden; clear:both; width:100%; height:auto;}
.banner_cell_1 img{ width:100%; height:150px;}
.txts_wrap_1{ width:100%; position:absolute; top:0px; color:#fff; }
.txts_wrap_1 .photo_box_1{ overflow:hidden; float:left; margin-top:30px; margin-left:15px;}
.txts_wrap_1 .photo_cell_1{ width:80px; height:80px; overflow:hidden; float:left;; -moz-border-radius:1000px;-webkit-border-radius:1000px;  border-radius:1000px;border:2px solid #f75547; }
.txts_wrap_1 .photo_cell_1 img{ width:100%; height:auto; margin:0px auto; }
.txts_wrap_1 .txts_box_1{ overflow:hidden; float:left; margin:18px 0px 0px 10px;}
.txts_wrap_1 .txts_box_1 h2{ font-size:17px; font-weight:100; color:#ffffff;}
.txts_wrap_1 .txts_box_1 p{ font-size:14px; color:#ffffff;}
.txts_wrap_1 .txt_cell_4{ overflow:hidden; float:right; margin-top:10px; margin-right:15px;}
.a_style_1{ color: #fff}
.info_tab_2{ text-align:center; background-color:#fff; padding-top:10px; margin-left:-1px; margin-bottom:1px;}
.info_tab_2 .weui-col-33{ text-align:center; font-size:16px; background:url(../assets/img/cutLine_1.png) left 3px no-repeat; padding-bottom:8px;}
.info_tab_2 .weui-col-50{ text-align:center; font-size:16px; background:url(../assets/img/cutLine_1.png) left 3px no-repeat; padding-bottom:8px;}
.weui-col-33{ width: 30%; }
.weui-col-50{width: 47%;}
.weui-col-50 a{ color: #222}
</style>

</style>
<template>
	<div>
    <x-header style="background-color:#f7fcf6;" :right-options="{showMore: true}" @on-click-more="showMenus = true" :left-options="{backText:'',showBack: true}">我的</x-header>
    <div class="person_box_1">
      <div class="banner_cell_1"><img src="../assets/img/bg_img_1.jpg" ></div>
        <div class="txts_wrap_1">
            <a href="/login">
            <div class="photo_box_1">
                <div class="photo_cell_1"><img src="../assets/img/photo_1.jpg" ></div>
                <div class="txts_box_1">
                  <h2>{{name}}</h2>
                    <p><a @click="loginot" class="a_style_1">退出登录</a></p>
                </div>
            </div>
            </a>
            <div class="txt_cell_4">设置</div>
        </div>
    </div>
    <div class="weui-row weui-no-gutter info_tab_2" style="position:relative">
       <div class="weui-col-50"><a href="/order_list" target="_self">待收货(16)</a></div>
       <div class="weui-col-50" style="position:absolute; right:0; top:0.5rem"><a href="/order_list" target="_self">待付款(2)</a></div>
    </div>
    <group style="margin-top:1.2rem">
      <cell  title="优惠券" is-link>
         <img slot="icon" width="30" style="display:block;margin-right:5px;" src="../assets/img/youhui.png">
      </cell>
      <cell  title="我的关注" is-link>
         <img slot="icon" width="25" style="display:block;margin-right:5px;" src="../assets/img/care.png">
      </cell>
       <cell  title="收货地址管理" is-link link="/adress">
         <img slot="icon" width="30" style="display:block;margin-right:5px;" src="../assets/img/adress.png">
      </cell>
    </group>
    <group style="margin-top:1.2rem;">
      <cell  title="帮助" is-link>
         <img slot="icon" width="30" style="display:block;margin-right:5px;" src="../assets/img/help.png">
      </cell>
    </group>
     <tabbar>
      <tabbar-item link="/index?id=1">
        <img slot="icon" src="../assets/img/footer_nav_1.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/sort">
        <img slot="icon" src="../assets/img/footer_nav_2.png">
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item link="/car">
        <img slot="icon" src="../assets/img/footer_nav_3.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/user">
        <img slot="icon" src="../assets/img/footer_nav_4.png">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
	</div>
</template>
<script>
import {XHeader,Tabbar,TabbarItem,Cell,Group } from 'vux'
  export default {
      data() {
          return {
            name:"未登录",
            results:[],
            commonList: [ '' ],
          }
      },
    components: {
      XHeader,
      Tabbar, 
      TabbarItem,
      Cell,
      Group
    },
    mounted : function() {
        document.title="用户中心"
          if( localStorage.getItem("login")){
          this.name= JSON.parse(localStorage.getItem("login")).username
        }
    },
    methods :{
      loginot(){
        localStorage.removeItem("login")
        window.location.href="/login"
      },
    }
  }
</script>