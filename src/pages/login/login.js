/**
 * 登录页
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import LoginTpl from './login.html';

import "./login.scss";

export default function Login() {

	const handlers = {
		init: function() {
			$("#app-container").html( LoginTpl({ title: '测试' }) );
			this.bindEvent();
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".login-page .js-handle").on("click",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e);
            });
		},
		handleLogin: function(e) {
			const userId = '456';
	        Util.addCookie('userId',userId,1,document.domain);
	        Util.linkTo('/groups');
		}
	}   

	handlers.init(); 
}
