/**
 * 课程直播页
 */

import _ from 'underscore';
import Util from '../../../../common-component/util/util.js';
import API from '../../../../api/Api.js';
import LiveTpl from './live.html';

import "./live.scss";

export default function Live($el, infoList) {

	const handlers = {
		init: function() {

			let _this = this;
            $el.html('');
			this.getLiveList(function(data){
                $el.html( LiveTpl({liveList: data}) );
				_this.bindEvent();
            });
			
		},
		bindEvent: function() {

		},
		getLiveList: function(cb){
			$.ajax({
                url: API.getLiveList,
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
