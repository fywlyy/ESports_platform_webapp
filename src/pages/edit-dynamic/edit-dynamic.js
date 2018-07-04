/**
 * 新闻列表页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import EditDynamicTpl from './edit-dynamic.html';

import "./edit-dynamic.scss";

export default function EditDynamic(id) {

	const handlers = {
		init: function() {

			$(".container").html( EditDynamicTpl() );
			this.bindEvent();
			Util.setTitle('编辑动态');

		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".edit-dynamic-page").on("touchend", ".js-handle", function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e);
			});
			
			Util.previewImg($("input[type='file']"),function(files){
				debugger;
				$.ajax({
					url: API.uploadFile,
					body: files,
					success: function(req) {
						debugger;
					},
					error: function(msg){

					}
				})
			},function(result){
				$(".image-picker").children().eq(0).before("<div><img src='"+result+"'></div>");
			});
		},
		handlePost: function() {
			let con = $(".dynamic-content").val();

			if(!con){
				alert('请输入您此刻的想法！');
				return;
			}
			return;
			$.ajax({
				url: API.addPostMessage,
				data: {
					Body: {
						CircleId: id,
						Content: con,
						ImageUrlList: []
					}
				},
				success: function(req) {
					if(!req.isErr){
						alert('动态信息发布成功！');
					}
				},
				error: function(msg){

				}
			})
		}
	}   

	handlers.init(); 
}
