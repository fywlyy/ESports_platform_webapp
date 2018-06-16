/**
 * 圈子页
 */
import _ from 'underscore';
import Swiper from 'swiper';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import GroupsTpl from './groups.html';
import GroupInfoList from '../../common-component/groupInfoList/groupInfoList.js';

import "./groups.scss";

export default function Groups() {

    const userId = JSON.parse(localStorage.getItem('UserInfo')).id;

    const handlers = {

        params:{
            UserId: userId,
            CircleId: null,
            CommentDataCount: 3,
            PageIndex: 1,
            PageSize: 10
        },

        init: function() {

            const that = this;

            that.getUserCircle(function(data){

                $(".container").html(GroupsTpl({circleList:data}));

                that.getUserPostMsgList(that.params, that.renderMsgList.bind(that));

                var swiper = new Swiper('.group-list',{
                    slidesPerView: 4
                });

                that.bindEvent();

            });

            Util.setTitle('圈子');
        },
        bindEvent: function() {
            const that = this;
            $('.group-list .swiper-wrapper').on('click','.swiper-slide',function(){
                let $this = $(this);
                if($this.hasClass('active')){
                    return;
                }else{
                    $this.parent().find('.swiper-slide.active').removeClass('active');
                    $this.addClass('active');

                    that.params.CircleId = $this.data('id');

                    that.getUserPostMsgList(that.params,that.renderMsgList.bind(that));

                }
            });
        },
        getUserCircle: function(cb){

            $.ajax({
                url: API.circleList,
                type: 'post',
                data: {Body:null},
                success: function(req){

                    if(!req.IsError){
                        cb && cb(req.Data || []);
                    }

                },
                error: function(msg){
                    console.log(msg);
                }
            })

        },
        getUserPostMsgList:function(params, cb){

            $.ajax({
                url: API.userPostMsgList,
                type: 'post',
                data: {Body:params},
                success: function(req){

                    if(!req.IsError){
                        cb && cb(req || {});
                    }

                },
                error: function(msg){
                    console.log(msg);
                }
            })

        },
        renderMsgList:function(req){
            GroupInfoList($(".group-info-list"), req.Result);
            this.params.PageIndex = req.PageIndex;
        }
    }

    handlers.init();
}
