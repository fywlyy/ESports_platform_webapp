import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import AccountRentalTpl from './account-rental.html';

import "./account-rental.scss";

export default function AccountRental() {

    const handlers = {

        init: function() {

            $(".container").html(AccountRentalTpl());
            Util.setTitle('账号租用');
            this.bindEvent();

        },
        bindEvent: function() {
            let _this = this;
            //公共事件添加
            $(".account-rental-page").on("touchend",".js-handle",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });
        },
        toCreateOrder: function(e, $this){
            Util.linkTo("/create-order");
        }

    }

    handlers.init();
}
