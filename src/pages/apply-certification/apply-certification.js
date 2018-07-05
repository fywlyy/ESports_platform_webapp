/**
 * 申请认证
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import ApplyCertificationTpl from './apply-certification.html';

import "./apply-certification.scss";

export default function ApplyCertification() {    
	const handlers = {
		init: function() {
			let _this = this;
			Util.setTitle('申请认证');
			this.getSchoolList(function(schoolList) {
				schoolList.splice(0,0,{
					Id: '',
					Name: '请选择'
				});
				_this.schoolList = schoolList;
				$(".container").html( ApplyCertificationTpl({schoolList}) );
				_this.bindEvent();
			})
		},
		bindEvent: function() {
			let _this = this;
            //公共事件添加
            $(".forgetPwd-page .js-handle").on("touchend",function(e){
                let handle = $(this).data('handle');
                _this[handle] && _this[handle](e, $(this));
            });

            $("select[name='SchoolId']").on("change",function(e) {
				let $this = $(this);
				let value = $this.val();
				let selectItem = _.find(_this.schoolList,function(item){
					return item.Id === value;
				});

				$this.parents(".select-module").find(".select-value").html(selectItem.Name);
			})
        },
        handleSelect: function(e,$this) {
            $("select[name='SchoolId']").trigger('click');
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
		handleSubmit: function() {
			let Name = $("input[name='Name']").val(),
				StudentNumber = $("input[name='StudentNumber']").val,
				SchoolId = $("select[name='SchoolId']").val;

			if(!Name){
				alert('请输入姓名！');
				return;
			}

			if(!StudentNumber){
				alert('请输入学号！');
				return;
			}

			if(!SchoolId){
				alert('请选择学校！');
				return;
			}

			$.ajax({
				url: API.submitAuthUser
			})
		}
	}   

	handlers.init(); 
}
