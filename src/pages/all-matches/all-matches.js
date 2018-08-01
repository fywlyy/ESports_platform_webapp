/**
 * 新闻列表页
 */

import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import AllMatchesTpl from './all-matches.html';
import MatcheListTpl from './matche-list.html';

import "./all-matches.scss";

export default function AllMatches() {

	const handlers = {
        params: {
            Rank: null,
            CompetitionStatus: null,
            PageIndex: 1,
            PageSize: 10
        },
		init: function() {
            let _this = this;

            Util.setTitle('全部赛事');
            $(".container").html( AllMatchesTpl() );
            _this.bindEvent();

			this.getAllMatchesList(function(data){
				$(".matches-list").html( MatcheListTpl({list: data}) );								
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
                let $parent = $(this).parent();
                
				$this.hasClass('active') ? '' : $this.addClass('active').siblings().removeClass('active');

                if($parent.hasClass("rank")){
                    _this.params.Rank = $this.data('rank') === undefined ? null : $this.data('rank');
                }else{
                    _this.params.CompetitionStatus = $this.data('status') === undefined ? null : $this.data('status');
                }

                _this.getAllMatchesList(function(data){
                    $(".matches-list").html( MatcheListTpl({list: data}) );								
                });
            });
		},
		getAllMatchesList:function(cb){
			$.ajax({
                url: API.getAllMatchesList,
                type: 'post',
                data: {Body: this.params},
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
