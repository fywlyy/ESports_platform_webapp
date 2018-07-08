/**
 * 新闻列表页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import AllMatchesTpl from './all-matches.html';

import "./all-matches.scss";

export default function AllMatches() {

	const handlers = {
		init: function() {
			let _this = this;
			this.getAllMatchesList(function(data){
				$(".container").html( AllMatchesTpl({list: data}) );
				_this.bindEvent();
				Util.setTitle('全部赛事');
			});
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".all-matches-page").on("click", ".js-handle", function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e,$(this));
			});
			$(".select-list").on("click", ".select-list-item", function(e){
				let $this = $(this);
				$this.hasClass('active') ? '' : $this.addClass('active').siblings().removeClass('active');
			});
		},
		getAllMatchesList:function(cb){
			$.ajax({
                url: API.getAllMatchesList,
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
		toMatchDetails: function(e,$this) {
			let id = $this.parents(".matches-item").data('id');
			Util.linkTo('/match-details/' + id);
		},
		toSignUpInfo: function(e,$this) {
			let id = $this.parents(".matches-item").data('id');
			Util.linkTo('/game-sign-up-info/' + id);
		}
	}   

	handlers.init(); 
}
