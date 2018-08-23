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
		params: {
			UserId: '',
			SoType: 2,
			BusinessId: id,
			Quantity: 1,
			PayWay: 3,
			PINCode: '',
			UserQQ: ''
		},
		init: function() {
			const _this = this;
			const loginUserInfo = JSON.parse(localStorage.getItem('UserInfo'));

            Util.setTitle('下单');
            this.hasLogin = !!loginUserInfo ? true : false;
			this.getPlayWithDetail(function(data){
				$(".container").html( InvitingCreateOrderTpl({data}) );
				_this.bindEvent();
			});
			this.params.UserId = this.hasLogin ? loginUserInfo.Id : '';
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
		},
		createOrder: function(e,$this){
			const num = parseInt($(".num").text());
			const qq = $("input[type='number']").val();
			
			if(!qq){
				Util.alertMessage('请输入QQ号码！');
				return;
            }
            
            if(!this.hasLogin){
                Util.linkTo('/login');
                return;
            }

			this.params.Quantity = num;
			this.params.UserQQ = qq;
			$.ajax({
				url: API.creatOrder,
				data: {
					Body: this.params
				},
				success: function(req) {

					if(!req.IsError){
						Util.linkTo('/invite-success/' + id);
					}
				}
			})
		},
	}   

	handlers.init(); 
}
