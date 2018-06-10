import GroupInfoListTpl from "./groupInfoList.html";

import "../groupInfoItem/groupInfoItem.scss";

export default function GroupInfoList($el, infoList) {
    const handlers = {
        init: function() {
            $el.append(GroupInfoListTpl({infoList}));
            this.bindEvent();
        },
        bindEvent: function() {
            
        }
    }

    handlers.init();
}

