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

export default function DynamicDetails() {
    const itemData = {};
    const commentData = {
        infoList: [1,2,3,4,5,6]
    };

    const handlers = {
        init: function() {
            $(".container").html(DynamicDetailsTpl());
            GroupInfoItem($(".groupItem-layout"),itemData,true);
            Comment($(".comment-layout"),commentData)
            Util.setTitle('动态详情');
            this.bindEvent();
        },
        bindEvent: function() {
            
        }
    }

    handlers.init();
}
