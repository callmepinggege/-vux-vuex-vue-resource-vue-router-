<style  scoped>
 
</style>

</style>
<template>
  <div>
    <x-header style="background-color:#f7fcf6;" :left-options="{backText:'',showBack: true}">添加地址</x-header>
    <group style="margin-top:0.1rem">
      <x-input title="收货人" placeholder="请输入收货人姓名"  v-model="form.receiver" required></x-input>
      <x-input title="手机号" placeholder="请输入手机号" v-model="form.mobile"  required name="mobile" is-type="china-mobile" :min="11" :max="11"></x-input>
      <x-input title="电 话" placeholder="请输入电话号码" v-model="form.telphone" is-type="china-mobile"></x-input>
      <x-address :title="title" v-model="value" raw-value :list="addressData"></x-address>
      <x-input title="详细地址" placeholder="请输入详细地址" v-model="form.address" required></x-input>
      <x-input title="常用地址" placeholder="请输入常用地址" v-model="form.alias" required></x-input>
       <x-switch title="是否默认" v-model="form.isDefault"></x-switch>      
    </group>
    <x-button @click.native="regist" style="margin-top:1rem">提交</x-button>
  </div>
</template>
<script>
  import {XInput, Group, XButton,XHeader,XAddress, ChinaAddressData,XSwitch } from 'vux'
  import {API,getQuery} from '../services'
  export default {
      data() {
          return {
           state:true,
           addressData: ChinaAddressData,
           title: '地址',
           value: ['广东省', '深圳市', '南山区'],
           form:{
            type:0,
            memberId:"",
            province:"",
            city:"",
            area:"",
            address:"",
            mobile:"",
            isDefault:true,
            receiver:"",
            telphone:"",
            alias:""
           }
          }
      },
    components: {
     XInput,
     Group,
     XButton,
     XHeader,
     XAddress,
     XSwitch
    },
    mounted : function() {
        document.title="添加地址"
        if( localStorage.getItem("login")){
          this.form.memberId = JSON.parse(localStorage.getItem("login")).id
        }
        if(localStorage.getItem("edits")){
          this.form= JSON.parse(localStorage.getItem("edits"));
          this.form.type=1
        }
    },
    methods :{
      regist(){
        let that = this
        for (let i = 0; i < that.addressData.length; i++) {
        if(that.addressData[i].value==that.value[0]){
           that.form.province =that.addressData[i].name
        }else if(that.addressData[i].value==that.value[1]){
           that.form.city =that.addressData[i].name
        }
         else if(that.addressData[i].value==that.value[2]){
              that.form.area =that.addressData[i].name
           }
        }
        if(that.state){
          if(this.form.isDefault){
            this.form.isDefault ="T"
          }else{
             this.form.isDefault ="F"
          }
           API.user.addadresslist(this.form).then(
              (resp) => {
              if(resp.body.errmsg="申请成功"){
                window.location.href="/adress"
                localStorage.removeItem("edits")
                that.state = false
              }         
            }
          )
        }
      }
    }
  }
</script>