import GroupInfoItemTpl from "./groupInfoItem.html";

import "./groupInfoItem.scss";

export default function GroupInfoItem($el, itemData) {
    const handlers = {
        init: function() {
            $el.append(GroupInfoItemTpl({itemData}));
            this.bindEvent();
        },
        bindEvent: function() {
            
        }
    }

    handlers.init();
}

