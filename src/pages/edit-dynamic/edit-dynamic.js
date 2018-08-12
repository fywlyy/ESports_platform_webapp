/**
 * 动态发布
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import EditDynamicTpl from './edit-dynamic.html';

import "./edit-dynamic.scss";

export default function EditDynamic(id,name) {
	const accessToken = Util.getCookie('AccessToken');
	const handlers = {
		imgUrls: [],
		init: function() {
			$(".container").html( EditDynamicTpl({CircleName: decodeURI(decodeURI(name))}) );
			this.bindEvent();
			Util.setTitle('编辑动态');

		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".edit-dynamic-page").on("click", ".js-handle", function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e);
			});
			
			Util.previewImg($("input[type='file']"),function(files){
				let uploadFile = new FormData($("#file")[0]);

				$.ajax({
					url: API.uploadFile + '?accessToken=' + accessToken,
					data:uploadFile,
					isUpload: true,
					contentType: false, //不设置内容类型
					processData: false, //不处理数据
					success:function(req){
						if(!req.IsError){
							let resList = req.Data;
							resList.forEach(element => {
								_this.imgUrls.push(element.RelativeUrl);
							});
						}
					},
					error:function(){
						Util.alertMessage("上传失败！");
					}
				})
		
			},function(result){
				$(".image-picker").children().eq(0).before("<div><img src='"+result+"'></div>");
			});
		},
		handlePost: function() {
			let con = $(".dynamic-content").val();

			if(!con){
				Util.alertMessage('请输入您此刻的想法！');
				return;
			}

			$.ajax({
				url: API.addPostMessage,
				data: {
					Body: {
						CircleId: id,
						Content: con,
						ImageUrlList: this.imgUrls
					}
				},
				success: function(req) {
					if(!req.IsError){
                        Util.alertMessage('动态信息发布成功！');
                        Util.linkTo('/groups');
					}
				},
				error: function(msg){

				}
			})
		}
	}   

	handlers.init(); 
}
