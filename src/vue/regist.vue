<style  scoped>

</style>
<template>
  <div>
    <x-header style="background-color:#f7fcf6;" :left-options="{backText:'',showBack: true}">注册</x-header>
    <group style="margin-top:0.1rem">
      <x-input title="用户名" placeholder="请输入用户名"  v-model="form.username" required>
      </x-input>
       <x-input title="密码" placeholder="请输入密码"  type="password"  v-model="form.password"></x-input>
      <x-input title="手机号" placeholder="请输入手机号" v-model="form.contact"  required name="mobile"  keyboard="number" is-type="china-mobile"></x-input>
      <!-- <x-address :title="title" v-model="value" raw-value :list="addressData"></x-address> -->
      <!-- <x-input title="详细地址" placeholder="请输入详细地址" v-model="form.address" required></x-input>    -->
    </group>
    <x-button @click.native="regist" style="margin-top:1rem">注册</x-button>
  </div>
</template>
<script>
  import {XInput, Group, XButton,XHeader,XAddress, ChinaAddressData } from 'vux'
  import {API,getQuery} from '../services'
  export default {
      data() {
          return {
           state:true,
           addressData: ChinaAddressData,
           title: '地址',
           value: ['广东省', '深圳市', '南山区'],
           form:{
            username:"",
            password:"",
            contact:"",
            registerType:"member",
            province:"",
            city:"",
            area:"",
            address:"",
            openid:1234
           }
          }
      },
    components: {
     XInput,
     Group,
     XButton,
     XHeader,
     XAddress
    },
    mounted : function() {
        document.title="注册"
        if(localStorage.getItem("openid")){
          this.form.openid= localStorage.getItem("openid");
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
           API.user.regist(this.form).then(
              (resp) => {
              if(resp.body.errmsg="注册成功"){
                localStorage.setItem("login", JSON.stringify(resp.body.result))
                if( localStorage.getItem("jump")){
                  window.location.href="/"+localStorage.getItem("jump")
                }else{
                  window.location.href="/index"
                }
                that.state = false
              }         
            }
          )
        }
      }
    }
  }
</script>