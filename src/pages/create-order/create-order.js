/**
 * 下单页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import CreateOrderTpl from './create-order.html';

import "./create-order.scss";

export default function CreateOrder(id) {

	const handlers = {
		params: {
			UserId: '',
			SoType: 1,
			BusinessId: id,
			Quantity: 1,
			PayWay: 3,
			PINCode: ''
		},
		init: function() {
			const _this = this;
			const loginUserInfo = JSON.parse(localStorage.getItem('UserInfo'));

			this.getAccountDetail(function(data){
				$(".container").html( CreateOrderTpl({data}) );
				_this.bindEvent();
			});
			this.params.UserId = loginUserInfo.Id;
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
			const num = parseInt($(".num").text());

			this.params.Quantity = num;
			$.ajax({
				url: API.creatOrder,
				data: {
					Body: this.params
				},
				success: function(req) {

					if(!req.IsError){
						Util.linkTo('/accountRent-success/' + id);
					}
				}
			})
		},
		getAccountDetail: function(cb){
			$.ajax({
                url: API.getAccountDetail,
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
