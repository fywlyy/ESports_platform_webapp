/**
 * 赛事报名入口
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import GameSignUpEntrTpl from './gameSignUpEntr.html';

import "./gameSignUpEntr.scss";

export default function NewsDetail(id) {
	const options = [{
		id: '1',
		name: 'IG'
	},{
		id: '2',
		name: 'LGD'
	},{
		id: '3',
		name: 'EHOME'
	}]

	const handlers = {
		init: function() {
			let _this = this;
			let userInfo = JSON.parse(localStorage.getItem('UserInfo'));

			this.getDetail(function(data) {
				Util.setTitle(data.CompetitionName);
				$(".container").html( GameSignUpEntrTpl({...data,...userInfo,options}) );
				_this.bindEvent();
			})
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".game-sign-up-entr .js-handle").on("touchend",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
			});		
		},
		getDetail: function(callback) {
			$.ajax({
                url: API.getMatchDetailsInfo,
                type: 'post',
                data: {Body:id},
                success: function(req){

                    if(!req.IsError){
                        callback && callback(req.Data || []);
                    }

                },
                error: function(msg){
                    console.log(msg);
                }
            })
		},
		handleSignUp: function() {
			let ApplyUserId = '',
				CompetitionId = id,
				Project = '',
				Club = $("input[name='Club']").val();

			$.ajax({
				url: API.submitApplyCompetition,
				data: {
					Body: {
						ApplyUserId,
						CompetitionId,
						Project,
						Club
					}
				}
			})
		}
	}   

	handlers.init(); 
}
