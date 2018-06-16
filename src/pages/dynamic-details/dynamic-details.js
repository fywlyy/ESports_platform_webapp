/**
 * 动态详情
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import DynamicDetailsTpl from './dynamic-details.html';
import GroupInfoItem from '../../common-component/groupInfoItem/groupInfoItem.js';
import Comment from '../../common-component/comment/comment.js';

import "./dynamic-details.scss";

export default function DynamicDetails(id) {

    const handlers = {
        init: function() {

            this.getDetails(id,function(data){
                $(".container").html(DynamicDetailsTpl());
                GroupInfoItem($(".groupItem-layout"),data,true);
                Comment($(".comment-layout"),{
                    commentList: data.CommentReplyList,
                    commentCount: data.CommentCount,
                    likeCount: data.LikeCount
                })
            })

            Util.setTitle('动态详情');
            this.bindEvent();
        },
        bindEvent: function() {
            
        },
        getDetails: function(id,callback) {
            $.ajax({
                url: API.getPostMsgDetail,
                type: 'post',
                data: { Body: id },
                success: function(req){
                    req = typeof(req) == 'string' ? JSON.parse(req) : req;
                    if(!req.IsError){
                        callback && callback(req.Data || []);
                    }

                },
                error: function(msg){
                    console.log(msg);
                }
            })
        }
    }

    handlers.init();
}
