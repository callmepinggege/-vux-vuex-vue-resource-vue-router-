<style  scoped>
.line{display:block; clear:both; width:100%; height:2px; background:url(../assets/img/border_img_1.jpg) repeat-x;}
.product_box_1{ overflow:hidden; clear:both; background-color:#fff;}
.product_box_1 li{ overflow:hidden; float:left; margin-right:3px; text-align:center;}
.list_cell_11{ display:block; padding:5px; }
.list_cell_11 img{ width:60px; height:60px; }
.product_box_1 p{ font-size:14px; line-height:18px; }
.product_box_1 .weui_cells{ margin-top:0px;}
.cell_txt_2{ font-size:14px;}
.footer_style_3{ height:54px; overflow:hidden; position:fixed; left:0px; bottom:0px; width:100%; text-align:center; background:url(../assets/img/point_bg_1.png) repeat; line-height:18px; color:#5f6364; border-top:1px solid #e0e0e0; }
.footer_style_3 .btn_style_6{ float:right; width:100%; font-size:16px; }
.footer_style_3 .btn_style_6 a,.footer_style_3 .btn_style_6 a:visited{ display:block; width:100%; padding-top:18px; padding-bottom:18px; background-color:#dd2727; color:#fff; }
.footer_style_3 .btn_style_6 a:hover{ display:block; background-color:#dd2727; color:#fff; }
.footer_style_3 .list_cell_8{ float:right;}
.weui-col-60{ width: 60%; float: left;}
.weui-col-40{ width: 40%; float: left;}
.list_cell_7{ overflow:hidden; font-size:15px; float:left; margin-top:6px; padding-left:15px;}
.list_cell_8{ overflow:hidden; float:left; text-align:left; margin-top:10px; padding-right:8px;}
.list_cell_8 strong{ overflow:hidden; font-size:14px;  }
.list_cell_8 span{ display:block; clear:both; font-size:12px; overflow:hidden;}
</style>
<template>
	<div>
	   <x-header style="background-color:#f7fcf6;border-bottom: 1px solid #e2e2e2;" :left-options="{backText:'',showBack: true}">我的订单</x-header>
     <div class="line"></div>
      <group>
      <cell style="margin-top:none" :title="address.receiver+' '+address.mobile" value="" :inline-desc='address.province+address.city+address.area+address.address' is-link link="/adress"></cell>
      </group>
      <div class="line"></div>
      <group>
          <div class="product_box_1">
            <div class="weui_cells weui_cells_access">
              <a class="weui_cell">
                <div class="weui_cell_bd weui_cell_primary">
                    <ul>
                        <li v-for="item in form.listMallGoods">
                            <span class="list_cell_11"><img :src="'http://oidluqi4c.bkt.clouddn.com/'+item.logoUrl"></span>
                            <p>&times;{{item.number}}</p>
                        </li>
                    </ul>
                </div>
                <div class="weui_cell_ft">
                </div>
              </a>
            </div>
        </div>
      </group>
      <group title="配送方式">
        <cell title="商家自选物流" is-link></cell>
        <cell title="配送信息：工作双休假日均送货" is-link></cell>
      </group>
      <group title="支付方式">
        <cell title="微信支付" is-link>
          <img slot="icon" style="margin-right:5px;"   src="../assets/img/pay_img_1.png"  width="30">
       </cell>
      </group>
       <div class="weui-row weui-no-gutter footer_style_3">
      <div class="weui-col-60" style="padding:18px 0">合计：{{form.totalPrice}}元</div>
      <div class="weui-col-40">
          <div class="btn_style_6"><a @click="submit">提交订单</a></div>
      </div>
    </div>
	</div>
</template>
<script>
 import {XHeader,Cell,Group,Radio,Toast } from 'vux'
 import {API,getQuery} from '../services';
  export default {
      data() {
          return {
            value:"",
            state:true,
            address:{
               receiver:"未填写",
               mobile:"未填写",
               province:"未填写",
               city:"未填写",
               area:"未填写",
               address:"未填写",
            },
            form:{
              "openid":111,
              "shopGroupCode":"0",
              "shopCode":0,
              "paymentMode":"1",
              "receiptType":"1",
              "hotelGroupCode":"LYQBG",
              "hotelCode":"0",
              "deliveryType":"3",
              "roomNumber":"1802",
              "receiptName":"绿盟众智",
              "memberId":"",
              "original":"1",
              "totalPrice":0,
              "receiver":"",
              "contact":"",
              "province":"",
              "city":"",
              "area":"",
              "address":"",
              "listMallGoods":[{
              "goodsType":"1",     
              "goodsId":"12a7fc56911b42e48dd4fac123559e73",     
              "goodsName":"音响",  
              "logoUrl":"1kdhkasj",
              "number":5, 
              "price":30,
              "stock":20
              },{
              "goodsType":"0",     
              "goodsId":  "c64817b323064a4587ef6e1a9edd30f8",     
              "goodsName":"乐视 TV X3-55",   
              "number":1, 
              "price":2000,
              "logoUrl":"1kdhkssasj",
              "stock":100
               }]
            },
             paymess:{
      			"orderNo":"",
      			"goodsName":"",
      			"totalPrice":"",
      			"receiptName":"绿盟众智",
    		},
        
          }
      },
    components: {
      XHeader,
      Cell ,
      Group,
      Radio,
      Toast
    },
    mounted : function() {
        document.title="我的订单"
        if(localStorage.getItem("goods")){
          this.form.listMallGoods = JSON.parse(localStorage.getItem("goods"))
          for(let i=0;i<this.form.listMallGoods.length;i++){
          	this.form.totalPrice = this.form.totalPrice+parseInt(this.form.listMallGoods[i].number)*parseFloat(this.form.listMallGoods[i].price)
          }
          this.form.totalPrice = parseFloat(this.form.totalPrice).toFixed(2)
          
        }else{
          window.location.href="/car"
        }
        if( localStorage.getItem("login")){
           this.form.memberId = JSON.parse(localStorage.getItem("login")).id
           let receivers = JSON.parse(localStorage.getItem("receivers"))
           if(receivers){
              this.address = receivers
              this.form.receiver = receivers.receiver
              this.form.contact = receivers.mobile
              this.form.province = receivers.province
              this.form.city = receivers.city
              this.form.area = receivers.area
              this.form.address = receivers.address
          }else{
            API.user.memberDefaultAddress({"memberId":this.form.memberId}).then(
            (resp)=>{
           	 
           	 let jslength=0;
			       for(let js2 in resp.body.result){
				        jslength++;
			       }
           	 if(jslength>0){
           	 	this.address = resp.body.result
           	 	this.form.receiver = resp.body.result.receiver
           	 	this.form.contact = resp.body.result.mobile
           	 	this.form.province = resp.body.result.province
           	 	this.form.city = resp.body.result.city
           	 	this.form.area = resp.body.result.area
           	 	this.form.address = resp.body.result.address
           	 	}
           	 	else{
           	 		
           	 	}
           	 
              }
            )
          }
        }
        if(localStorage.getItem("openid")){
          this.form.openid= localStorage.getItem("openid");
        }
    },
    methods :{
      submit(){
        if(this.state){
         if(this.address.receiver=="未填写"){
         	window.location.href="/adress"
         }else{
         API.user.submitOrder(this.form).then(
          (resp)=>{
           this.results = resp.body.result
           this.load = false
           this.paymess.orderNo = resp.body.result.orderNo
           this.paymess.goodsName = resp.body.result.listMallGoods[0].goodsName
           this.paymess.totalPrice = resp.body.result.totalPrice
           this.paymess.receiptName = resp.body.result.receiptName
           localStorage.setItem("paymess", JSON.stringify(this.paymess)); 
           localStorage.removeItem("goods")
            window.location.href="/pay/weixin"
          }
        )
        } 
       }
      },
    }
  }
</script>