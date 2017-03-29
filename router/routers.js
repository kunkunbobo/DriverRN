/**
 * Created by yzw on 2017/3/28.
 */
import Page1 from '../page/page1';
import Page2 from '../page/page2';
import Page3 from '../page/page3';
import Page4 from '../page/page4';
import Login from '../page/login';
import Main from '../page/main';
import Home from '../page/home';
import Register from '../page/register'
const routes = [
    {title: '', index: 0, path:'home', commpent: Home,hiddenNavBar:true},
    {title: 'First Scene',index: 0, path:'page1',commpent: Page1},
    {title: 'Second Scene', index: 1, path:'page2', commpent: Page2},
    {title: 'Third Scene', index: 2, path:'page3', commpent: Page3},
    {title: '地图', index: 3, path:'page4', commpent: Page4},
    {title: '登录', index: 4, path:'login', commpent: Login,renderLeftButton:()=>{}},
    {title: '首页', index: 5, path:'main', commpent: Main,renderLeftButton:()=>{}},
    {title: '注册', index: 5, path:'register', commpent: Register}
];

export default routes;