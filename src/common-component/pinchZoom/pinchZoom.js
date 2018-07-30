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
            let $pinchZoom = $(".pinch-zoom");

            new PinchZoom($pinchZoom[0], {
                draggableUnzoomed: false,
            });
        },
    }

    handlers.init();
}