<style  scoped>
.content_txt_1{ margin-top:0px; clear:both; overflow:hidden; padding:15px; background-color:#fff; line-height:18px; color:#5f6364; border-bottom:1px solid #e0e0e0; }
.content_txt_1 h3{ display:block; overflow:hidden;font-weight:100; font-size:16px; line-height:20px; color:#222222;  }
.content_txt_1 p{ display:block; overflow:hidden; font-size:14px; margin-top:5px; }
.content_txt_1 strong{ display:block; overflow:hidden; font-size:22px; line-height:22px; color:#dd2727; margin-top:5px; }
.btn_boxs_5{ overflow:hidden; width:100%; text-align:center; background:url(../assets/img/point_bg_1.png) repeat; line-height:18px; vertical-align:middle; color:#5f6364; border-bottom:1px solid #e0e0e0; }
.btn_boxs_5 p{ display:block; padding-top:14px; padding-bottom:14px;}
.btn_boxs_5 .btn_style_7{ float:right; width:100%; font-size:16px; }
.btn_boxs_5 .btn_style_7 a,.btn_boxs_5 .btn_style_7 a:visited{ display:block; width:100%; padding-top:14px; padding-bottom:14px; background-color:#dd2727; color:#fff; }
.btn_boxs_5 .btn_style_7 a:hover{ display:block; background-color:#dd2727; color:#fff; }
.btn_boxs_5 .btn_style_8{ float:right; width:100%; font-size:16px; }
.btn_boxs_5 .btn_style_8 a,.btn_boxs_5 .btn_style_8 a:visited{ display:block; width:100%; padding-top:14px; padding-bottom:14px; background-color:#f7b137; color:#fff; }
.btn_boxs_5 .btn_style_8 a:hover{ display:block; background-color:#f29900; color:#fff; }
.follow_icon_1 p{ background:url(../assets/img/footer_nav_12.png) 15px 12px no-repeat; background-size:20px; padding-left:17px; }
.list_img_1 img{ float: left; width: 35% }
.weui-col-30{ width: 50%; float: left; }
.list_wrap_1{ margin-top: 1rem }
a{ color: #666 }
</style>
<template>
	<div>
	   <x-header style="background-color:#f7fcf6;border-bottom: 1px solid #e2e2e2;" :left-options="{backText:'',showBack: true}">我的关注</x-header>
     <div>
        <div class="list_wrap_1" v-for="item in results ">
          <div class="content_txt_1">
              <a href="product_detail_1.html" target="_self" class="list_box_4">
                  <div class="list_img_1">
                    <img :src="'http://oidluqi4c.bkt.clouddn.com/'+item.logo">
                  <div class="list_cell_6">
                     <p>{{item.name}}</p>
                     <strong>￥{{item.price}}</strong>
                     <small>情人节期间满200减15</small>
                  </div>
                  </div>
              </a>             
          </div>
          <div class="weui-row weui-no-gutter btn_boxs_5">
            <div class="weui-col-30 follow_icon_1" style="width:40%; padding-right:10%" @click="cancel(item.goodsId)">
              <p>取消关注</p>
            </div>
            <div class="weui-col-30">
                <div class="btn_style_7"><a @click="submitorder(item)" target="_self">加入购物车</a></div>
            </div>
          </div>  
      </div>
     </div>
     <toast v-model="show1">{{message}}</toast>
	</div>
</template>
<script>
  import {XHeader,Loading,Toast} from 'vux'
  import {API,getQuery} from '../services'
  export default {
      data() {
          return {
            message:"",
            show1:false,
            results:[],
            state:true,
            form:{
              memberId:"",
              pageSize:10,
              offSet:0
            }, 
            order:{
                memberId:"",
                goodsId:"",
                shopGroupCode:0,
                shopCode:0,
                number:1
              }
          }
      },
    components: {
      XHeader,
      Loading,
      Toast
    },
    mounted : function() {
      document.title="购物车"
      if( localStorage.getItem("login")){
          this.form.memberId = JSON.parse(localStorage.getItem("login")).id
          this.order.memberId = JSON.parse(localStorage.getItem("login")).id
        }else{
          localStorage.setItem("jump", "care");
          window.location.href="/login" 
        }
      API.user.carelist(this.form).then(
          (resp)=>{
           this.results = resp.body.result.datas
           this.load = false
          }
        )
    },
    methods :{
      cancel(id){
         API.user.removecare({"memberId":this.form.memberId,"goodsId":id}).then(
          (resp)=>{
           if(resp.body.errmsg="操作成功"){
               location.reload()
           }
          }
        )
      },
      submitorder(item){
    
           this.order.goodsId = item.goodsId
           if(this.state){
          API.user.saveMallCart(this.order).then(
            (resp)=>{
              this.message="添加成功"
              this.show1 = true
            }
          )
        }
        
     },
    }
  }
</script>