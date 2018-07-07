import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import AccountRentalTpl from './inviting-to-play.html';

import "./inviting-to-play.scss";

export default function AccountRental(id) {

    const handlers = {

        init: function() {

            $(".container").html(AccountRentalTpl());
            Util.setTitle('邀请陪玩');
            this.bindEvent();

        },
        bindEvent: function() {
            let _this = this;
            //公共事件添加
            $(".inviting-to-play-page").on("click",".js-handle",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });
        },
        toCreateOrder: function(e, $this){
            Util.linkTo("/create-order/" + id);
        }

    }

    handlers.init();
}
