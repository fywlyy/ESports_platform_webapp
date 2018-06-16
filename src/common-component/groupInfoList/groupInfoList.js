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
            let _this = this;
            //公共事件添加
            $(".groupItem").on("click",".js-handle",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });
        },
        handleLike: function(e, $this) {
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
        },
        handleLink: function(e,$this) {
            const id = $this.parents(".groupItem").data("id");
            Util.linkTo('/dynamic-details/' + id);
        }
    }

    handlers.init();
}

