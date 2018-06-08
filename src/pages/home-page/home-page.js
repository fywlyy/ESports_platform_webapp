/**
 * Created with JetBrainsWebStorm.
 * User: xiongpeng
 * Date: 2017/10/11 0011
 * Time: 上午 10:11
 * Desc: 登陆页
 */
import _ from 'underscore';
import Util from '../../common-component/util/util.js';
import API from '../../api/Api.js';
import Footer from '../../common-component/footer/footer.js';
import HomePageTpl from './home-page.html';

import "./home-page.scss";

export default function HomePage() {
	//主页渲染
    $("#app-container").html( HomePageTpl({userName: '用户名XXX'}) );
	//footer渲染
    Footer($(".footer-layout"));
}
