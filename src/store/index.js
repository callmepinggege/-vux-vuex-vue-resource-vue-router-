import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		// 页面打开默认设置登录状态为否
		isLogin : false,
		// 保存登录信息
		userInfo : {
			'loginname' : '',
			'avatar' : '',
			'id' : '',
			'accesstoken' : ''
		},
		// alert框提示内容
		tipContent : '',
		// alert框显示状态
		tipShow : false,
		// 用户未读消息条数
		message_count : 0,
		// 文章评论
		replies : []
	},
	actions: {
		isLogin({commit}) {
			commit('ISLOGIN');
		},
		signOut({commit}) {
			commit('SIGNOUT');
		},
		setUserInfo({commit}, userInfo) {
			commit('SETUSERINFO', userInfo);
		},
		setTipContent({commit}, content) {
			commit('SETTIPCONTENT', content);
		},
		setTipShow({commit}, status) {
			commit('SETTIPSHOW', status);
		},
		setNotMessageCount({commit}, count) {
			commit('SETNOTMESSAGECOUNT', count);
		},
		setReplies({commit}, replies) {
			commit('SETREPLIES', replies);
		}
	},
	mutations: {
		// 设置登录
		ISLOGIN (state) {
			state.isLogin = true;
		},
		// 退出登录
		SIGNOUT (state) {
			state.isLogin = false;
		},
		// 设置登录用户信息
		SETUSERINFO (state, userInfo) {
			state.userInfo.loginname = userInfo.name;
			state.userInfo.avatar = userInfo.avatar;
			state.userInfo.id = userInfo.id;
			state.userInfo.accesstoken = userInfo.accesstoken;
		},
		// 设置tips弹窗的提示信息
		SETTIPCONTENT (state, content) {
			state.tipContent = content;
		},
		// 设置tips弹窗的显示隐藏状态
		SETTIPSHOW (state, status) {
			state.tipShow = status;
		},
		// 设置未读消息条数
		SETNOTMESSAGECOUNT (state, count) {
			state.message_count = count;
		},
		// 设置当前文章评论
		SETREPLIES (state, replies) {
			state.replies = replies;
		}
	},
	getters: {
		getLoginState (state) {
			return state.isLogin;
		},
		getUserInfo (state) {
			return state.userInfo;
		},
		getUserInfoAccesstoken(state, getters) {
			return getters.getUserInfo.accesstoken;
		},
		getTipShow (state) {
			return state.tipShow;
		},
		getTipContent (state) {
			return state.tipContent;
		},
		getNotMessageCount (state) {
			return state.message_count;
		},
		getReplies (state) {
			return state.replies;
		}
	}
})

export default store;