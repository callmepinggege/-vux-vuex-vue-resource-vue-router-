<style  scoped>
.discount_kinds_wrap{ overflow:hidden; background-color:#fff; text-align:center; padding:30px 0px; }
.discount_kinds_wrap img{ width:auto; height:46px; }
.weui-col-25{ width: 25%; float: left;}
.weui-col-25 p{ color: #222}
.list_wrap_1{ overflow:hidden; clear:both; background-color:#fff; margin-top:15px; }
.list_wrap_2{ overflow:hidden; clear:both; background-color:#fff; }
.list_title_1{ font-size:17px; font-weight:100; padding:8px 15px 5px;}

.list_box_1{ overflow:hidden; margin-left:-1px;}
.list_cell_1{ border-left:1px solid #ebebeb; border-top:1px solid #ebebeb;}
.list_innerCell_1{ overflow:hidden; padding:15px; }
.pro_img_0{ display:block; width:55%; float:right;}
.pro_img_0 img{ width:100%; }
.pro_img_1{ overflow:hidden; display:block; float:right;}
.pro_img_1 img{ width:100%; }
.txt_cell_1{ overflow:hidden; float:right; width:45%; }
.txt_cell_1 h3{ font-size:15px; height:22px; overflow:hidden; font-weight:100; color:#222222; }
.txt_cell_1 p{ font-size:13px; height:54px; line-height:16px; font-weight:100; overflow:hidden; color:#888888; }

.list_box_2{ overflow:hidden; margin-left:-1px;}
.list_cell_2{ border-left:1px solid #ebebeb; border-top:1px solid #ebebeb; }
.list_cell_2 img{ width:100%; }

.txt_cell_2 h3{ font-size:15px; height:22px; overflow:hidden; font-weight:100; color:#222222; }
.txt_cell_2 p{ font-size:13px; line-height:16px; height:32px; overflow:hidden; font-weight:100; color:#888888; }
.weui-col-50{ width: 49%; float: left;}
.weui-col-25{ width: 24.4%; float: left;}
.weui-col-33{width: 33%; float: left;}
.banner{ width: 100%}
.banner_1{ clear:both;}
.banner_1 img{ width:100%; height:auto;}
.list_cell_3{ overflow:hidden; border-left:1px solid #ebebeb; border-top:1px solid #ebebeb; }
.list_cell_3 img{ width:100%; }

.copyright_box_1{ text-align:center; color:#888888; padding-top:15px; margin-bottom: 70px; background: #ebebeb}
.copyright_box_1 a,.copyright_box_1 a:visited{ display:block; color:#888888; }
.copyright_box_1 a:hover{ display:block; color:#dd2727; }

</style>
<template>
<div>
   
   <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value"></search>
   <swiper :list="demo01_list" auto height="150px" dots-class="custom-bottom" dots-position="center"></swiper>
   <div class="discount_kinds_wrap">
        <div class="weui-row">
          <div class="weui-col-25">
            <a href="product_detail_1.html" class="course-icons-item">
                <img src="../assets/img/kind_icon_1.png"><p class="course-icons-title">代金券</p>
            </a>
          </div>
          
          <div class="weui-col-25">
            <a href="product_detail_1.html" class="course-icons-item">
                <img src="../assets/img/kind_icon_2.png"><p class="course-icons-title">优惠券</p>
            </a>
          </div>
          
          <div class="weui-col-25">
            <a href="product_detail_1.html" class="course-icons-item">
                <img src="../assets/img/kind_icon_3.png"><p class="course-icons-title">积分兑换</p>
            </a>
          </div>
          
          <div class="weui-col-25">
            <a href="product_detail_1.html" class="course-icons-item">
                <img src="../assets/img/kind_icon_4.png"><p class="course-icons-title">礼品兑换</p>
            </a>
          </div>
        </div>
    </div>
    <div class="list_wrap_1">
      <h2 class="list_title_1">热门推荐</h2>
        <div class="weui-row weui-no-gutter list_box_1">
            <div class="weui-col-50 list_cell_1" v-for="item in goods">
                <div class="list_innerCell_1">
                   <a :href="'/detail?id='+item.id" class="pro_img_0"><img :src="'http://oidluqi4c.bkt.clouddn.com/'+item.logo"></a>
                   <div class="txt_cell_1">
                      <p>{{item.name.substring(0,12)}}</p>
                   </div>
                </div>
            </div>
        </div>
        <div class="weui-row weui-no-gutter list_box_1">
            <div class="weui-col-25 list_cell_2" v-for="item in goods">
              <div class="list_innerCell_1">
                   <div class="txt_cell_2">
                      <p>{{item.name.substring(0,12)}}</p>
                   </div>
                   <a :href="'/detail?id='+item.id" class="pro_img_1"><img :src="'http://oidluqi4c.bkt.clouddn.com/'+item.logo"></a>
                </div>
            </div>
        </div>
    </div> 
   <img  class="banner" src="../assets/img/banner_1.jpg" alt="">
    <!--======list_wrap_2======-->
    <div class="list_wrap_2" style="display:none">
      <h2 class="list_title_1">热门推荐</h2>
        <div class="weui-row weui-no-gutter">
          <div class="weui-col-33 list_cell_3">
             <div class="list_innerCell_1">
                 <div class="txt_cell_2">
                    <a href="product_detail_1.html"><h3>iMac 一体机</h3></a>
                    <p>电脑一体机 中/港行货 i5 双核 8G 1TB</p>
                 </div>
                 <a href="product_detail_1.html" class="pro_img_1"><img src="../assets/img/product_img_9.png"></a>
             </div>
          </div>
          <div class="weui-col-33 list_cell_3">
             <div class="list_innerCell_1">
                 <div class="txt_cell_2">
                    <a href="product_detail_1.html"><h3>iMac 一体机</h3></a>
                    <p>电脑一体机 中/港行货 i5 双核 8G 1TB</p>
                 </div>
                 <a href="product_detail_1.html" class="pro_img_1"><img src="../assets/img/product_img_9.png"></a>
             </div>
          </div>
          <div class="weui-col-33 list_cell_3">
             <div class="list_innerCell_1">
                 <div class="txt_cell_2">
                    <a href="product_detail_1.html"><h3>iMac 一体机</h3></a>
                    <p>电脑一体机 中/港行货 i5 双核 8G 1TB</p>
                 </div>
                 <a href="product_detail_1.html" class="pro_img_1"><img src="../assets/img/product_img_9.png"></a>
             </div>
          </div>
        </div>
        
        <div class="weui-row weui-no-gutter">
          <div class="weui-col-33 list_cell_3">
             <div class="list_innerCell_1">
                 <div class="txt_cell_2">
                    <a href="product_detail_1.html"><h3>iMac 一体机</h3></a>
                    <p>电脑一体机 中/港行货 i5 双核 8G 1TB</p>
                 </div>
                 <a href="product_detail_1.html" class="pro_img_1"><img src="../assets/img/product_img_9.png"></a>
             </div>
          </div>
          <div class="weui-col-33 list_cell_3">
             <div class="list_innerCell_1">
                 <div class="txt_cell_2">
                    <a href="product_detail_1.html"><h3>iMac 一体机</h3></a>
                    <p>电脑一体机 中/港行货 i5 双核 8G 1TB</p>
                 </div>
                 <a href="product_detail_1.html" class="pro_img_1"><img src="../assets/img/product_img_9.png"></a>
             </div>
          </div>
          <div class="weui-col-33 list_cell_3">
             <div class="list_innerCell_1">
                 <div class="txt_cell_2">
                    <a href="product_detail_1.html"><h3>iMac 一体机</h3></a>
                    <p>电脑一体机 中/港行货 i5 双核 8G 1TB</p>
                 </div>
                 <a href="product_detail_1.html" class="pro_img_1"><img src="../assets/img/product_img_9.png"></a>
             </div>
          </div>
        </div>
        
        <div class="weui-row weui-no-gutter">
          <div class="weui-col-33 list_cell_3">
             <div class="list_innerCell_1">
                 <div class="txt_cell_2">
                    <a href="product_detail_1.html"><h3>iMac 一体机</h3></a>
                    <p>电脑一体机 中/港行货 i5 双核 8G 1TB</p>
                 </div>
                 <a href="product_detail_1.html" class="pro_img_1"><img src="../assets/img/product_img_9.png"></a>
             </div>
          </div>
          <div class="weui-col-33 list_cell_3">
             <div class="list_innerCell_1">
                 <div class="txt_cell_2">
                    <a href="product_detail_1.html"><h3>iMac 一体机</h3></a>
                    <p>电脑一体机 中/港行货 i5 双核 8G 1TB</p>
                 </div>
                 <a href="product_detail_1.html" class="pro_img_1"><img src="../assets/img/product_img_9.png"></a>
             </div>
          </div>
          <div class="weui-col-33 list_cell_3">
             <div class="list_innerCell_1">
                 <div class="txt_cell_2">
                    <a href="product_detail_1.html"><h3>iMac 一体机</h3></a>
                    <p>电脑一体机 中/港行货 i5 双核 8G 1TB</p>
                 </div>
                 <a href="product_detail_1.html" class="pro_img_1"><img src="../assets/img/product_img_9.png"></a>
             </div>
          </div>
        </div>
        
    </div>
  <div class="copyright_box_1">
      <p>武汉绿盟众智科技有限公司 版权所有</p>
        <a href="https://m.kuaidi100.com/" target="_blank">快递查询</a>
    </div>   
   <tabbar  style="position:fixed">
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
  import { Swiper, GroupTitle, SwiperItem, XButton, Divider,Search,Tabbar, TabbarItem ,Loading} from 'vux'
  import {API,getQuery} from '../services';
	export default {
    	data() {
          return {
            results:[],
            load:true,
            value:"",
            goods:[],
            demo01_list:[{
              url: 'javascript:',
              img: 'https://static.vux.li/demo/1.jpg',
              title: '送你一朵fua'
             }, {
             url: 'javascript:',
             img: 'https://static.vux.li/demo/2.jpg',
             title: '送你一辆车'
             }, {
            url: 'javascript:',
            img: 'https://static.vux.li/demo/3.jpg',
            title: '送你一次旅行'
            }],
            form:{
              typeId:"",
              orderCondition:"sold",
              orderDirection:"desc",
              offSet:"0",
              pageSize:"5",
              name:"",
              modelNumber:"",
              isIndex:"Y",
              minSection:0,
              maxSection:100000000,
              price:"",
              shopGroupCode:0
            }
          }
  		},
    components: {
     Swiper,
     GroupTitle,
     SwiperItem,
     XButton,
     Divider,
     Search,
     Tabbar,
     TabbarItem ,
     Loading
    },
  	mounted : function() {
  			document.title="主页"
        //openid丢失时获取openid
        if(localStorage.getItem("openid")==null){
          if(getQuery.getQueryString("code")==null){
          let fromurl=location.href;  
          let url="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx52dd63ceb7ad7ff3&redirect_uri=http%3a%2f%2fenetad.vicp.net&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect"
            window.location.href=url

        }
      }
      API.user.getopenid({"code":getQuery.getQueryString("code")}).then(
          (resp) => {
              localStorage.setItem("openid",resp.body.result)
          }
        )
      //获取openid
      if(getQuery.getQueryString("openid")){
        localStorage.setItem("openid",getQuery.getQueryString("openid"));
        }

       API.goods.listGoods(this.form).then(
          (resp)=>{
           this.goods = resp.body.result.datas.slice(0,4)
           this.load = false
          }
        )
  	},
    methods :{
      resultClick(){

      },
      getResult(){

      },
      demo01_onIndexChange (index) {
        this.demo01_index = index
    },
    }
	}
</script>