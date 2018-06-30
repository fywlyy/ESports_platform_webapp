/**
 * 赛事报名入口
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import GameSignUpEntrTpl from './gameSignUpEntr.html';

import "./gameSignUpEntr.scss";

export default function NewsDetail(id) {
	const options = [{
		id: '1',
		name: 'IG'
	},{
		id: '2',
		name: 'LGD'
	},{
		id: '3',
		name: 'EHOME'
	}]

	const handlers = {
		init: function() {
			Util.setTitle('xxx赛事报名入口');
			$(".container").html( GameSignUpEntrTpl({options}) );
			this.bindEvent();
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".game-sign-up-entr .js-handle").on("touchend",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
			});
			
			$("#clubSelect").on("change",function(e) {
				let $this = $(this);
				let value = $this.val();

				let selectItem = _.find(options,function(item){
					return item.id === value;
				});

				$this.parent().prev().find(".info-con").html(selectItem.name);
			})
		},
		handleSelect: function(e,$this) {
			$("#clubSelect").trigger('click');
		},
		handleSignUp: function() {

		}
	}   

	handlers.init(); 
}
