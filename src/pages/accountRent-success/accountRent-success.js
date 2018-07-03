/**
 * 账号租用成功
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import AccountRentSuccessTpl from './accountRent-success.html';

import "./accountRent-success.scss";

export default function AccountRentSuccess() {

    const handlers = {

        init: function() {

            $(".container").html(AccountRentSuccessTpl());
            Util.setTitle('租号成功');
            this.bindEvent();
        },
        bindEvent: function() {
            let _this = this;
            //公共事件添加
            $(".accountRent-success").on("touchend",".js-handle",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });
        }

    }

    handlers.init();
}
