import _ from 'underscore';
import Swiper from 'Swiper';
import Util from '../../common-component/util/util.js';
import MatchesTpl from './matches.html';
import 'swiper/dist/css/swiper.min.css';

import "./matches.scss";

export default function Matches() {

    const handlers = {
        init: function() {
            $(".container").html(MatchesTpl());

            var swiper = new Swiper('.video-list', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            });

            Util.setTitle('比赛');

            this.bindEvent();
        },
        bindEvent: function() {

        }
    }

    handlers.init();
}
