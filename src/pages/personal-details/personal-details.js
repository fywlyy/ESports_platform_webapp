/**
 * 个人详情页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import PersonalDetailsTpl from './personal-details.html';
import GroupInfoList from '../../common-component/groupInfoList/groupInfoList.js';

import "./personal-details.scss";

export default function PersonalDetails() {

	const handlers = {
		init: function() {
			$(".container").html( PersonalDetailsTpl() );
			GroupInfoList($(".gropusList .group-info-list"), [{
				"UserUrl":null,
				"NickName":"打不死的小强",
				"CommentCount":2,
				"CommentReplyList":[
					{
						"Id":"405476985971150848",
						"PostMessageId":"405474549667336192",
						"UserId":"2",
						"NickName":"打不死的小强",
						"ReplyUserId":"3",
						"ReplyUserNickName":"打不死的小强",
						"CommentReplyType":1,
						"InDate":"2018-06-24 14:10:46",
						"Content":"掉血啦",
						"LikeCount":0
					},
					{
						"Id":"405474597465755648",
						"PostMessageId":"405474549667336192",
						"UserId":"3",
						"NickName":"打不死的小强",
						"ReplyUserId":"0",
						"ReplyUserNickName":null,
						"CommentReplyType":0,
						"InDate":"2018-06-24 14:01:17",
						"Content":"不好",
						"LikeCount":0
					}
				],
				"Id":"405474549667336192",
				"CircleId":"1",
				"UserId":"2",
				"InDate":"2018-06-24 14:01:05",
				"Content":"今天的的第一血",
				"LikeCount":1,
				"MessageType":1,
				"LocationAddress":null,
				"AuthType":1,
				"ImageUrlList":[
					"http://xiyuxing.oss-cn-qingdao.aliyuncs.com/607ffa14-3d77-4815-bbe5-188b6158e0a3.jpg",
					"http://xiyuxing.oss-cn-qingdao.aliyuncs.com/607ffa14-3d77-4815-bbe5-188b6158e0a3.jpg"
				]
			}]);
			this.bindEvent();
			Util.setTitle('个人详情');
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".personal-details-page").on("touchend", ".js-handle", function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e);
			});
			$(".selector span").on("touchend",function(e){
				let $this = $(this);
				$this.hasClass('active') ? '' : $this.addClass('active').siblings().removeClass('active');
			});
		}
	}   

	handlers.init(); 
}
