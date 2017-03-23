<template>
<div>
    <x-header style="background-color:#f7fcf6;border-bottom: 1px solid #e2e2e2;" :left-options="{backText:'',showBack: true}">微信支付</x-header>
	<div class="book_pay">
    <div class="row" style="padding:2rem;">
      <div class="col-xs-12">订&nbsp;&nbsp;单&nbsp;&nbsp;号&nbsp;:&nbsp;{{paymess.orderNo}}<span></span></div>
      <div class="col-xs-12">商品名称&nbsp;:&nbsp;{{paymess.goodsName}}<span> </span></div>
      <div class="col-xs-12">订单金额&nbsp;:&nbsp;{{paymess.totalPrice}}元<span></span></div>
      <div class="col-xs-12">收&nbsp;&nbsp;款&nbsp;&nbsp;方&nbsp;:&nbsp;{{paymess.receiptName}}<span> </span></div>
    </div>
    <x-button style="margin-top:1rem" @click.native="paywei">支付</x-button>
    <loading v-model="zhifu" text="正在支付"></loading>
    <toast v-model="toast" type="text">支付失败</toast>
	</div>
</div>
</template>

<script>
 import {XHeader,XButton,Loading,Toast } from 'vux'
 import {API,getQuery} from '../services';
 export default {
   data() {
    return {
      zhifu:false,
      toast:false,
      paymess:{
      "orderNo":"",
      "goodsName":"",
      "totalPrice":"",
      "receiptName":"汪汪绿色农场",
     },
     payweixin:{
        "openid":1234,
        "orderNo":"",
        "payMethod":"wechat",
        "total_fee":"",
        "goodsName":"",
        "tradeType":"JSAPI",
       }
    }
  },
  components: {
    XHeader,
    XButton,
    Loading,
    Toast
  },
  mounted : function(){
     this.paymess = JSON.parse(localStorage.getItem("paymess"))
     if(localStorage.getItem("openid")){
          this.payweixin.openid= localStorage.getItem("openid");
       }
  },
  computed:{
  

  },
  methods: {
    
   goback(){
      window.location.href="javascript:history.go(-1)"
   },
   paywei(){
     let that =this
     this.payweixin.orderNo = this.paymess.orderNo
     this.payweixin.total_fee = this.paymess.totalPrice
     this.payweixin.goodsName = this.paymess.goodsName
     API.user.weixinpay(this.payweixin).then(
      (resp)=>{
        var json=resp.body.result
                /*<![CDATA[*/
        if(json.msgType&&json.msgType==1){
          //Toast(json.errorMsg)
        }
                /*]]>*/
        //参数组装完毕调用微信支付jsapi 
        WeixinJSBridge.invoke('getBrandWCPayRequest',{
               "appId" : json.appId ,
               "timeStamp" : json.timeStamp, 
               "nonceStr" : json.nonceStr, //随机串
               "package" : json.package,
               "signType" : json.signType,  //微信签名方式:
               "paySign" : json.paySign //微信签名
               },function(res){
                WeixinJSBridge.log(res.err_msg);
                console.log(res.err_code +';'+ res.err_desc +';'+ res.err_msg);
                if(res.err_msg == 'get_brand_wcpay_request:ok'){
                that.zhifu = true
                setInterval(function(){
                   API.user.checkOrderStatus({"orderNo":that.payweixin.orderNo}).then(
                    (resp)=>{
                       if(resp.body.result.tradeState="SUCCESS"){
                          this.zhifu = false
                          window.clearInterval()
                          localStorage.removeItem("paymess")
                          window.location.href='../order_list';
                       }else{
                           that.zhifu = true
                       }
                      }
                    )
                  
                },500);
                 
                }else {
                   that.toast = true
                }
        });
       }
      )
   }
  },
  watch:{

  }
}
    
</script>

<style scoped>
 .mint-header{ background: #fff;color: #666}
 .col-xs-12{ padding: 0.5rem 0 ;white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow: hidden;}
 .pay{ width: 80%; display:block; margin:4rem auto; }
</style>





