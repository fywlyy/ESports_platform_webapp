/**
 * 申请认证
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import ApplyCertificationTpl from './apply-certification.html';

import "./apply-certification.scss";

export default function ApplyCertification() {
    const options = [{
		id: '1',
		name: '南京大学'
	},{
		id: '2',
		name: '浙江大学'
	},{
		id: '3',
		name: '四川大学'
    }]
    
	const handlers = {
		init: function() {
            Util.setTitle('申请认证');
			$(".container").html( ApplyCertificationTpl({options}) );
			this.bindEvent();
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".forgetPwd-page .js-handle").on("touchend",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });

            $("select[name='university']").on("change",function(e) {
				let $this = $(this);
				let value = $this.val();

				let selectItem = _.find(options,function(item){
					return item.id === value;
				});

				$this.parents(".select-module").find(".select-value").html(selectItem.name);
			})
        },
        handleSelect: function(e,$this) {
            $("select[name='university']").trigger('click');
        }
	}   

	handlers.init(); 
}
