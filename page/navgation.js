/**
 * Created by yzw on 2017/2/14.
 */

import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    Navigator,
    TouchableHighlight,

} from 'react-native';



const buildStyleInterpolator = require('buildStyleInterpolator');

var NoTransitionAnimation = {
    opacity: {
        from: 1,
        to: 1,
        min: 1,
        max: 1,
        type: 'linear',
        extrapolate: false,
        round: 100
    }
};

const ReplaceSceneAnimation = {
    ...Navigator.SceneConfigs.HorizontalSwipeJump,
    gestures: null,
    defaultTransitionVelocity: 1000,
    animationInterpolators: {
        into: buildStyleInterpolator(NoTransitionAnimation),
        out: buildStyleInterpolator(NoTransitionAnimation)
    }
};

export const KKNAVIGATOR_INIT_FINISH = "KKNAVIGATOR_INIT_FINISH";

let {NavigationBar}=Navigator;
class NavigationBarEx extends NavigationBar {
    /**
     * current route is readonly
     * */
    get currentRoute() {
        let routes = this.props.navState.routeStack;
        if (routes.length && routes.length > 0) {
            return Object.assign({}, routes[routes.length - 1]);
        }
        return null;
    }

    render() {
        if (this.currentRoute && this.currentRoute.hiddenNavBar) {
            return null;
        }
        return super.render();
    }

    /**
     * force refresh navigation bar with ops
     * @param {object} [ops={}] - the navigation bar ops
     * @param {string} [ops.title] - title
     * @param {function} [ops.renderLeftButton] - render left button or back button
     * @param {function} [ops.renderRightButton] - render right button
     * @param {function} [ops.renderTitle] - render title
     * @param {boolean} [ops.hideNavigationBar=false] - it is show navigation bar by ops.hideNavigationBar
     * */
    refresh(ops = {}) {
        let routes = this.props.navState.routeStack;
        let route = routes[routes.length - 1];
        routes[routes.length - 1] = Object.assign(route, ops);
        this.forceUpdate();
    }
}


export default class KKNavigator extends Component {


    static propTypes={
        routes:PropTypes.array,
        navBarStyle:PropTypes.any,
        title:PropTypes.string,
        onChange:PropTypes.func,
        renderLeftButton:PropTypes.func,
        renderTitle:PropTypes.func,
        renderRightButton:PropTypes.func
    }

    static defaultProps = {
        navigationBarStyle: {},
        renderLeftButton:(route, navigator, index, navState)=>{
            return <Text onPress={()=>navigator.pop()}>返回</Text>
        },
        renderTitle:(route, navigator, index, navState)=>{
            return <Text>{route.title}</Text>
        },
        onChange: ()=> {
        }
    };

    findEvenFromRoute(name, route) {

        if (route.$ref) {
            if (route.$ref[name]) {
                return route.$ref[name].bind(route.$ref);
            }
            if (route.$ref.renderedElement
                && route.$ref.renderedElement._owner
                && route.$ref.renderedElement._owner._renderedComponent
                && route.$ref.renderedElement._owner._renderedComponent._instance
                && route.$ref.renderedElement._owner._renderedComponent._instance[name]) {
                return route.$ref.renderedElement._owner._renderedComponent._instance[name].bind(route.$ref.renderedElement._owner._renderedComponent._instance);
            }
        }
        return null;
    }

    refeshNavBar(ops){

        if(this.refs.navigator &&  this.refs.navigator.state){
            let routes =  this.refs.navigator.state.routeStack;
            let route =  routes[routes.length-1];
            routes[routes.length - 1] = Object.assign(route, ops);
            this.props.onChange("refreshNavBar",  routes[routes.length - 1] );
            this.forceUpdate();
        }


    }


    findRouteByPath(path) {
        let routes = this.props.routes;
        let pathNames = path.split("/");
        let route;
        while (pathNames.length > 0) {
            let pathName = pathNames.shift();
            if (route) {
                if (route.routes) {
                    route = route.routes.find(r=>r.path === pathName);
                }
                else {
                    throw new Error(`${route.path} not defined routes`);
                }
            }
            else {
                route = this.props.routes.find(r=>r.path === pathName);
            }
        }
        if (!route) {
            throw new Error(`route not found , path = ${path}`);
        }
        return route;
    }


