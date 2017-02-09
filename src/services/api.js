
import Vue from 'vue';

var API_ROOT = "/api"
export const goods = {

  listGoodsType(data){
    var getTimestamp=new Date().getTime()
    return Vue.http.get(API_ROOT + '/mall/listGoodsType?datatimestamp='+getTimestamp,{params:data})
  },
  listGoods(data){
    var getTimestamp=new Date().getTime()
    return Vue.http.get(API_ROOT + '/mall/listGoods?datatimestamp='+getTimestamp,{params:data})
  },
  goodsDetail(data){
    var getTimestamp=new Date().getTime()
    return Vue.http.get(API_ROOT + '/mall/goodsDetail?datatimestamp='+getTimestamp,{params:data})
  }
}

export const user = {
  order(data){
    return Vue.http.post(API_ROOT + '/mall/listMyOrder',data)
  },
  saveMallCart(data){
     return Vue.http.post(API_ROOT + '/mall/saveMallCart',data)
   },
  updateMallCart(data){
     return Vue.http.post(API_ROOT + '/mall/updateMallCart',data)
   },
  listMallCart(data){
    var getTimestamp=new Date().getTime()
    return Vue.http.get(API_ROOT + '/mall/listMallCart?datatimestamp='+getTimestamp,{params:data})
  },
  submitOrder(data){
    Vue.http.options.emulateJSON = false;
    return Vue.http.post(API_ROOT + '/mall/submitOrder.json',data)
  },
   regist(data){
    return Vue.http.post(API_ROOT +'/member/memberRegister', data)
  },
  login(data){
    return Vue.http.post(API_ROOT +'/member/memberLogin', data)
  },
  adresslist(data){
    return Vue.http.get(API_ROOT + '/member/memberAddressList', {params:data})
  },
   setDefaultAddress(data){
    return Vue.http.post(API_ROOT + '/member/setDefaultAddress',data)
  },
  addadresslist(data){
    return Vue.http.post(API_ROOT + '/member/memberAddress',data)
  },
   memberAddressDelete(data){
    return Vue.http.get(API_ROOT + '/member/memberAddressDelete',{params:data})
  },
   memberDefaultAddress(data){
    return Vue.http.get(API_ROOT + '/member/memberDefaultAddress',{params:data})
  },
   order(data){
    return Vue.http.post(API_ROOT + '/mall/listMyOrder',data)
  },
  memberDefaultAddress(data){
    return Vue.http.get(API_ROOT + '/member/memberDefaultAddress',{params:data})
  },
  cancelorder(id){
    return Vue.http.post(API_ROOT + '/mall/cancelOrder',id)
  },
  getopenid(data){
   return Vue.http.get(API_ROOT + '/wechat/getOpenId',{params:data})
  },
  checkOrderStatus(data){
   return Vue.http.get(API_ROOT + '/pay/checkOrderStatus',{params:data})
  },
  weixinpay(data){
   return Vue.http.post(API_ROOT + '/pay/orderPay',data)
  },
}



