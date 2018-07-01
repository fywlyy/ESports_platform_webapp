import API from '../../../../api/Api.js';
import AccountRentTpl from './accountRent.html'

/**
 *
 * @param $el 选择器
 * @param infoList 组件对象
 * @constructor
 */
export default function AccountRent($el, infoList) {
    const handlers = {
        init: function() {
            let _this = this;
            this.getSchoolList(function(data) {
                $el.html(AccountRentTpl({infoList}));
                _this.bindEvent();
            })
        },
        bindEvent: function() {
            let _this = this;
            $('.hot-list').on('touchend', '.hot-list-item', function () {
                let $this = $(this);
                $this.hasClass('active') ? $this.removeClass('active') : $this.addClass('active')
            })
            
            //公共事件添加
            $("#header-all").on("touchend",".js-handle",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });
        },
        getSchoolList: function(callback) {
            $.ajax({
                url: API.getSchoolList,
                data: {
                    Body: null
                },
                success: function(req) {
                    let { Data, IsError } = req;
					if(!IsError){
                        callback && callback(Data || []);
                    }
                },
                error: function(msg){
                    console.log(msg);
                }
            })
        },
        toAccountRental: function(e, $this){
            Util.linkTo('/account-rental');
        }
    }
    handlers.init();
}