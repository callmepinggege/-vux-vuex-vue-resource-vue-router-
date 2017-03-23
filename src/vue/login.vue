<style  scoped>

</style>
<template>
	<div>
    <x-header style="background-color:#f7fcf6;" :right-options="{showMore: true}" :left-options="{backText:'',showBack: true}">登录</x-header>
    <group style="margin-top:0.1rem">
      <x-input title="账号" placeholder="请输入账号"   v-model="form.userName"></x-input>
      <x-input title="密码" placeholder="请输入密码"  type="password"  v-model="form.password"></x-input>
    </group>
    <x-button style="margin-top:1rem" @click.native="login">登录</x-button>
    <x-button @click.native="regist">注册</x-button>
    <toast v-model="toast" type="warn">{{text}}</toast>
	</div>
</template>
<script>
import {XInput, Group, XButton,XHeader,Toast } from 'vux'
import {API,getQuery} from '../services'
  export default {
      data() {
        return {
           text:"",
           toast:false,
           state:true,
           form:{
            userName:"",
            password:""
           }
        }
      },
    components: {
     XInput,
     Group,
     XButton,
     XHeader,
     Toast
    },
    mounted : function() {
        document.title="登陆"
    },
    methods :{
      login(){
        if(this.state){
           API.user.login(this.form).then(
              (resp) => {
              if(resp.body.errmsg=="登录成功"){
                localStorage.setItem("login", JSON.stringify(resp.body.result))
                this.state = false
                if( localStorage.getItem("jump")){
                  window.location.href="/"+localStorage.getItem("jump")
                }else{
                  window.location.href="/index"
                }
                
              }else{
                this.toast = !this.toast
                this.text=resp.body.errmsg
              }         
            }
          )
        }
      },
      regist(){
        window.location.href="/regist"
      }
    }
  }
</script>