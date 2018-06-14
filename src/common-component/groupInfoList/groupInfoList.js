import Util from '../../common-component/util/util.js';
import GroupInfoListTpl from "./groupInfoList.html";
import API from '../../api/Api.js';

import "../groupInfoItem/groupInfoItem.scss";

export default function GroupInfoList($el, infoList) {
    const handlers = {
        init: function() {
            $el.html(GroupInfoListTpl({infoList}));
            this.bindEvent();
        },
        bindEvent: function() {
            $(".group-info-list").on("click", ".showAll", function(){
                Util.linkTo('/dynamic-details');
            });
            $(".groupItem").on("click", ".handleLike", function(){
                const $this = $(this);
                $.ajax({
                    url: API.clickLike,
                    type: 'post',
                    data: {Body:$this.parents(".groupItem").data('id')},
                    success: function(req){

                        if(!req.IsError){
                            debugger;
                            $this.addClass("liked");
                        }

                    },
                    error: function(msg){
                        console.log(msg);
                    }
                })
            });
        }
    }

    handlers.init();
}

