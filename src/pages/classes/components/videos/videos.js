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
			$el.html( VideosTpl() );
			this.bindEvent();
		},
		bindEvent: function() {

		}
	}   

	handlers.init(); 
}
