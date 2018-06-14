import GroupInfoItemTpl from "./groupInfoItem.html";
import API from '../../api/Api.js';
import "./groupInfoItem.scss";

export default function GroupInfoItem($el, itemData, onlyOne) {
    const handlers = {
        init: function() {
            itemData.onlyOne = onlyOne;
            $el.append(GroupInfoItemTpl(itemData));
            this.bindEvent();
        },
        bindEvent: function() {
            let _this = this;
            //�����¼����
            $(".groupItem .js-handle").on("click",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });
        },
        handleLike:function(e, $this){
            $.ajax({
                url: API.clickLike,
                type: 'post',
                data: {Body:$this.data(id)},
                success: function(req){



                },
                error: function(msg){
                    console.log(msg);
                }
            })
        }

    }

    handlers.init();
}

