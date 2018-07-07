/**
 * 新闻列表页
 */

import _ from 'underscore';
import Util from '../../../../common-component/util/util.js';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import API from '../../../../api/Api.js';
import VideosTpl from './videos.html';

import "./videos.scss";

export default function Videos($el) {

	const handlers = {
		init: function() {
			let _this = this;
            window.videoObjs = window.videoObjs || [];
			window.videoObjs.map((item,index) => { //销毁
				item.dispose();
            });
			window.videoObjs= [];
			$el.html('');
			this.getVideoList((data)=>{
				$el.html( VideosTpl({videoList: data}) );
				_this.initVideo(data);
				_this.bindEvent();
			});
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".videos-page").on("click", ".js-handle", function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e,$(this));
            });
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
		},
		initVideo: function(videoList) {
			videoList.map((item,index) => {
				window.videoObjs[index] = videojs('my-player-' + index,{
					width: '100%',
					height: '100%'
				},function() {
					
				});
			})
		}
	}   

	handlers.init(); 
}
