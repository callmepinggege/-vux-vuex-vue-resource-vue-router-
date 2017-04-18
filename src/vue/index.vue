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
.txt_cell_1 p{ font-size:13px;  line-height:16px; font-weight:100; overflow:hidden; color:#888888; }

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
.course-icons-item img{border-radius:50%; width: 60%}
.tuijianimg{ width: 55%}
</style>
<template>
<div>

   <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value"></search>
   <swiper  auto height="150px" dots-class="custom-bottom" dots-position="center">
      <swiper-item  v-for="(item, index) in demo01_list" >
        <router-link :to="{ path: item.url}"><img :src="item.img" style="width:100%"></router-link>
      </swiper-item>
   </swiper>
   <div class="discount_kinds_wrap">
        <div class="weui-row">
          <div class="weui-col-25" v-for="item in child">
            <router-link :to="{ path: '/list?id='+item.id}" class="course-icons-item">
                <img :src="'http://oidluqi4c.bkt.clouddn.com/'+item.typeIcon"><p class="course-icons-title">{{item.typeName}}</p>
            </router-link>
          </div>
        </div>
    </div>
    <div class="list_wrap_1">
      <h2 class="list_title_1">热门推荐</h2>
        <div class="weui-row weui-no-gutter list_box_1">
            <div class="weui-col-50 list_cell_1" v-for="item in goods">
                <div class="list_innerCell_1">
                    <router-link :to="{ path: '/index/goods?id='+item.id}">
                      <img :src="'http://oidluqi4c.bkt.clouddn.com/'+item.logo" class="tuijianimg">
                    </router-link>
                   <div class="txt_cell_1">
                      <p>{{item.name.substring(0,20)}}</p>
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
                   <a :href="'/index/goods?id='+item.id" class="pro_img_1"><img :src="'http://oidluqi4c.bkt.clouddn.com/'+item.logo"></a>
                </div>
            </div>
        </div>
    </div>
   <img  class="banner" src="../assets/img/banner_1.jpg" alt="">
    <!--======list_wrap_2======-->
   <div class="copyright_box_1">
   </div>
   <tabbar  style="position:fixed">
      <tabbar-item link="/index?id=1">
        <img slot="icon" src="../assets/img/footer_nav_1_active.png">
        <span slot="label" style="color:#dd2727">首页</span>
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
            sort:[],
            load:true,
            value:"",
            goods:[],
            banners:[],
            demo01_list:[],
            father:[],
            child:[],
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
        localStorage.removeItem("goodname")
  			document.title="主页"
        //openid丢失时获取openid
        if(localStorage.getItem("openid")==null){
          if(getQuery.getQueryString("code")==null){
          let fromurl=location.href;
          let url="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx066707bb3a2536a&redirect_uri="+fromurl+"&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect"
            //window.location.href=url
        }else{
           API.user.getopenid({"code":getQuery.getQueryString("code")}).then(
          (resp) => {
              localStorage.setItem("openid",resp.body.result)
          }
        )
        }
      }

      //获取openid
      if(getQuery.getQueryString("openid")){
        localStorage.setItem("openid",getQuery.getQueryString("openid"));
        }

      API.goods.listScrollPic({"shopGroupCode":"0","equipment":"equipment"}).then(
          (resp) => {

           for(let i=0;i<resp.body.result.length;i++){
           	let item={
           		"img":'http://oidluqi4c.bkt.clouddn.com/'+resp.body.result[i].picUrl,
           		"url": '/index/goods?id='+resp.body.result[i].link,
             	" title": ''
           	}
           	this.demo01_list.push(item)
           }
          }
        )
       API.goods.listGoods(this.form).then(
          (resp)=>{
           this.goods = resp.body.result.datas.slice(0,4)
           this.load = false
          }
        )

        API.goods.listGoodsType({"shopGroupCode":0}).then(
          (resp)=>{
           this.sort = resp.body.result
           for(let i=0;i<resp.body.result.length;i++){
            if(resp.body.result[i].parentId!="0"){
              this.child.push(resp.body.result[i])
            }
           }
          }
        )
  	},
    methods :{
     resultClick(item){
         localStorage.setItem("goodname", this.value)
         window.location.href="/list"
      },
      getResult(val){
          this.results = val ? getResult(val) : []
      },
      demo01_onIndexChange (index) {
        this.demo01_index = index
      },
    }
	}
  function getResult (val) {
  let rs = []
  for (let i = 0; i < 1; i++) {
    rs.push({
      title: `${val}`,
      other: i
    })
  }
  return rs
}
</script>