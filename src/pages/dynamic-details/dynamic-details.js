/**
 * Created with JetBrainsWebStorm.
 * User: xiongpeng
 * Date: 2017/10/11 0011
 * Time: 上午 10:11
 * Desc: 登陆页
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import DynamicDetailsTpl from './dynamic-details.html';
import GroupInfoItem from '../../common-component/groupInfoItem/groupInfoItem.js';

import "./dynamic-details.scss";

export default function DynamicDetails() {
    const itemData = {};

    const handlers = {
        init: function() {
            $(".container").append(DynamicDetailsTpl());
            GroupInfoItem($(".groupItem-layout"),itemData);
            Util.setTitle('动态详情');
            this.bindEvent();
        },
        bindEvent: function() {
            
        }
    }

    handlers.init();
}
