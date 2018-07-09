/**
 * 个人详情页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import PersonalDetailsTpl from './personal-details.html';
import GroupInfoList from '../../common-component/groupInfoList/groupInfoList.js';

import "./personal-details.scss";

export default function PersonalDetails(id) {

	const handlers = {
        params:{
            UserId: id,
            CircleId: null,
            CommentDataCount: 3,
            PageIndex: 1,
            PageSize: 10
        },
		init: function() {
			const _this = this;
			const userInfo = JSON.parse(localStorage.getItem('UserInfo'));
			const isLoginUser = userInfo.Id == id ? true : false;

			if(isLoginUser){
				$(".container").html( PersonalDetailsTpl({isLoginUser,userInfo}) );
				this.getUserPostMsgList(this.params,function(groupsInfo){
					GroupInfoList($(".gropusList .group-info-list"),groupsInfo);
                })
                this.bindEvent();
			}else{
				this.getUserInfo(function(otherUserInfo){
                    $(".container").html( PersonalDetailsTpl({isLoginUser,userInfo: otherUserInfo}) );
					_this.getUserPostMsgList(_this.params,function(groupsInfo){						
						GroupInfoList($(".gropusList .group-info-list"),groupsInfo);
                    })
                    _this.bindEvent();
				})
			}
			
			Util.setTitle('个人详情');
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".personal-details-page").on("click", ".js-handle", function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e,$(this));
			});
			$(".selector span").on("click",function(e){
				let $this = $(this);
				$this.hasClass('active') ? '' : $this.addClass('active').siblings().removeClass('active');
			});
		},
		getUserInfo: function(callback){
            $.ajax({
                url: API.getUserInfo,
                data: {
                    Body: id
                },
                success: function(req) {
                    if(!req.IsError){
                        callback && callback(req.Data);
                    }else{
                        Util.alertMessage(req.Message);
                    }
                }
            })
		},
		getUserPostMsgList:function(params, cb, type){
            $.ajax({
                url: API.userPostMsgList,
                type: 'post',
                data: {Body:params},
                success: function(req){

                    if(!req.IsError){
                        cb && cb(req.Result || [], type);
                    }

                },
                error: function(msg){
                    console.log(msg);
                }
            })

        },
		toApplyCert: function(e,$this){
			let status = $this.data("status");

			if(status == '20'){
				Util.alertMessage('您提交的认证信息正在认证中！');
				return;
			}else{
				Util.linkTo('/apply-certf');
			}
		},
        addGroups: function() {
            let token = Util.getCookie('AccessToken');

            if(!!token){
                Util.linkTo('/edit-dynamic');
            }else{
                Util.linkTo('/login');
            }
        }
	}   

	handlers.init(); 
}
