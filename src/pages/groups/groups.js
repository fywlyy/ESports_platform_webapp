/**
 * 圈子页
 */
import _ from 'underscore';
import Swiper from 'swiper';
import MeScroll from 'mescroll.js';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import GroupsTpl from './groups.html';
import GroupInfoList from '../../common-component/groupInfoList/groupInfoList.js';

import "./groups.scss";

export default function Groups() {
    const userInfo = localStorage.getItem('UserInfo');
    const userId = userInfo && JSON.parse(userInfo).Id;

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

                that.getUserPostMsgList(that.params, that.renderMsgList.bind(that), 'loadMore');

                var swiper = new Swiper('.group-list',{
                    slidesPerView: 4
                });
                
                $(".group-list .swiper-slide").eq(0).addClass("active");

                that.bindEvent();

            });

            Util.setTitle('圈子');
        },
        bindEvent: function() {
            const that = this;
            $('.group-list .swiper-wrapper').on('touchend','.swiper-slide',function(){
                let $this = $(this);
                if($this.hasClass('active')){
                    return;
                }else{
                    $this.parent().find('.swiper-slide.active').removeClass('active');
                    $this.addClass('active');

                    that.params.CircleId = $this.data('id');

                    that.mescroll = new MeScroll("mescroll", { //第一个参数"mescroll"对应上面布局结构div的id
                        down: {
                            auto: false,
                            htmlContent: '<p class="downwarp-progress"></p><p class="downwarp-tip">下拉刷新</p>',
                            callback: function(page){
                                that.params.pageIndex = 1;
                                setTimeout(function(){
                                    that.getUserPostMsgList(that.params,that.renderMsgList.bind(that),'refresh');
                                },1000);
                            }
                        },
                        up: {
                            auto: true,
                            isBoth: false,
                            isBounce: false,
                            noMoreSize: 1,
                            callback: function(page){
                                that.params.pageIndex = page.num;
                                setTimeout(function(){
                                    that.getUserPostMsgList(that.params,that.renderMsgList.bind(that),'loadMore');
                                },1000);
                                
                            }
                        }
                    });

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
        getUserPostMsgList:function(params, cb, type){

            $.ajax({
                url: API.userPostMsgList,
                type: 'post',
                data: {Body:params},
                success: function(req){

                    if(!req.IsError){
                        cb && cb(req || {}, type);
                    }

                },
                error: function(msg){
                    console.log(msg);
                }
            })

        },
        renderMsgList:function(req,type){
            type == 'refresh' && $(".group-info-list").html('');
            GroupInfoList($(".group-info-list"), req.Result);
            this.params.PageIndex = req.PageIndex;

            this.mescroll && this.mescroll.endBySize(req.Result.length, req.TotalCount);
        }
    }

    handlers.init();
}
