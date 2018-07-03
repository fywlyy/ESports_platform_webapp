/**
 * 下单页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import CreateOrderTpl from './create-order.html';

import "./create-order.scss";

export default function CreateOrder() {

	const handlers = {
		init: function() {
			$(".container").html( CreateOrderTpl() );
			this.bindEvent();
			Util.setTitle('下单');

		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".create-order-page").on("touchend", ".js-handle", function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
			});
		},
		lessHours: function(e, $this){
			let hours = parseInt($this.siblings(".num").text());
			if(hours > 1){
				$this.siblings(".num").text(hours - 1);
			}
		},
		plusHours: function(e, $this){
			let hours = parseInt($this.siblings(".num").text());
			$this.siblings(".num").text(hours + 1);
		}
	}   

	handlers.init(); 
}
