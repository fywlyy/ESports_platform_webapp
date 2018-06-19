import AllTpl from './all.html'

import './all.scss'

/**
 *
 * @param $el 选择器
 * @param infoList 组件对象
 * @constructor
 */
export default function All($el, infoList) {
    const handlers = {
        init: function() {
            $el.html(AllTpl({infoList}));
            this.bindEvent();
        },
        bindEvent: function() {
            $('.hot-list').on('touchend', '.hot-list-item', function () {
                let _this = $(this);
                _this.hasClass('active')? _this.removeClass('active'): _this.addClass('active')
            })
        }
    }
    handlers.init();
}