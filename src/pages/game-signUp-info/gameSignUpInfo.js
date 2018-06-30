/**
 * 赛事报名
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import GameSignUpInfoTpl from './gameSignUpInfo.html';

import "./gameSignUpInfo.scss";

export default function NewsDetail(id) {

	const handlers = {
		init: function() {
			Util.setTitle('赛事报名');
			$(".container").html( GameSignUpInfoTpl({}) );
			this.bindEvent();
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".game-sign-up .js-handle").on("touchend",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });
		},
		handleSignUp: function() {
			Util.linkTo('/game-sign-up-entr');
		}
	}   

	handlers.init(); 
}
