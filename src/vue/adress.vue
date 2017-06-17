<style  scoped>
 .sure{ width: 15%; margin-left: 15px;vertical-align: text-top; }
 .list{padding-bottom:1rem; position: relative;}
 .moren{ width: 35%;}
 .list_btn{ width: 60%; position: absolute; top: 0; right: 0 }
 .list_btn span{  margin-left: 25% }
</style>
<template>
  <div>
    <x-header style="background-color:#f7fcf6;" :left-options="{backText:'',showBack: true}">收货地址管理</x-header>
    <div v-for="item in results" @click="selectadress(item)">
    <group >
      <cell  style="margin-top:none" :title="item.receiver+' :'+item.mobile" value="" :inline-desc='item.province+item.city+item.area+item.address' is-link>
      </cell>
      <div class="list">
        <div class="moren" v-show="item.isDefault"><img src="../assets/img/sure.png" class="sure">默认地址</div>
        <div class="moren" style="text-align: center;" v-show="!item.isDefault"  v-on:click.stop.prevent="setmoren(item.id)" >设为默认</div>
        <div class="list_btn">
          <span v-on:click.stop.prevent="delet(item)">删除</span>
          <span v-on:click.stop.prevent="edit(item)">编辑</span>
        </div>
      </div>
    </group>
    </div>
    <x-button @click.native="addadress" style="position:fixed;bottom:0">添加新地址</x-button>
  </div>
</template>
<script>
  import {XHeader,Cell, Group,XButton} from 'vux'
  import {API,getQuery} from '../services'
  export default {
      data() {
          return {
           state:true,
           ismoren:true,
           form:{
            "memberId":"",
            "offSet":0,
            "pageSize":5,
            "orderCondition":"createDatetime",
            "orderDirection":"desc"
           },
           results:[],
           edits:{
             id:"",
             memberId:"",
             type:1,
             receiver:"",
             province:"",
             city:"",
             area:"",
             address:"",
             mobile:"",
             isDefault:"",
             alias:"",
             telphone:""
          }
        }
      },
    components: {
     XHeader,
     Cell,
     Group,
     XButton
    },
    mounted : function() {
        //初始化是数据
        document.title="收货地址管理"
        if( localStorage.getItem("login")){
          this.form.memberId = JSON.parse(localStorage.getItem("login")).id
        }else{
          localStorage.setItem("jump", "adress");
          window.location.href="/login" 
        }
         API.user.adresslist(this.form).then(
          (resp)=>{
            this.results = resp.body.result.datas
            for(let i=0;i<this.results.length;i++){
                if(this.results[i].isDefault=="T"){
                    this.results[i].isDefault=true
                }
                else{
                    this.results[i].isDefault=false
                }
              }
          }
        )
    },
    methods :{
      //设为默认地址
      setmoren(id){
      API.user.setDefaultAddress({"id":id}).then(
           (resp) => {
              location.reload()
           }

        )
     },
     //添加地址
     addadress(){
       window.location.href="/new_adress"
     },
     //删除地址
    delet(item){
        API.user.memberAddressDelete({"id":item.id}).then(
           (resp) => {
              location.reload()
           }
        )
     },
     //编辑地址
    edit(item){
      this.edits.id=item.id
      this.edits.receiver=item.receiver
      this.edits.mobile=item.mobile
      this.edits.province=item.province
      this.edits.city=item.city
      this.edits.area=item.area
      this.edits.address=item.address
      this.edits.isDefault=item.isDefault
      this.edits.alias=item.alias
      this.edits.telphone=item.telphone
      this.edits.memberId=JSON.parse(localStorage.getItem("login")).id
      localStorage.setItem("edits", JSON.stringify(this.edits)); 
      window.location.href="/new_adress"
      localStorage.removeItem("receivers")
     },
     selectadress(item){
      if(localStorage.getItem("goods")){
      this.edits.id=item.id
      this.edits.receiver=item.receiver
      this.edits.mobile=item.mobile
      this.edits.province=item.province
      this.edits.city=item.city
      this.edits.area=item.area
      this.edits.address=item.address
      this.edits.isDefault=item.isDefault
      this.edits.alias=item.alias
      this.edits.telphone=item.telphone
      localStorage.setItem("receivers", JSON.stringify(this.edits)); 
      localStorage.removeItem("edits")
      window.location.href="/order"
      }
    },   
    }
  }
</script>