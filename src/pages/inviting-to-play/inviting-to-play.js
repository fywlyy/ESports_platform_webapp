import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import InvitingToPlayTpl from './inviting-to-play.html';

import "./inviting-to-play.scss";

export default function InvitingToPlay(id) {

    const handlers = {

        init: function() {

            $(".container").html(InvitingToPlayTpl());
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
            Util.linkTo("/inviting-create-order/" + 1);
        },
		getPlayWithDetail: function(cb){
			$.ajax({
                url: API.getPlayWithDetail,
                type: 'post',
                data: { Body: 1 },
                success: function(req){
                    if(!req.IsError){
                        cb && cb(req.Data || []);
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
