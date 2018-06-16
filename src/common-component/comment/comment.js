import CommentTpl from "./comment.html";

import "./comment.scss";

export default function Comment($el, commentData) {
    const handlers = {
        init: function() {
            $el.append(CommentTpl(commentData));
            this.bindEvent();
        },
        bindEvent: function() {
            let _this = this;
            //公共事件添加
            $(".comment-info-list .js-handle").on("click",function(e){
                let $this = $(this);
                let handle = $this.data('handle');
                _this[handle] && _this[handle](e,$this);
            });

            //评论操作
            let $container = $(".container");
            let currentScrollTop = 0;
            $(".input-box")
            .on('focus',function(e){
                currentScrollTop = $container.scrollTop();
                $(this).parent().css({position: 'absolute'});
                $(".container").on('touchmove',function(event){
                    event.preventDefault();
                }).scrollTop(0);
            })
            .on('blur',function(e){
                $(this).parent().css({position: 'fixed'});
                $(".container").off('touchmove').scrollTop(currentScrollTop);
            })
            .on("keypress",function(e){
                if(e.keyCode == 13){//回车提交
                    debugger;
                    console.log($(this).html());
                }
            })
        },
        handleComment: function(e,$this) {
            $.ajax({
                url: API.addCommentReply,
                data: {

                },
                success: function(req){

                    if(!req.IsError){
                        
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

