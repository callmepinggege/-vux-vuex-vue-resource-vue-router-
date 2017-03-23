<style  scoped>
.info_tab_2{ text-align:center; background-color:#fff; padding-top:10px; margin-left:-1px; margin-bottom:1px; top: 2.5rem; position: fixed;width: 100%}
.info_tab_2 .weui-col-33{ text-align:center; font-size:16px; background:url(../assets/img/cutLine_1.png) left 3px no-repeat; padding-bottom:8px;}
.weui-col-33{ width: 33%;}
.weui-col-33 a{ color: #222}
.subMenu_box_1{ clear:both; overflow:hidden;}
.subMenu_box_1 ul{ overflow:hidden; padding:0px 15px; padding-bottom:5px; }
.subMenu_box_1 li{ overflow:hidden; margin-top:5px; }
.content_txt_1{ margin-top:0px; clear:both; overflow:hidden; padding:15px; background-color:#fff; line-height:18px; color:#5f6364; border-bottom:1px solid #e0e0e0; }
.content_txt_1 h3{ display:block; overflow:hidden; font-weight:100; font-size:16px; line-height:20px; color:#222222;  }
.content_txt_1 p{ display:block; overflow:hidden; font-size:14px; margin-top:5px; }
.content_txt_1 strong{ display:block; overflow:hidden; font-size:22px; line-height:22px; color:#dd2727; margin-top:5px; }
.list_cell_9{ float:left;}
.list_cell_9 img{ width:120px; }
.list_cell_10 p{ line-height:20px; height:60px; overflow:hidden; color: #666}
.goods { margin-top:5rem }
</style>
<template>
	<div>
	   <x-header style="background-color:#f7fcf6;border-bottom: 1px solid #e2e2e2;position: fixed;top: 0;width: 100%;" :left-options="{backText:'',showBack: true}">产品列表</x-header>
      <div class="weui-row weui-no-gutter info_tab_2">
         <div class="weui-col-33"><a href="javascript:;" target="_self" class="subMenu_btn_1">综合</a></div>
         <div class="weui-col-33" style="position:absolute; top:0.5rem; right:33%">
          <a @click="changesold"  class="subMenu_btn_2">销量</a>
         </div>
         <div class="weui-col-33" style="position:absolute; top:0.5rem; right:0">
          <a  class="subMenu_btn_3" @click="changeprice">价格</a>
         </div>
      </div>
      <div class="goods">
       <div class="subMenu_box_1">
         <div class="subMenu_txt_2" v-show="sold">
          <ul>
              <li @click="oderby('sold','asc')">销量正序排列</li>
              <li @click="oderby('sold','desc')">销量逆序排列</li>
            </ul>
         </div>
         <div class="subMenu_txt_3" v-show="price">
          <ul>
              <li @click="oderby('price ','asc')">价格从低到高</li>
              <li @click="oderby('price ','desc')">价格从高到低</li>
            </ul>
         </div>
      </div>
     
      
         <!--  <scroller use-pullup @on-pullup-loading="loadmoremessage" :pullup-config="config"  v-model="status" lock-x  > -->
          <div>
          <div class="content_txt_1" v-for = "item in goods">
          <a :href="'/index/goods?id='+item.id" target="_self">
              <div class="list_cell_9"><img :src="'http://oidluqi4c.bkt.clouddn.com/'+item.logo" ></div>
              <div class="list_cell_10">
                 <p>{{item.name}}</p>
                 <strong>￥{{item.price}}</strong>
              </div>
          </a>
          </div>
          </div>
          </scroller>
      </div>
     <!--  <loading v-model="load" text="加载中"></loading> -->
    
	</div>
</template>
<script>
 import {XHeader,Checklist,Loading,Scroller} from 'vux'
 import {API,getQuery} from '../services';
  export default {
      data() {
          return {
            value:"",
             status: {
              pullupStatus : 'default'
            },
            sold:false,
            price:false,
            config:{
              content: '上拉刷新',
              pullUpHeight: 60,
              height: 40,
              autoRefresh: true,
              downContent: '释放刷新',
              upContent: '上拉加载',
              loadingContent: '加载中...',
              clsPrefix: 'xs-plugin-pullup-'
            },
            load:true,
            goods:[],
            form:{
              typeId:"",
              orderCondition:"sold",
              orderDirection:"desc",
              offSet:"0",
              pageSize:"5",
              name:"",
              modelNumber:"",
              isIndex:"",
              minSection:0,
              maxSection:100000000,
              price:"",
              shopGroupCode:0
            }
          }
      },
    components: {
      XHeader,
      Checklist,
      Loading,
      Scroller
    },
    mounted : function() {
        document.title="购物车"
        this.form.typeId = getQuery.getQueryString("id")
        if(localStorage.getItem("goodname")){
        this.form.name = localStorage.getItem("goodname")
        }
        API.goods.listGoods(this.form).then(
          (resp)=>{
           this.goods = resp.body.result.datas
           this.load = false
          }
        )
       
    },
    methods:{
      loadmoremessage(){
      this.form.offSet = this.form.offSet+this.form.pageSize
      API.goods.listGoods(this.form).then(
          (resp)=>{
           this.goods = this.goods.concat(resp.body.result.datas)
           this.status.pullupStatus = 'default'
          }
        )
      },
      changesold(){
        this.sold =!this.sold
        if( this.sold==true){
          this.price= false
        } 
      },
      changeprice(){
        this.price =!this.price
         if( this.price==true){
          this.sold= false
        } 
      },
      oderby(orderCondition,orderDirection){
        this.form.orderCondition = orderCondition
        this.form.orderDirection = orderDirection
        API.goods.listGoods(this.form).then(
          (resp)=>{
           this.goods = resp.body.result.datas
          }
        )
      }
    }
  }

</script>