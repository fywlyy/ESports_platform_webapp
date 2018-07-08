import API from '../../../../api/Api.js';
import Util from '../../../../common-component/util/util.js';
import AccountListTpl from './accountList.html';
import AccountRentTpl from './accountRent.html';

/**
 *
 * @param $el 选择器
 * @constructor
 */
export default function AccountRent($el) {
    const handlers = {
        params: {
            GameInfoId: '',
            OrderByType: 0,
            PageIndex: 1,
            PageSize: 10
        },
        init: function() {
            let _this = this;
            this.getGameInfoList(function(gameInfoList) {
                $el.html(AccountRentTpl({gameInfoList}));
                _this.getAccountList(_this.params,function(accountList) {
                    $(".container-list").html(AccountListTpl({accountList}));
                    _this.bindEvent();
                })
            })
        },
        bindEvent: function() {
            let _this = this;
            
            //公共事件添加
            $("#header-all").on("click",".js-handle",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });

            $('.hot-list').on('click', '.hot-list-item', function () {
                let $this = $(this);
                let id = $this.data('id');

                if($this.hasClass('active')){
                    return;
                }

                // $this.hasClass('active') ? $this.removeClass('active') : $this.addClass('active');
                $this.addClass('active').siblings('.active').removeClass('active');

                _this.params.GameInfoId = id;

                _this.getAccountList(_this.params,function(accountList) {
                    $(".container-list").html(AccountListTpl({accountList}));
                })                
            })

            $(".sort .sort-border").on('click',function(){ //排序
                let $this = $(this);
                let type = parseInt($this.data('type'));

                if($this.hasClass('active')){
                    return;
                }

                $this.addClass('active').siblings('.active').removeClass('active');
                
                _this.params.OrderByType = type;

                _this.getAccountList(_this.params,function(accountList) {
                    $(".container-list").html(AccountListTpl({accountList}));
                })
            })
        },
        getGameInfoList: function(callback) {
            $.ajax({
                url: API.getGameInfoList,
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
                url: API.seachAccountList,
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
            Util.linkTo('/create-order/' + id);
        }
    }
    handlers.init();
}