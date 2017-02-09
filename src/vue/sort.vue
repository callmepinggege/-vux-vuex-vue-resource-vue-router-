<style  scoped>
.classify_wrap_1{ margin-bottom: 70px}
.classify_menu_1{ float:left; overflow:hidden; background-color:#fff; margin-right:15px; border-bottom:1px solid #e0e0e0;  }
.classify_menu_1 li{ font-size:17px; }
.classify_menu_1 a{ display:block; color:#222222; padding:8px 12px; border-top:1px solid #e0e0e0; border-right:1px solid #e0e0e0; }
.classify_menu_1 .classify_active{ display:block; color:#dd2727; font-weight:bold; padding:12px 12px; border-top:1px solid #ebebeb; border-right:1px solid #ebebeb; background-color:#ebebeb; }
.list_wrap_3{ overflow:hidden; }
.list_box_3{ overflow:hidden; background-color:#fff;}
.list_title_2{ font-size:17px; font-weight:100; padding:0.5rem 0; }
.list_innerCell_2{ overflow:hidden; padding:10px; }
.pro_img_2{ overflow:hidden; display:block; }
.pro_img_2 img{ width:100%; }
.txt_cell_3{ text-align:center; display:block; height:18px; overflow:hidden; margin-top:5px; }
.txt_cell_3 h3{ text-align:center; display:block; font-size:15px; font-weight:100; color:#222222; }
.banner_1 img{width: 100%}
.weui-col-33{width: 32%; float: left;}
.list_cell_3{ overflow:hidden;}
</style>
<template>
	<div>
	<search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value"></search>
    <div class="classify_wrap_1">
        <div class="classify_menu_1">
          <ul>
              <li><a href="classify.html" class="classify_active">推荐分类</a></li>
                <li><a href="">潮流女装</a></li>
                <li><a href="">品牌男装</a></li>
                <li><a href="">个户化妆</a></li>
                <li><a href="">家用电器</a></li>
                <li><a href="">电脑办公</a></li>
                <li><a href="">手机数码</a></li>
                <li><a href="">母婴童装</a></li>
                <li><a href="">图书音响</a></li>
            </ul>
        </div>
        <div class="list_wrap_3">
          <div class="banner_1"><img src="../assets/img/banner_1.jpg"></div>
            
            <!--<h2 class="list_title_2">热门活动</h2>
            
            <div class="weui-row weui-no-gutter list_box_3">
              <div class="weui-col-33 list_cell_3">
                 <div class="list_innerCell_2">
                     <a href="product_list_1.html" class="pro_img_2"><img src="../assets/img/product_img_9.png"></a>
                     <a href="product_list_1.html" class="txt_cell_3"><h3>手机</h3></a>
                 </div>
              </div>
              <div class="weui-col-33 list_cell_3">
                 <div class="list_innerCell_2">
                     <a href="product_list_1.html" class="pro_img_2"><img src="../assets/img/product_img_9.png"></a>
                     <a href="product_list_1.html" class="txt_cell_3"><h3>笔记本</h3></a>
                 </div>
              </div>
              <div class="weui-col-33 list_cell_3">
                 <div class="list_innerCell_2">
                     <a href="product_list_1.html" class="pro_img_2"><img src="../assets/img/product_img_9.png"></a>
                     <a href="product_list_1.html" class="txt_cell_3"><h3>空调</h3></a>
                 </div>
              </div>
            </div>
            -->

            <h2 class="list_title_2">热卖品类</h2>
            
            <div class="weui-row weui-no-gutter list_box_3" >
              <div class="weui-col-33 list_cell_3" v-for="item in sort">
                 <div class="list_innerCell_2">
                     <a :href="'/list?id='+item.id" class="pro_img_2"><img src="../assets/img/product_img_9.png"></a>
                     <a :href="'/list?id='+item.id"  class="txt_cell_3"><h3>{{item.typeName}}</h3></a>
                 </div>
              </div>
            
        </div>  
   </div>
    
    <tabbar  style="position:fixed">
      <tabbar-item link="/index">
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
    <loading v-model="load" text="加载中"></loading>
	</div>
</template>
<script>
	import {Search,Tabbar, TabbarItem,Loading } from 'vux'
  import {API,getQuery} from '../services';
  export default {
      data() {
          return {
            load:true,
            value:"",
            results:[],
            sort:[]
          }
      },
    components: {
     Search,
     Tabbar, 
     TabbarItem,
     Loading
    },
    mounted : function() {
        document.title="分类"
        API.goods.listGoodsType({"shopGroupCode":0}).then(
          (resp)=>{
           this.sort = resp.body.result
           this.load = false
          }
        )
    },
    methods :{
      resultClick(){

      },
      getResult(){

      },
     
    }
  }
</script>