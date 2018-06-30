/**
 * 课程直播页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import LiveDetailsTpl from './live-details.html';

import "./live-details.scss";

export default function LiveDetails() {

	const handlers = {
		init: function() {
			$('.container').html( LiveDetailsTpl() );
			this.bindEvent();
			Util.setTitle('');
		},
		bindEvent: function() {

		}
	}   

	handlers.init(); 
}
