<style  scoped>
.classify_wrap_1{ margin-bottom: 70px}
.classify_menu_1{ float:left; overflow:hidden; background-color:#fff; margin-right:15px; border-bottom:1px solid #e0e0e0;  }
.classify_menu_1 li{ font-size:17px; }
.classify_menu_1 a{ display:block; padding:8px 12px; border-top:1px solid #e0e0e0; border-right:1px solid #e0e0e0; }
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
.xuanzhong{background:#ebebeb; color: #dd2727}
</style>
<template>
	<div>
	<search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value"></search>
    <div class="classify_wrap_1">
        <div class="classify_menu_1">
          <ul>
            <li v-for="(item, index) in father" :class="click[index]"><a @click="fenlei(item,index)">{{item.typeName}}</a></li>
              
          </ul>
        </div>
        <div class="list_wrap_3">
          <div class="banner_1"><img src="../assets/img/banner_1.jpg"></div>
            <h2 class="list_title_2">热卖品类</h2>
            <div class="weui-row weui-no-gutter list_box_3" >
              <div class="weui-col-33 list_cell_3" v-for="item in child">
                 <div class="list_innerCell_2">
                     <router-link :to="{ path: '/list?id='+item.id}"  class="pro_img_2">
                        <img :src="'http://oidluqi4c.bkt.clouddn.com/'+item.typeIcon">
                     </router-link>
                    <router-link :to="{ path: '/list?id='+item.id}"  class="txt_cell_3">
                      <h3>{{item.typeName}}</h3>
                    </router-link>
                 </div>
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
        <img slot="icon" src="../assets/img/footer_nav_2_active.png">
        <span slot="label" style="color:#dd2727">分类</span>
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
            sort:[],
            father:[],
            child:[],
            click:[]
          }
      },
    components: {
     Search,
     Tabbar, 
     TabbarItem,
     Loading
    },
    mounted : function() {
        localStorage.removeItem("goodname")
        document.title="分类"
        API.goods.listGoodsType({"shopGroupCode":0}).then(
          (resp)=>{
           this.sort = resp.body.result
           for(let i=0;i<resp.body.result.length;i++){
            if(resp.body.result[i].parentId=="0"){
              this.father.push(resp.body.result[i])
              this.click.push("")
            }
           }
           for(let i=0;i<this.father.length;i++){
            this.father[i].child =[]
            for(let j=0;j<this.sort.length;j++){
              if(this.sort[j].parentId==this.father[i].id){
                this.father[i].child.push(this.sort[j])
              }
            }
           }
           this.load = false
           if(this.father[0].child){
              this.child = this.father[0].child
              this.click[0]="xuanzhong"
           }
           
          }
        )
    },
    methods:{
      fenlei(item,index){
        this.child = item.child
        for(let i=0;i<this.click.length;i++){
          this.click[i]=""
        }
        this.click[index]="xuanzhong"
      },
      resultClick(item){
         localStorage.setItem("goodname", this.value)
         window.location.href="/list"
      },
      getResult(val){
          this.results = val ? getResult(val) : []
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