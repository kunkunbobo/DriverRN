/**
 * Created by yzw on 2017/2/13.
 */

import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    Navigator,
    TouchableHighlight,
    AsyncStorage,
    DeviceEventEmitter
} from 'react-native';

import {connect, Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import KKNavigator from './navgation';
import {loginRoutes,mainRoutes} from '../router/routers';
import reducer from '../reducer';
import {navigationStyles,defaultColor} from "../utility/themes";
import Icon from 'react-native-vector-icons/EvilIcons';
import config from '../config/config';
import {getToken,isEmpty,kLogin_Success,kLogout} from '../utility/helper'

const RouterWithRedux = connect()(KKNavigator);
const middleware = [thunkMiddleware];
const createStoreWithMiddleware = compose(
    applyMiddleware(...middleware)
)(createStore);

export const store = createStoreWithMiddleware(reducer, undefined, autoRehydrate());
persistStore(store, {storage: AsyncStorage});

window.$config = config[config.env];

export default class App extends Component {


    constructor(props){
        super(props);
        this.state = {
            loginStatusAdd:false,
            login:false
        }

        getToken().then(result=>{

            console.log("result = ",result,typeof result)
            if(!isEmpty(result) && !isEmpty(JSON.parse(result).token) ){
                this.setState({loginStatusAdd:true,login:true})
            }
            else{
                this.setState({loginStatusAdd:true,login:false})
            }
        })

        
    }

    loginIn(){
        this.setState({login:true})
    }

    logout(){
        this.setState({login:false})
    }
    componentDidMount() {
       // DeviceEventEmitter.addListener(kLogin_Success,this.loginIn.bind(this));
       // DeviceEventEmitter.addListener(kLogout,this.loginIn.bind(this));
    }

    componentWillUnmount() {
       // DeviceEventEmitter.remove('change');
       // DeviceEventEmitter.remove('memoryWarning');
    }

    render() {

        if(this.state.loginStatusAdd){

            let routes = mainRoutes
            if(this.state.login){

                routes = mainRoutes;
            }



            return <RouterWithRedux
                routes={routes}
                style={{flex:1}}
                navBarStyle={{backgroundColor:defaultColor.naviBarColor}}
                renderTitle={(route)=> {
								return (
									<View style={navigationStyles.titleView}>
										<Text style={[navigationStyles.title]}>{route.title}</Text>
									</View>
								);
							}}
                renderLeftButton={(route, navigator, index, navState)=>{
                    return  <Icon.Button
                     style={[navigationStyles.leftButton,{backgroundColor:defaultColor.naviBarColor}]}
                     iconStyle={{marginLeft:-5}}
                     size={40}
                     name="chevron-left"
                     onPress={()=>{navigator.pop()}}></Icon.Button>
                }}/>

        }
        else{
            return null;
        }
    }
}
