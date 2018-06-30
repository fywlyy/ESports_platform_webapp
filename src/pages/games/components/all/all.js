import AllTpl from './all.html';
import Util from '../../../../common-component/util/util.js';

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
            let _this = this;
            $('.hot-list').on('touchend', '.hot-list-item', function () {
                let $this = $(this);
                this.hasClass('active')? this.removeClass('active'): this.addClass('active')
            })
            
            //公共事件添加
            $("#header-all").on("touchend",".js-handle",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });
        },
        toAccountRental: function(e, $this){
            Util.linkTo('/account-rental');
        }
    }
    handlers.init();
}