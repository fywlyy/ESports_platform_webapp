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
            //公共事件添加
            $(".groupItem .js-handle").on("touchend",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });
            $("#app-container").on("touchend", function(e){
                e.stopPropagation();
                debugger;
                if($(this).parents().find(".operator_menu").length <= 0){
                    $(".groupItem .operator_menu").hide(200).removeClass("hasShow");
                }
            });
        },
        handleLike: function(e, $this) {
            $.ajax({
                url: API.clickLike,
                data: {Body:$this.parents(".groupItem").data('id')},
                success: function(req){

                    if(!req.IsError){
                        $(".comment-header .like-num span:last-child").html(req.Data);
                        $this.addClass("liked");
                    }

                },
                error: function(msg){
                    console.log(msg);
                }
            })
        },
        handleComment: function() {
            $(".comment-input")
            .show()
            .find(".input-box")
            .attr('data-type','0')
            .attr('data-user-id',itemData.UserId)
            .focus();
            $(".dynamicDetails-layout").addClass("hasCommentInput");
        },
        handleMenu: function(e,$this){
            e.stopPropagation();
            $this.siblings(".operator_menu").hasClass("hasShow") 
            ? $this.siblings(".operator_menu").hide(200).removeClass("hasShow") 
            : $this.siblings(".operator_menu").show(200).addClass("hasShow");
        },
        handleReport: function(e,$this){
            $.ajax({
                url: API.reportApi,
                data: {Body:{
                    PostMessageId: $this.parents(".groupItem").data('id')
                }},
                success: function(req){

                    if(!req.IsError){
                        console.log(req);
                        $this.parent().hasClass("hasShow") 
                        ? $this.parent().hide(200).removeClass("hasShow") 
                        : $this.parent().show(200).addClass("hasShow");
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

