import PinchZoom from '../../asset/plugin/pinch-zoom.umd.js';
import PinchZoomTpl from "./pinchZoom.html";

import "./pinchZoom.scss";

export default function Header(url) {
    const handlers = {
        init: function() {
            $("body").append(PinchZoomTpl({url}));
            this.bindEvent();
        },
        bindEvent: function() {
            let isZoom = false;
            let $pinchZoom = $(".pinch-zoom");
            let $parent = $pinchZoom.parent();

            new PinchZoom($pinchZoom[0], {
                draggableUnzoomed: false,
            });

            $pinchZoom.parent()
            .on('touchstart',function(){
                isZoom = false;
            })
            .on('touchmove',function(){
                isZoom = true;
            })
            .on('click',function(){
                isZoom || $parent[0].parentNode.removeChild($parent[0]);
            });
        },
    }

    handlers.init();
}