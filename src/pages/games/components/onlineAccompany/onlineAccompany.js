import OnlineAccompanyTpl from './onlineAccompany.html'


/**
 *
 * @param $el 选择器
 * @param infoList 组件对象
 * @constructor
 */
export default function OnlineAccompany($el, infoList) {
    const handlers = {
        init: function() {
            $el.html(OnlineAccompanyTpl({infoList}));
            this.bindEvent();
        },
        bindEvent: function() {

        }
    }
    handlers.init();
}