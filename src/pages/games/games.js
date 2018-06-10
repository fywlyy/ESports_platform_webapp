import Util from '../../common-component/util/util.js';
import GamesTpl from './games.html';
import All from './components/all/all.js';
import HelpPractice from './components/helpPractice/helpPractice.js'
import OnlineAccompany from './components/onlineAccompany/onlineAccompany.js'
import AccountRent from './components/accountRent/accountRent.js'
import "./games.scss";
export default function Games() {
    const handlers = {
        init: function() {
            $(".container").html(GamesTpl());
            //默认加载
            All($(".item-container"),{});
            this.bindEvent();
        },
        bindEvent: function() {
            $('.games .game-header').on('click','.game-header-item',function () {
                let _this = $(this);
                if(_this.hasClass('active')){
                    return;
                }else{
                    _this.parent().find('.game-header-item.active').removeClass('active');
                    _this.addClass('active');
                    let index = _this.index()
                    switch (index){
                        case 0 : All($(".item-container"),{}); break;
                        case 1 : HelpPractice($(".item-container"),{}); break;
                        case 2 : OnlineAccompany($(".item-container"),{}); break;
                        case 3 : AccountRent($(".item-container"),{});break;
                        default : console.log('错误')
                    }
                }
            })
        }
    }

    handlers.init();
}
