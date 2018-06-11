import { Router } from 'director/build/director';
import Util from './common-component/util/util';
import API from './api/Api.js';

import HomePage from './pages/home-page/home-page.js';

import './asset/reset.scss';
import 'swiper/dist/css/swiper.min.css';

// 引入垫片兼容IE
import "babel-polyfill";

/*按需加载require方式，和组件里面的module.exports对应*/
/*登陆页*/
const LoginCb = function() {
    require.ensure([], (require) => {
        let Login = require('./pages/login/login.js');
        Login.default();
    },'Login')
};
/*首页*/
const GroupsCb = function(userId) {    
    require.ensure([], (require) => {
        let Groups = require('./pages/groups/groups.js');
        Groups.default(userId);
    },'Groups')
};
/*游戏页*/
const GamesCb = function(userId) {
    require.ensure([], (require) => {
        let Games = require('./pages/games/games.js');
        Games.default(userId);
    }, 'Games')
};
/*动态详情*/
const DynamicDetailsCb = function() {
    require.ensure([], (require) => {
        let DynamicDetails = require('./pages/dynamic-details/dynamic-details.js');
        DynamicDetails.default();
    },'DynamicDetails')
};
/*比赛页*/
const MatchesCb = function() {
    require.ensure([], (require) => {
        let Matches = require('./pages/matches/matches.js');
        Matches.default();
    },'Matches')
};
/*jquery ajax setup*/
$.ajaxSetup({
    cache: false,
    beforeSend: function(xhr){

    },
    complete: function (xhr,status) {

    },
    error: function(xhr,status,error) {
        
    }
});
/*页面结构初始化*/
HomePage();

const routes = {
    '/': () => {
        let userId = Util.getCookie('userId');
        Util.linkTo('/groups');
    },
    '/login': LoginCb,
    '/groups': GroupsCb,
    '/games': GamesCb,
    '/dynamic-details': DynamicDetailsCb,
    '/matches': MatchesCb
};

const router = new Router(routes).configure({
    notfound: () => {
        alert('错误链接！');
    },
    before: () => {
        let hash = location.hash;
        let userId = Util.getCookie('userId');
        if(!userId && hash.indexOf('/login') < 0){
            Util.linkTo('/login');
            return false;
        }
        //footer显示隐藏及底部按钮控制
        Util.restFooter(hash.split('#')[1]);
        //页面滚动条初始化
        $(".container").scrollTop(0);
    },
    after: () => {

    }
});
router.init();

//初始化默认路由
if(!Util.getRouter()){
    Util.linkTo('/');
}




