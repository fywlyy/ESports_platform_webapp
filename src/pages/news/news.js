/**
 * 新闻列表页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import NewsTpl from './news.html';

import "./news.scss";

export default function News() {

	const handlers = {
		init: function() {

			this.getAllNewsList(function(data){
				$(".container").html( NewsTpl({newsList:data}) );
			});
			this.bindEvent();
			Util.setTitle('全部新闻');

		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".news-page").on("click", ".news-item .js-handle", function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e);
            });
		},
		handleLogin: function(e) {
			let userName = $("input[name='userName']").val(),
				password = $("input[name='password']").val(),
				Body = {};

			if(!userName || !password){
				Util.alertMessage('请输入用户名及密码！');
				return;
			}

			Body = {
				"LoginName": "188888888888",
				"Pwd": "123456",
				"UserType": 2
			};

			$.ajax({
				url: API.userLogin,
				type: 'post',
				data: {
					Body
				},
				success: function(req){
					let { Data, IsError } = req;
					if(!req.IsError){
						let { UserInfo, AccessToken } = Data;
						
						Util.addCookie('AccessToken',AccessToken,1,document.domain);
						window.localStorage.setItem('UserInfo',JSON.stringify(UserInfo));
						Util.linkTo('/groups');	
					}			       
				},
				error: function(msg){
					console.log(msg);
				}
			})
		},
		getAllNewsList:function(cb){
			$.ajax({
                url: API.getAllNewsList,
                type: 'post',
                data: {Body:null},
                success: function(req){

                    if(!req.IsError){
                        cb && cb(req.Result || []);
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
