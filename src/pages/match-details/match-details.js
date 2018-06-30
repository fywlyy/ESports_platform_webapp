import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import MatchDetailsTpl from './match-details.html';

import "./match-details.scss";

export default function MatchDetails() {

    const handlers = {

        init: function() {

            $(".container").html(MatchDetailsTpl());
            Util.setTitle('赛程详情');
            this.bindEvent();

        },
        bindEvent: function() {
            let _this = this;
            //公共事件添加
            $(".match-details-page").on("touchend",".js-handle",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });
        }

    }

    handlers.init();
}
