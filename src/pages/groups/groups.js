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
import GroupsTpl from './groups.html';
import GroupInfoList from '../../common-component/groupInfoList/groupInfoList.js';

import "./groups.scss";

export default function Groups() {
    const infoList = [0,1,2,3];

    const handlers = {
        init: function() {
            $(".container").html(GroupsTpl());
            GroupInfoList($(".group-info-list"),infoList);
            this.bindEvent();
        },
        bindEvent: function() {
            
        }
    }

    handlers.init();
}
