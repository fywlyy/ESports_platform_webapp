/**
 * 课程直播页
 */

import _ from 'underscore';
import Util from '../../../../common-component/util/util.js';
import API from '../../../../api/Api.js';
import ActivityTpl from './activity.html';

import "./activity.scss";

export default function Activity($el, infoList) {

	const handlers = {
		init: function() {

			let _this = this;

            $el.html( ActivityTpl() );
            _this.bindEvent();
			// this.getActivityList(function(data){
                
            // });
			
		},
		bindEvent: function() {

		},
		getActivityList: function(cb){
			$.ajax({
                url: API.getActivityList,
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
