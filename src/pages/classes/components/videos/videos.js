/**
 * 新闻列表页
 */

import _ from 'underscore';
import Util from '../../../../common-component/util/util.js';
import API from '../../../../api/Api.js';
import VideosTpl from './videos.html';

import "./videos.scss";

export default function Videos($el, infoList) {

	const handlers = {
		init: function() {
			let _this = this;

			this.getVideoList((data)=>{
				$el.html( VideosTpl({videoList: data}) );
				_this.bindEvent();
			});
		},
		bindEvent: function() {

		},
		getVideoList: function(cb){
			$.ajax({
                url: API.getVideoList,
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
