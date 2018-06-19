/**
 * 注册页
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import RegisterTpl from './register.html';

import "./register.scss";

export default function Login() {

	const handlers = {
		init: function() {
			$("#app-container").html( RegisterTpl({ title: '注册' }) );
			this.bindEvent();
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".register-page .js-handle").on("touchend",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });
		},
		handleRegister: function(e) {
			console.log('注册成功');
		},
		handleGetCode: function(e) {
			console.log('获取成功');
		},
		handleCheck: function(e, $this) {
			$this.hasClass('checked') ? $this.removeClass('checked') : $this.addClass('checked');
		}
	}   

	handlers.init(); 
}
