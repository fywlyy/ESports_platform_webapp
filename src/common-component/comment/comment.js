import CommentTpl from "./comment.html";

import "./comment.scss";

export default function Comment($el, commentData) {
    const handlers = {
        init: function() {
            $el.append(CommentTpl(commentData));
            this.bindEvent();
        },
        bindEvent: function() {
            $(".input-box").on("keydown",function(e){
                if(e.keyCode == 13){//回车提交
                    debugger;
                    console.log($(this).html());
                }
            })
        }
    }

    handlers.init();
}

