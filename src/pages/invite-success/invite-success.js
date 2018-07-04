/**
 * 新闻列表页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import InviteSuccessTpl from './invite-success.html';

import "./invite-success.scss";

export default function InviteSuccess() {

	const handlers = {
		init: function() {

			$(".container").html( InviteSuccessTpl() );
			this.bindEvent();
			Util.setTitle('邀请成功');

		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".invite-success-page").on("touchend", ".js-handle", function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e);
            });
		}
	}   

	handlers.init(); 
}
