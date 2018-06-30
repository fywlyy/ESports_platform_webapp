/**
 * 赛事报名入口
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import GameSignUpEntrTpl from './gameSignUpEntr.html';

import "./gameSignUpEntr.scss";

export default function NewsDetail(id) {

	const handlers = {
		init: function() {
			Util.setTitle('xxx赛事报名入口');
			$(".container").html( GameSignUpEntrTpl({}) );
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".forgetPwd-page .js-handle").on("touchend",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });
		},
		handleSignUp: function() {

		}
	}   

	handlers.init(); 
}
