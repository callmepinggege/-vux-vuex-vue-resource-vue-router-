<style  scoped>
.list_wrap_4{ overflow:hidden; clear:both; margin-top:5px; }
.title_txt_3{ border-bottom:1px solid #e0e0e0; padding:12px 15px;}
.con_wrap_1{ background-color:#fff; padding:15px; min-height:280px; height:auto!important; height:280px; border-bottom:1px solid #e0e0e0;}
.contact_txt_1{ width:100%; overflow:hidden; text-align:center; font-size:17px;}
.contact_txt_2{ width:100%; overflow:hidden; text-align:center; font-size:17px;}
.contact_img_1{ width:80%; height:80%; border:1px solid #e0e0e0; margin:0px auto; margin-top:5px; margin-bottom:15px; }
.contact_img_1 img{ width:100%; height:auto; }
.cell_txt_1{ overflow:hidden; clear:both;}
.list_box_4{ display:block; overflow:hidden;}
.list_box_4 .list_cell_6{ overflow:hidden;}
.list_box_4 .list_cell_6 p{ height:36px; overflow:hidden;color: #333}
.list_box_4 .list_cell_6 span{ display:block; font-size:16px; margin-top:5px;color: #333}
.weui-col-40{ width: 70%; float: left;}
.list_img_1{ display:block; float:left; width:100px; height:100px; overflow:hidden; margin-right:5px;}
.list_img_1 img{ width:100%; height:auto; }
.btn_boxs_5{ overflow:hidden; width:100%; text-align:center; background:url(../assets/img/point_bg_1.png) repeat; line-height:18px; vertical-align:middle; color:#5f6364; border-bottom:1px solid #e0e0e0; }
.btn_boxs_5 p{ display:block; padding-top:14px; padding-bottom:14px;}
.btn_boxs_5 .btn_style_7{ float:right; width:100%; font-size:16px; }
.btn_boxs_5 .btn_style_7 a,.btn_boxs_5 .btn_style_7 a:visited{ display:block; width:40%; padding-top:14px; padding-bottom:14px; background-color:#dd2727; color:#fff;float:left; margin-left:10%; }
.btn_boxs_5 .btn_style_7 a:hover{ display:block; background-color:#dd2727; color:#fff; }
.btn_boxs_5 .btn_style_8{ float:right; width:100%; font-size:16px; }
.btn_boxs_5 .btn_style_8 a,.btn_boxs_5 .btn_style_8 a:visited{ display:block; width:100%; padding-top:14px; padding-bottom:14px; background-color:#f7b137; color:#fff; }
.btn_boxs_5 .btn_style_8 a:hover{ display:block; background-color:#f29900; color:#fff; }
.weui-col-30{ width: 30%; float: left;}
.content_txt_1 strong{ display:block; overflow:hidden; font-size:22px; line-height:22px; color:#dd2727; margin-top:5px; }
.content_txt_1{ margin-top:0px; clear:both; overflow:hidden; padding:15px; background-color:#fff; line-height:18px; color:#5f6364; border-bottom:1px solid #e0e0e0; }
.box{ margin-top: 5px;background-color:#fff; }
</style>
<template>
	<div>
	   <x-header style="background-color:#f7fcf6;border-bottom: 1px solid #e2e2e2;" :left-options="{backText:'',showBack: true}">订单列表</x-header>
     <tab>
       <tab-item :selected="demo1 === '未支付'" @on-item-click="show1">未支付</tab-item>
       <tab-item :selected="demo1 === '已取消'"  @on-item-click="show2">已取消</tab-item>
       <tab-item :selected="demo1 === '已完成'"  @on-item-click="show3">已完成</tab-item>
     </tab>
      <div class="list_wrap_4" v-show="show_1">
          <div v-for="(item, index) in nopay" class="box">
          <div class="weui-row weui-no-gutter title_txt_3">
             <div >订单 号：{{item.orderNo}}</div>
             <div >创建时间：{{item.createDatetime}}</div>
          </div>
      
          <!--======= content_txt_1 =======-->
          <div class="content_txt_1" v-for="goods in item.listMallOrderItem">
              <a :href="'/index/goods?id='+goods.goodsId" target="_self" class="list_box_4">
                  <div class="list_img_1"><img :src="'http://oidluqi4c.bkt.clouddn.com/'+goods.goodsLogo"></div>
                  <div class="list_cell_6">
                     <p>{{goods.goodsName}}</p>
                     <strong>￥{{goods.price}}</strong>
                     <span>&#10005 {{goods.number}}</span>
                  </div>
              </a>
             
          </div>
          <!--======= /content_txt_1 =======-->
          <!--======= btn_boxs_5 =======-->
          <div class="weui-row weui-no-gutter btn_boxs_5">
            <div class="weui-col-30"><p>共{{sum1[index]}}件商品</p></div>
            <div class="weui-col-40">
                <div class="btn_style_7"><a @click="payit(item)" style=" background:green">去支付</a><a @click="delet(item.id)">取消订单</a></div>
            </div>
          </div>
          <!--======= /btn_boxs_5 =======-->
          </div>
       </div>
       <div class="list_wrap_4" v-show="show_2">
          <div v-for="(item, index) in cansel" class="box">
          <div class="weui-row weui-no-gutter title_txt_3">
             <div >订单 号：{{item.orderNo}}</div>
             <div >创建时间：{{item.createDatetime}}</div>
          </div>
      
          <!--======= content_txt_1 =======-->
          <div class="content_txt_1" v-for="goods in item.listMallOrderItem">
              <a :href="'/index/goods.html?id='+item.goodsId" target="_self" class="list_box_4">
                  <div class="list_img_1"><img :src="'http://oidluqi4c.bkt.clouddn.com/'+goods.goodsLogo"></div>
                  <div class="list_cell_6">
                     <p>{{goods.goodsName}}</p>
                     <strong>￥{{goods.price}}</strong>
                     <span>&#10005 {{goods.number}}</span>
                  </div>
              </a>
             
          </div>
          <!--======= /content_txt_1 =======-->
          <!--======= btn_boxs_5 =======-->
          <div class="weui-row weui-no-gutter btn_boxs_5">
            <div class="weui-col-30"><p>共{{sum2[index]}}件商品</p></div>
            <div class="weui-col-40" style="width:60%;">
                <p style="text-align:right;">已取消</p>
            </div>
          </div>
          </div>
          <!--======= /btn_boxs_5 =======-->
      </div>
       <div class="list_wrap_4" v-show="show_3">
          <div  v-for="(item, index) in finish" class="box">
          <div class="weui-row weui-no-gutter title_txt_3">
             <div >订单 号：{{item.orderNo}}</div>
             <div >创建时间：{{item.createDatetime}}</div>
          </div>
      
          <!--======= content_txt_1 =======-->
          <div class="content_txt_1" v-for="goods in item.listMallOrderItem">
              <a :href="'/index/goods.html?id='+item.goodsId" target="_self" class="list_box_4">
                  <div class="list_img_1"><img :src="'http://oidluqi4c.bkt.clouddn.com/'+goods.goodsLogo"></div>
                  <div class="list_cell_6">
                     <p>{{goods.goodsName}}</p>
                     <strong>￥{{goods.price}}</strong>
                     <span>&#10005 {{goods.number}}</span>
                  </div>
              </a>
             
          </div>
          <!--======= /content_txt_1 =======-->
          <!--======= btn_boxs_5 =======-->
          <div class="weui-row weui-no-gutter btn_boxs_5">
            <div class="weui-col-30"><p>共{{sum3[index]}}件商品</p></div>
             <div class="weui-col-40" style="width:60%;">
                <p style="text-align:right;">已完成</p>
            </div>
          </div>
        </div>
          <!--======= /btn_boxs_5 =======-->
      </div>
	</div>
</template>
<script>
  import {XHeader,Tab, TabItem} from 'vux'
  import {API,getQuery} from '../services';
  export default {
      data() {
          return {
          	sum1:[],
          	sum2:[],
          	sum3:[],
            show_1:true,
            show_2:false,
            show_3:false,
            value:"",
            orders:[],
            nopay:[],
            cansel:[],
            finish:[],
            commonList: [ '' ],
            demo1: '未支付',
            form:{
              memberId:"",
              offSet:0,
              pageSize:5,
              equipment:"original",
              orderCondition:"createDatetime",
              orderDirection:"desc"
              },
            paymess:{
      		  "orderNo":"",
      		  "goodsName":"",
      		  "totalPrice":"",
      		  "receiptName":"",
             }
          }
      },
    components: {
      XHeader,
      Tab,
      TabItem
    },
    computed: {
    
    },
    mounted : function() {
        document.title="我的订单"
        if( localStorage.getItem("login")){
          this.form.memberId = JSON.parse(localStorage.getItem("login")).id
        }else{
          localStorage.setItem("jump", "order_list");
          window.location.href="/login" 
        }
        let that = this
        API.user.order(that.form).then(
          (resp) => {
           that.orders= resp.body.result.datas
           for(let i=0;i<that.orders.length;i++){
              if(that.orders[i].orderStatus=="1"){
                that.orders[i].orderStatus="未支付" 
                that.nopay.push(that.orders[i])
              }
              else if(that.orders[i].orderStatus=="2"){
                that.orders[i].orderStatus="已取消" 
                that.cansel.push(that.orders[i])
              }
              else{
                that.orders[i].orderStatus="已完成 " 
                that.finish.push(that.orders[i])
              }
           }
           for(let i=0;i<that.nopay.length;i++){
           		this.sum1[i]=0
           		for(let j=0;j<that.nopay[i].listMallOrderItem.length;j++){
           			this.sum1[i]=this.sum1[i]+that.nopay[i].listMallOrderItem[j].number
           		}
           }
           for(let i=0;i<that.cansel.length;i++){
           		this.sum2[i]=0
           		for(let j=0;j<that.cansel[i].listMallOrderItem.length;j++){
           			this.sum2[i]=this.sum2[i]+that.cansel[i].listMallOrderItem[j].number
           		}
           }
           for(let i=0;i<that.finish.length;i++){
           		this.sum3[i]=0
           		for(let j=0;j<that.finish[i].listMallOrderItem.length;j++){
           			this.sum3[i]=this.sum3[i]+that.finish[i].listMallOrderItem[j].number
           		}
           }
          }
        )
        if(getQuery.getQueryString("state")=="yiwancheng"){
          this.show_1=false
          this.show_2=false
          this.show_3=true
          this.demo1="已完成"
        }
    },
    methods :{
     show1(){
      this.show_1=true
      this.show_2=false
      this.show_3=false
     },
      show2(){
      this.show_1=false
      this.show_2=true
      this.show_3=false
     },
      show3(){
      this.show_1=false
      this.show_2=false
      this.show_3=true
     },
     delet(id){
     	  API.user.cancelorder({"id":id}).then(
          (resp) => {
            if(resp.body.errmsg){
              location.reload()
            }
          }
        )
     },
      payit(item){
         this.paymess.orderNo = item.orderNo
         this.paymess.goodsName = item.listMallOrderItem[0].goodsName
         this.paymess.totalPrice = item.totalPrice
         this.paymess.receiptName = item.receiptName
         localStorage.setItem("paymess", JSON.stringify(this.paymess)); 
         window.location.href="/pay/weixin"
     }
    }
  }
</script>