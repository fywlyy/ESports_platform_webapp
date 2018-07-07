/**
 * 下单页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import CreateOrderTpl from './order-details.html';

import "./order-details.scss";

export default function CreateOrder(id) {

	const handlers = {
		init: function() {
			let _this = this;
			$(".container").html( CreateOrderTpl() );
			_this.bindEvent();
			Util.setTitle('下单');
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".create-order-page").on("click", ".js-handle", function(e){
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
		},
		createOrder: function(e,$this){
			Util.linkTo('/accountRent-success/' + id)
		},
		getAccountDetail: function(cb){
			
		}
	}   

	handlers.init(); 
}