    buildNavigationBar(){
        let defaultRenderLeftButton = this.props.renderLeftButton;
        let defaultRenderTitle = this.props.renderTitle;
        let defaultNavigationBarStyle = this.props.navBarStyle;
        let navigationBarProps = {
            routeMapper: {
                LeftButton: (route, navigator, index, navState) => {
                    if (route.renderLeftButton) {
                        return route.renderLeftButton(route, navigator, index, navState);
                    }
                    if (defaultRenderLeftButton) {
                        return defaultRenderLeftButton(route, navigator, index, navState);
                    }

                },
                RightButton: (route, navigator, index, navState) => {
                    if (route.renderRightButton) {
                        return route.renderRightButton(route, navigator, index, navState);
                    }
                    return null;
                },
                Title: (route, navigator, index, navState) => {
                    if (route.renderTitle) {
                        return route.renderTitle(route, navigator, index, navState);
                    }
                    if (defaultRenderTitle) {
                        return defaultRenderTitle(route, navigator, index, navState);
                    }
                    return <Text style={{color: "white"}}>{route.title}</Text>;
                }
            },
            style: defaultNavigationBarStyle
        };
        return navigationBarProps;
    }

    constructor(props) {
        super(props);
        this.initialRoute = props.routes[0];
        this.navigationBarEx = <NavigationBarEx ref="navigationBar" {...this.buildNavigationBar()}/>;

        //  this.currentRoute = this.initialRoute;
    }


    get currentRoute(){

        if(this.refs.navigator==null){

            return this.initialRoute;
        }
        else{
            let len=this.refs.navigator.state.routeStack.length;
            if(len>0){
                return this.refs.navigator.state.routeStack[len-1];
            }
        }

        return null;
    }

    push(path,ops={}){
        this.enterNewView(path,{configureScene:Navigator.SceneConfigs.HorizontalSwipeJump});
    }

    pop(){
        this.props.onChange("pop", this.currentRoute);
        this.refs.navigator.pop();
    }

    present(path,ops={}){
        this.enterNewView(path,{configureScene:Navigator.SceneConfigs.VerticalUpSwipeJump});
    }

    replace(path,ops={}){

        let route = {
            ...this.findRouteByPath(path),
            ...ops
        };
        this.props.onChange("replace", route, path);
        this.refs.navigator.replace(route);

        // this.enterNewView(path,{configureScene:ReplaceSceneAnimation});
    }

    enterNewView(path,ops={}){
        let route = {
            ...this.findRouteByPath(path),
            ...ops
        };

        if (route.onEnter && typeof route.onEnter === "function") {
            let redirectPath = route.onEnter(route);
            if (redirectPath) {
                route = {
                    ...this._findRouteByPath(redirectPath),
                    ...ops,
                    $previousPath: path,
                    $previousRoute: route
                }
            }
        }
        this.props.onChange("push", route, path);
        this.refs.navigator.push(route);
    }

    resetTo(path,ops={}){

        let route = {
            ...this.findRouteByPath(path),
            ...ops
        };
        this.props.onChange("resetTo", route, path);
        this.refs.navigator.resetTo(route);
    }

    componentDidMount(){

        if(this.props.dispatch){
            this.props.dispatch({
                type:KKNAVIGATOR_INIT_FINISH,
                route:this.currentRoute
            })
        }
    }

    render() {
        return (
            <Navigator
                ref="navigator"
                initialRoute={this.initialRoute}
                initialRouteStack={this.props.routes}
                routes={this.props.routes}
                configureScene={(route, routeStack)=> {
                    return route.configureScene;
                 }}
                onWillFocus={route=>{


                }}
                onDidFocus={route=>{


                }}
                renderScene={(route, navigator)=> {

            return <route.commpent
            ref={ref=> {
                route.$ref = ref;
            }}
            navigator={this}
            route={route}/>
        }}
                style={{flex:1}}
                navigationBar={this.navigationBarEx}
            />
        );
    }
}
