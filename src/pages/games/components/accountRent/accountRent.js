import AccountRentTpl from './accountRent.html'

import './accountRent.scss'

/**
 *
 * @param $el 选择器
 * @param infoList 组件对象
 * @constructor
 */
export default function AccountRent($el, infoList) {
    const handlers = {
        init: function() {
            $el.html(AccountRentTpl({infoList}));
            this.bindEvent();
        },
        bindEvent: function() {

        }
    }
    handlers.init();
}