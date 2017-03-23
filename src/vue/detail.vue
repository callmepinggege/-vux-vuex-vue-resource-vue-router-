<style  scoped>
.header_1{ width:100%; height:50px; background-color:#f7fcf6; border-bottom:1px solid #e2e2e2; overflow:hidden; color:#5f6364; }
.title_top_1{ overflow:hidden; text-align:center; margin-top:10px; }
.title_icon_1{ display:block; float:left; margin-left:15px; }
.title_icon_1 img{ width:30px; height:auto; }
.title_txt_1{ overflow:hidden; margin-top:2px;font-size:18px; font-weight:100; color:#222222; text-align:center;padding:0.3rem 0  }
.title_txt_1_active{ font-size:18px; font-weight:100; color:#dd2727; text-align:center; border-bottom:1px solid #dd2727; }
.title_txt_1 a{ color:#222}
.weui-col-20{ width: 20%; float: left;}
.weui-col-30{ width: 30%; float: left;}
.content_txt_1{ margin-top:0px; clear:both; overflow:hidden; background-color:#fff; line-height:18px; color:#5f6364; border-bottom:1px solid #e0e0e0; margin:0.5rem 0 }
.content_txt_1 h3{ display:block; overflow:hidden; font-weight:100; font-size:16px; line-height:20px; color:#222222;  }
.content_txt_1 p{ display:block; overflow:hidden; font-size:14px; }
.content_txt_1 strong{ display:block; overflow:hidden; font-size:22px; line-height:22px; color:#dd2727; margin-top:5px; }
.weui_tabbar_label { text-align:center; color:#222222; font-size:12px; }
.content_txt_2{ margin-top:15px; clear:both; overflow:hidden; padding:15px; background-color:#fff; line-height:18px; color:#5f6364; border-top:1px solid #e0e0e0; border-bottom:1px solid #e0e0e0; }
.content_txt_2 b{ float:left;  font-weight:100; font-size:16px; line-height:18px; color:#222222; padding-right:8px;  }
.content_txt_2 p{ display:block; font-size:14px; margin-top:1px; }
.content_cell_1{ overflow:hidden; margin-top:8px; font-size:14px; float:right; text-align:right;}
.content_cell_1 span{ color:#dd2727; font-size:0.2rem; }
.footer_tab_2{  position:fixed; left:0px; bottom:0px; width:100%; height:70px; z-index:90; }
.footer_style_1{ height:54px; overflow:hidden; position:fixed; left:0px; bottom:0px; width:100%; text-align:center; background:url(../assets/img/point_bg_1.png) repeat; line-height:18px; color:#5f6364; border-top:1px solid #e0e0e0; }
.footer_style_1 .btn_style_1{ color:#fff; font-size:0.8rem; }
.footer_style_1 .btn_style_2{ float:right; color:#fff; font-size:0.8rem; }
.footer_style_1 .btn_style_1 a,.footer_style_1 .btn_style_1 a:visited{ display:block; padding:18px 2px; background-color:#f7b137; color:#fff; }
.footer_style_1 .btn_style_1 a:hover{ display:block; background-color:#f7b137; color:#fff; }
.footer_style_1 .btn_style_2 a,.footer_style_1 .btn_style_2 a:visited{ display:block; padding:18px 2px; background-color:#dd2727; color:#fff; }
.footer_style_1 .btn_style_2 a:hover{ display:block; background-color:#dd2727; color:#fff; }
.btn_style_3{ overflow:hidden; float:right;}
.btn_style_3 a,.btn_style_3 a:visited{ display:block; padding:18px 20px; background-color:#dd2727; color:#fff; }
.btn_style_3 a:hover{ display:block; background-color:#dd2727; color:#fff; }
.footer_style_2{ overflow:hidden; margin-top:8px; text-align:center;}
.footer_style_2 img{ width:22px;}
.footer_style_2 p{ font-size:13px; color:#414141;}
.weui-col-50{ width: 50%; float: left;}
.weui-col-25{ width: 25%; float: left;}
.weui-col-33{ width: 33%; float: left;}
.content_txt_1{ margin-top:0px; clear:both; overflow:hidden; padding:15px; background-color:#fff; line-height:18px; color:#5f6364; border-bottom:1px solid #e0e0e0; }
.content_txt_1 h3{ display:block; overflow:hidden;font-weight:100; font-size:16px; line-height:20px; color:#222222;  }
.content_txt_1 p{ display:block; overflow:hidden; font-size:14px; margin-top:5px; }
.content_txt_1 strong{ display:block; overflow:hidden; font-size:22px; line-height:22px; color:#dd2727; margin-top:5px; }
.list_cell_5{ float:left; width: 40%}
.list_cell_5 img{ width:95%; }
.num_box_1{ overflow:hidden; margin-top:10px; border:1px solid #e0e0e0; padding-top:5px; padding-bottom:5px; }
.num_icon_1{ display:block; float:left; font-size:22px; margin-left:15px; }
.num_icon_2{ display:block; float:right; font-size:22px; margin-right:15px; }
.marginTop_10{ overflow:hidden; margin-top:10px;}
.a_style_6,.a_style_6:visited{ display:inline-block; font-size:17px; background-color:#f7b137; border:1px solid #f7b137; color:#fff; text-align:center; padding-top:7px; padding-bottom:6px; text-decoration:none; -moz-border-radius:3px; /* Gecko browsers */ -webkit-border-radius:3px; /* Webkit browsers */ border-radius:3px;  width: 100%}
.clearBoth{ overflow:hidden; clear:both;}
.show_popup{ text-align: center;padding:1rem 0;}
.show_popup a{float: right; display:inline-block; margin-right: 5% }
.kucun{ float: right; font-size:1rem; color: #222 }
</style>
<template>
	<div>
	   <header class="header_1" :left-options="{backText:'',showBack: true}">
        <div class="weui-row title_top_1">
          <div class="weui-col-20"><span class="title_icon_1"><a onClick="javascript :history.go(-1);"><img src="../assets/img/header_icon_1.png"></a></span></div>
          <div class="weui-col-30"><span :class="clas1" @click="good">商品</span></div>
          <div class="weui-col-30"><span :class="clas2" @click="detals">详情</span></div>
        </div>
    </header>
    <div class="content1" v-show="isdispaly">
     <swiper :list="demo01_list" auto height="260px" dots-class="custom-bottom" dots-position="center"></swiper>
     <div class="bd">
      <div class="content_txt_1">
         <h3>{{results.name}}</h3>
         <strong>￥{{results.price}}<span class="kucun">库存：{{results.stock}}</span></strong>
      </div>
      
      <!-- <div class="content_txt_2">
         <b>已选</b>
         <p>iPhone 7&nbsp;(A1660)&nbsp;128G&nbsp;玫瑰金色&nbsp;</p>
      </div> -->
      
      <div class="content_txt_2" v-show="adresshow">
         <b>送至</b>
         <p>{{adress.city}}&nbsp;>&nbsp;{{adress.area}}&nbsp;>&nbsp;{{adress.address}}</p>
         
      </div> 
    </div>

        <div class="weui-row weui-no-gutter footer_style_1">
      <div class="weui-col-50">
          <div class="weui-row weui-no-gutter footer_style_2">
            <div class="weui-col-33">
              <a target="_self">
                  <img src="../assets/img/footer_nav_11.png" />
                    <p>客服</p>
                </a>
            </div>
            <div class="weui-col-33" @click="addcar">
              <a href="javascript:;" target="_self">
                  <img src="../assets/img/footer_nav_12.png"  v-show="!care"/>
                  <img src="../assets/img/footer_nav_121.png" v-show="care" />
                    <p v-show="!care">关注</p><p style="color:#ff9a14" v-show="care">关注</p>
                </a>
            </div>
            <div class="weui-col-33" style="position:relative">
              <a href="/car" target="_self">
                  <img src="../assets/img/footer_nav_13.png" />
                    <p>购物车<badge :text="amont"></badge></p>
                </a>
            </div>
          </div>
      </div>
      <div class="weui-col-25 btn_style_1"><a href="javascript:;" @click="buyit">加入购物车</a></div>
      <div class="weui-col-25 btn_style_2"><a href="javascript:;" @click="payit" >立即购买</a></div>
      </div>
    </div>
    <div class="content2" v-html="results.describeInfo" v-show="!isdispaly">
    </div>
   
    <popup v-model="show">
       <div class="show_popup">数量选择<a @click="closeit">关闭</a></div>
       <div class="content_txt_1">
                <div class="cell_txt_1">
                    <a target="_self" class="list_cell_5"><img :src="'http://oidluqi4c.bkt.clouddn.com/'+results.logo"></a>
                    <div class="list_cell_6">
                       <p>{{results.name}}</p>
                       <strong>￥{{results.price}} <span class="kucun">库存：{{results.stock}}</span></strong>
                       <div class="weui-row num_box_1">
                          <div class="weui-col-33"><span class="num_icon_1"><a @click="delect">&#45;</a></span></div>
                          <div class="weui-col-33"><span class="title_txt_1"><h2>{{sum}}</h2></span></div>
                          <div class="weui-col-33"><span class="num_icon_2"><a  @click="add">&#43;</a></span></div>
                       </div>
                    </div>
                </div>
                
                <div class="submit_1 clearBoth marginTop_10"><a @click="submitorder" class="a_style_6 a_btn_1">提交</a></div>
            </div>
     </popup>
     <popup v-model="showpay">
       <div class="show_popup">数量选择<a @click="closeit">关闭</a></div>
       <div class="content_txt_1">
                <div class="cell_txt_1">
                    <a target="_self" class="list_cell_5"><img :src="'http://oidluqi4c.bkt.clouddn.com/'+results.logo"></a>
                    <div class="list_cell_6">
                       <p>{{results.name}}</p>
                       <strong>￥{{results.price}} <span class="kucun">库存：{{results.stock}}</span></strong>
                       <div class="weui-row num_box_1">
                          <div class="weui-col-33"><span class="num_icon_1"><a @click="delect">&#45;</a></span></div>
                          <div class="weui-col-33"><span class="title_txt_1"><h2>{{sum}}</h2></span></div>
                          <div class="weui-col-33"><span class="num_icon_2"><a  @click="add">&#43;</a></span></div>
                       </div>
                    </div>
                </div>
                
                <div class="submit_1 clearBoth marginTop_10"><a @click="paygoods" class="a_style_6 a_btn_1">提交订单</a></div>
            </div>
     </popup>
    <loading v-model="load" text="加载中"></loading>
    <!-- <toast v-model="show1">{{message}}</toast> -->
	</div>

</template>
<script>
 import {XHeader,Swiper, SwiperItem,Popup,Loading,Toast,Badge} from 'vux'
 import {API,getQuery} from '../services';
  export default {
      data() {
          return {
            care:true,
            adresshow:true,
            amont:0,
            message:"添加成功",
            showpay:false,
            state:true,
            sum:1,
            show1:false,
            goods:[],
            load:true,
            show:false,
            isdispaly:true,
            value:"",
            clas1:"title_txt_1 title_txt_1_active",
            clas2:"title_txt_1 ",
            results:[],
            adress:[],
            form:{
              goodsId:"",
              hotelGroupCode:0,
              equipment:"original"
            },
            demo01_list:[],
            order:{
              memberId:"",
              goodsId:"",
              shopGroupCode:0,
              shopCode:0,
              number:""
            }
          }
      },
    components: {
      XHeader,
      Swiper, 
      SwiperItem,
      Popup,
      Loading,
      Toast,
      Badge
    },
    mounted : function() {
        localStorage.removeItem("goodname")
        document.title="商品详情"
        this.form.goodsId = getQuery.getQueryString("id")
        API.goods.goodsDetail(this.form).then(
          (resp)=>{
           this.results = resp.body.result
           let piclist = resp.body.result.pictureUrl.split(",")
           for(let i=0;i<piclist.length;i++){
              let item ={
                "img":'http://oidluqi4c.bkt.clouddn.com/'+piclist[i]
              }
              this.demo01_list.push(item)
           }
           this.load = false
          }
        )
        if( localStorage.getItem("login")){
          this.order.memberId = JSON.parse(localStorage.getItem("login")).id
          API.user.memberDefaultAddress({"memberId":this.order.memberId}).then(
          (resp)=>{
            if(resp.body.errmsg="地址为空"){
              this.adresshow=false
            }else{
              this.adress = resp.body.result
            
            }
          } 
          )
          API.user.listMallCart({"memberId":this.order.memberId,"shopGroupCode":0}).then(
              (resp)=>{
              this.amont = getQuery.getJsonLength(resp.body.result)
             }
         )
      
         API.user.checkcare({"memberId":this.order.memberId,"goodsId":getQuery.getQueryString("id")}).then(
          (resp)=>{
           if(resp.body.errcode==0){
              this.care = true
           }
          }
        )
       }else{
        this.adresshow=false
       }
    },
    methods :{
     buyit(){
      this.show= true
     },
     payit(){
      this.showpay= true
     },
     closeit(){
      this.show= false
      this.showpay= false
     },
     good(){
      this.isdispaly = true
      this.clas1 = "title_txt_1 title_txt_1_active"
      this.clas2 = "title_txt_1"
     },
     detals(){
      this.isdispaly = false
      this.clas1 = "title_txt_1"
      this.clas2 = "title_txt_1 title_txt_1_active"
     },
     delect(){
      if(this.sum<=0){
        this.sum=0
      }else{
        this.sum--
      }
     },
     add(){
      if(this.sum>this.results.stock){
        this.sum=this.results.stock
      }else{
        this.sum++
      }
     },
     submitorder(){
      if( localStorage.getItem("login")){
           this.order.number = this.sum
      	   this.order.goodsId = getQuery.getQueryString("id")
      	   if(this.state){
      		API.user.saveMallCart(this.order).then(
          	(resp)=>{
              this.amont=this.amont+this.order.number 
              this.message="添加成功"
            	this.show1 = true
              this.show = false
          	}
          )
        }
        }else{
          let url = "index/goods?id="+getQuery.getQueryString("id")
          localStorage.setItem("jump", url);
          window.location.href="/login" 
      }
     },
     paygoods(){
     	 if( localStorage.getItem("login")){
          this.goods=[]
        	let good={}
        	good.goodsId= this.results.id
        	good.goodsName=this.results.name
        	good.logoUrl=this.results.logo
        	good.number=this.sum
        	good.price=this.results.price
        	good.stock=this.results.stock
        	this.goods.push(good)
            if(this.sum>0){
           		localStorage.setItem("goods", JSON.stringify(this.goods))
           		window.location.href="/order"
            }else{
              this.message="请添加商品"
          		this.show1 = true
        	}
         	}else{
          		let url = "index/goods?id="+getQuery.getQueryString("id")
          		localStorage.setItem("jump", url);
          		window.location.href="/login" 
        	}
     },
     addcar(){
        if( localStorage.getItem("login")){
           this.order.goodsId = getQuery.getQueryString("id")
           if(this.care){
             API.user.removecare(this.order).then(
            (resp)=>{
              this.message="取消成功"
              this.show1=true
              this.care = false
             }
            )
          }else{
            API.user.addcare(this.order).then(
            (resp)=>{
              this.message="关注成功"
              this.show1=true
              this.care = true
            }
           )
          }
         }else{
          let url = "index/goods?id="+getQuery.getQueryString("id")
          localStorage.setItem("jump", url);
          window.location.href="/login" 
      }
     }
    }
  }
</script>