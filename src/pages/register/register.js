/**
 * 注册页
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import RegisterTpl from './register.html';

import "./login.scss";

export default function Login() {

	const handlers = {
		init: function() {
			$("#app-container").html( RegisterTpl({ title: '注册' }) );
			this.bindEvent();
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".register-page .js-handle").on("click",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e);
            });
		},
		handleRegister: function(e) {
			console.log('注册成功');
		}
	}   

	handlers.init(); 
}
