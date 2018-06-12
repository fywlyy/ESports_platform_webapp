/**
 * 注册页
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import ForgetPwdTpl from './forgetPwd.html';

import "./forgetPwd.scss";

export default function Login() {

	const handlers = {
		init: function() {
			$("#app-container").html( ForgetPwdTpl({ title: '忘记密码' }) );
			this.bindEvent();
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".forgetPwd-page .js-handle").on("click",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });
		},
		handleForgetPwd: function(e) {
			console.log('提交成功');
		},
		handleGetCode: function(e) {
			console.log('获取成功');
		}
	}   

	handlers.init(); 
}
