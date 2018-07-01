import API from '../../../../api/Api.js';
import Util from '../../../../common-component/util/util.js';
import OnlineAccompanyTpl from './onlineAccompany.html'

/**
 *
 * @param $el 选择器
 * @constructor
 */
export default function OnlineAccompany($el) {
    const handlers = {
        params: {
            GameInfoId: '',
            Grade: 1,
            Sex:1,
            Status: 10,
            PageIndex: 1,
            PageSize: 10
        },
        init: function() {
            let _this = this;
            this.getSchoolList(function(schoolList) {
                _this.getAccountList(_this.params,function(seachPlayList) {
                    $el.html(OnlineAccompanyTpl({schoolList,seachPlayList}));
                    _this.bindEvent();
                })
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
        getAccountList: function(params,callback) {
            $.ajax({
                url: API.SeachPlayWithList,
                data: {
                    Body: params
                },
                success: function(req) {
                    let { Result, IsError } = req;

					if(!IsError){
                        callback && callback(Result || []);
                    }
                },
                error: function(msg){
                    console.log(msg);
                }
            })            
        },
        toAccountRental: function(e, $this){
            let id = $this.data('id');
            Util.linkTo('/account-rental/' + id);
        },
        placeOrder: function(e, $this) {
            e.stopPropagation();

            let id = $this.data('id');
        }
    }
    handlers.init();
}