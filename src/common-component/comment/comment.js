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
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e);
            });

            $(".input-box").on("keydown",function(e){
                if(e.keyCode == 13){//回车提交
                    debugger;
                    console.log($(this).html());
                }
            })
        },
        handleComment: function(e) {

        },
        handleLike: function(e) {
            
        }
    }

    handlers.init();
}

