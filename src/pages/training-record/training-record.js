/**
 * 新闻列表页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import TrainingRecordTpl from './training-record.html';

import "./training-record.scss";

export default function TrainingRecord() {

	const handlers = {
		init: function() {

			$(".container").html( TrainingRecordTpl() );
			this.bindEvent();
			Util.setTitle('训练记录');

		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".training-record-page").on("click", ".js-handle", function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e);
            });
		}
	}   

	handlers.init(); 
}
