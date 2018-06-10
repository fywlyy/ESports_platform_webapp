import Util from '../../common-component/util/util.js';
import GroupInfoListTpl from "./groupInfoList.html";

import "../groupInfoItem/groupInfoItem.scss";

export default function GroupInfoList($el, infoList) {
    const handlers = {
        init: function() {
            $el.append(GroupInfoListTpl({infoList}));
            this.bindEvent();
        },
        bindEvent: function() {
            $(".groupItem .showAll").on("click",function(){
                Util.linkTo('/dynamic-details');
            })
        }
    }

    handlers.init();
}

