<style  scoped>
  .vux-header-title{ color: #666}
  .content_txt_1{ margin-top:0px; clear:both; overflow:hidden; padding:15px; background-color:#fff; line-height:18px; color:#5f6364; border-bottom:1px solid #e0e0e0;  position: relative;}
  .content_txt_1 h3{ display:block; overflow:hidden; font-weight:100; font-size:16px; line-height:20px; color:#222222;  }
  .content_txt_1 p{ display:block; overflow:hidden; font-size:14px; margin-top:5px; }
  .content_txt_1 strong{ display:block; overflow:hidden; font-size:22px; line-height:22px; color:#dd2727; margin-top:5px; }
  .list_cell_4{width: 10%; float: left; margin-top: 5rem}
  .list_cell_6{ width: 30%; position: absolute;top: 2rem; right: 5%}
  .weui-col-33{width: 33%; float: left;}
  .num_box_1{ overflow:hidden; margin-top:10px; border:1px solid #e0e0e0; padding-top:5px; padding-bottom:5px; }
  .num_icon_1{ display:block; float:left; font-size:22px; margin-left:15px; }
  .num_icon_2{ display:block; float:right; font-size:22px; margin-right:15px; }
  .list_cell_7{ overflow:hidden; font-size:15px; float:left; margin-top:6px; padding-left:15px;}
  .list_cell_8{ overflow:hidden; float:left; text-align:left; margin-top:1rem; padding-right:8px;}
  .list_cell_8 strong{ overflow:hidden; font-size:14px;  }
  .list_cell_8 span{ display:block; clear:both; font-size:12px; overflow:hidden;}
  .btn_style_3{ overflow:hidden; float:right;}
  .btn_style_3 a,.btn_style_3 a:visited{ display:block; padding:18px 20px; background-color:#dd2727; color:#fff; }
  .btn_style_3 a:hover{ display:block; background-color:#dd2727; color:#fff; }
  .btn_boxs_1{ overflow:hidden; float:right; display:block;}
  .footer_style_1{ position: fixed; bottom: 0; width: 100%; background: #fff}
  .content{ margin-bottom:75px}
  .title_txt_1 h2{ text-align: center;}
  .list_cell_5 img{ width:85%;}

</style>
<template>
	<div>
	   <x-header style="background-color:#f7fcf6;border-bottom: 1px solid #e2e2e2;" :left-options="{backText:'',showBack: true}">购物车</x-header>
     <div class="content">
     <div class="content_txt_1" v-for="(item, index)  in results">
          <div class="weui_cells_checkbox list_cell_4" @click="zongji">
            <label class=" weui_check_label" >
              <div class="weui_cell_hd">
                <input type="checkbox" class="weui_check each" id="checkbox" :goodstype="item.goodstype" :goodsid="item.goodsId"  :goodsname="item.goodsName" :logourl="item.logoUrl" :number="item.number" :price="item.price":stock="item.stock" checked="true">
                <i class="weui_icon_checked"></i>
              </div>
            </label>
          </div>
        
          <a style="width:50%;display: inline-block
          ;" class="list_cell_5"><img :src="'http://oidluqi4c.bkt.clouddn.com/'+item.logoUrl"></a>
          <div class="list_cell_6">
             <p>{{item.goodsName.substring(0,15)}}</p>
             <strong>￥{{item.price}}</strong>
             <div class="weui-row num_box_1">
                <div class="weui-col-33"><span class="num_icon_1"><a @click="supsum(item)">&#45;</a></span></div>
                <div class="weui-col-33"><span class="title_txt_1"><h2>{{item.number}}</h2></span></div>
                <div class="weui-col-33"><span class="num_icon_2"><a @click="addsum(item)">&#43;</a></span></div>
             </div>
          </div>
      </div>
      </div>
      <div class="weui-row weui-no-gutter footer_style_1">
      <div class=" weui_cells_checkbox list_cell_7" style="margin-top:1rem">
        <label class=" weui_check_label"  style="float:left">
          <div class="weui_cell_hd">
            <input  type="checkbox" class="weui_check both" name="checkbox1" id="s15" @click="change()">
            <i class="weui_icon_checked"></i>
          </div>  
        </label>
        <span>全选</span>
      </div>
    
      <div class="btn_boxs_1">
          <div class="list_cell_8">
            <strong>合计：{{money}}元</strong>
            <!--<span>已优惠：50元</span>-->
          </div>
          <div class="btn_style_3"><a @click="submitcar">提交订单</a></div>
      </div>
    </div>
    <toast v-model="show1">请添加商品</toast>
	</div>
</template>
<script>
  import {XHeader,Checklist,Loading,Toast} from 'vux'
  import {API,getQuery} from '../services'
  import jquery from 'jquery';
  export default {
      data() {
          return {
            memberId:"",
            show1:false,
            load:true,
            value:"",
            results:[],
            mount:0,
            money:0,
            goods:[]
          }
      },
    components: {
      XHeader,
      Checklist,
      Loading,
      Toast
    },
    mounted : function() {
      document.title="购物车"
      if( localStorage.getItem("login")){
          this.memberId = JSON.parse(localStorage.getItem("login")).id
        }else{
          localStorage.setItem("jump", "car");
          window.location.href="/login" 
        }
      API.user.listMallCart({"memberId":this.memberId,"shopGroupCode":0}).then(
          (resp)=>{
           this.results = resp.body.result
           this.load = false
           this.mount = getQuery.getJsonLength(resp.body.result)
           for(let i=0;i<getQuery.getJsonLength(this.results);i++){
              this.money = this.money+this.results[i].price*this.results[i].number
              this.results[i].state = true
           }
           //this.money = parseFloat(this.money).toFixed(2)
          }
        )
    },
    methods :{
      supsum(item){
            API.user.updateMallCart({"id":item.id,"updateType":"sub"}).then()
            item.number=item.number-1
            if(item.number<=0){
              item.number =1
            }else{
              this.money  = parseFloat(this.money) - item.price
              this.money = parseFloat(this.money).toFixed(2)
            }
            
      },
      addsum(item){
            API.user.updateMallCart({"id":item.id,"updateType":"add"}).then()
           item.number=item.number+1
           this.money  = parseFloat(this.money) + item.price
           this.money = parseFloat(this.money).toFixed(2)
          
      },
     change(){
      if(jquery(".both").prop('checked')){
         jquery(".each").prop("checked",true)
         this.money = 0
         for(let i=0;i<this.results.length;i++){
            this.money= this.money+this.results[i].price*this.results[i].number
          }
          this.money = parseFloat(this.money).toFixed(2)
      }
      else{
        jquery(".each").prop("checked",false)
        this.money = 0
      }
     },
      submitcar(){
        let that = this
        that.goods=[]
        jquery(".each").each(function(){
          let good={}
          if(jquery(this).prop('checked')){
            //good.goodsType=jquery(this).attr("goodstype")
            good.goodsId=jquery(this).attr("goodsid")
            good.goodsName=jquery(this).attr("goodsname")
            good.logoUrl=jquery(this).attr("logourl")
            good.number=jquery(this).attr("number")
            good.price=jquery(this).attr("price")
            good.stock=jquery(this).attr("stock")
            that.goods.push(good)
          }
          
        })
        if(that.goods.length>0){
           localStorage.setItem("goods", JSON.stringify(this.goods))
           window.location.href="/order"
        }else{
          this.show1 = true
        }
      },
      zongji(){
         let that = this
         that.money = 0;
         jquery(".each").each(function(){
          if(jquery(this).prop('checked')){
            that.money= that.money+parseInt(jquery(this).attr("number"))*parseFloat(jquery(this).attr("price"))
          }
        })
         that.money = parseFloat(this.money).toFixed(2)
      }
    }
  }
</script>