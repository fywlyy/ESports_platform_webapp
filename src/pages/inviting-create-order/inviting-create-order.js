/**
 * 陪玩下单页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import InvitingCreateOrderTpl from './inviting-create-order.html';

import "./inviting-create-order.scss";

export default function InvitingCreateOrder(id) {

	const handlers = {
		init: function() {
			let _this = this;
			this.getPlayWithDetail(function(data){
				$(".container").html( InvitingCreateOrderTpl({data}) );
				_this.bindEvent();
				Util.setTitle('下单');
			});
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".inviting-create-order-page").on("click", ".js-handle", function(e){
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
			Util.linkTo('/invite-success')
		},
		getPlayWithDetail: function(cb){
			$.ajax({
                url: API.getPlayWithDetail,
                type: 'post',
                data: { Body: id },
                success: function(req){
                    if(!req.IsError){
                        cb && cb(req.Data || []);
                    }
                },
                error: function(msg){
                    console.log(msg);
                }
            })
		}
	}   

	handlers.init(); 
}
