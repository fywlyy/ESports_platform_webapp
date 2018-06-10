import Util from '../../common-component/util/util.js';
import GamesTpl from './games.html';
import "./games.scss";
export default function Games() {
    const handlers = {
        init: function() {
            $(".container").html(GamesTpl());
            this.bindEvent();
        },
        bindEvent: function() {

        }
    }

    handlers.init();
}
