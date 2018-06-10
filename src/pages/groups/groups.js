/**
 * Created with JetBrainsWebStorm.
 * User: xiongpeng
 * Date: 2017/10/11 0011
 * Time: 上午 10:11
 * Desc: 登陆页
 */
import _ from 'underscore';
import Swiper from 'Swiper';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import GroupsTpl from './groups.html';
import GroupInfoList from '../../common-component/groupInfoList/groupInfoList.js';
import 'swiper/dist/css/swiper.min.css';

import "./groups.scss";

export default function Groups() {
    const infoList = [0,1,2,3];

    const handlers = {
        init: function() {
            $(".container").html(GroupsTpl());
            GroupInfoList($(".group-info-list"),infoList);

            var swiper = new Swiper('.group-list',{
                slidesPerView: 4
            });

            Util.setTitle('圈子111');

            this.bindEvent();
        },
        bindEvent: function() {
            $('.group-list .swiper-slide').on('click',function(){
                let $this = $(this);
                if($this.hasClass('active')){
                    return;
                }else{
                    $this.parent().find('.swiper-slide.active').removeClass('active');
                    $this.addClass('active');
                }
            });
        }
    }

    handlers.init();
}
