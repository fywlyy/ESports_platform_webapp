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
			$el.html( LiveTpl() );
			this.bindEvent();
		},
		bindEvent: function() {

		}
	}   

	handlers.init(); 
}
