/**
 * 新闻列表页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import PersonalTpl from './personal.html';
import Activity from './components/activity/activity';
import Classes from './components/classes/classes';

import "./personal.scss";

export default function Personal() {

	const handlers = {
		init: function() {
			$(".container").html( PersonalTpl() );
			Activity($('.personal-page-container'),{});
			this.bindEvent();
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".personal-page").on("touchend", ".js-handle", function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e);
			});
			this.handleChangeTab();
		},
		handleChangeTab: function() {
			$(".personal-page .personal-page-tabBar").on("touchend", ">div", function(e){
				let $this = $(this);
				if($this.hasClass('active')){
					return;
				}else{
					$this.addClass('active').siblings().removeClass('active');

					let index = $this.index();
					let $container = $(".personal-page-container");
					switch (index){
						case 0 : Activity($container,{}); break;
						case 1 : Classes($container,{}); break;
						// case 2 : Interaction($container); break;
						default : Activity($container,{});
					}

				}
			});
		},
		toApplyCert: function(){
			Util.linkTo('/apply-certf')
		}
	}   

	handlers.init(); 
}
