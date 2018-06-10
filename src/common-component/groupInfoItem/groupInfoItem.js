import GroupInfoItemTpl from "./groupInfoItem.html";

import "./groupInfoItem.scss";

export default function GroupInfoItem($el, itemData, onlyOne) {
    const handlers = {
        init: function() {
            $el.append(GroupInfoItemTpl({itemData,onlyOne}));
            this.bindEvent();
        },
        bindEvent: function() {
            
        }
    }

    handlers.init();
}

