/**
 * Created by yzw on 2017/2/13.
 */

import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    Navigator,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';

import {connect, Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import KKNavigator from './navgation';
import routes from '../router/routers';
import reducer from '../reducer';
import {navigationStyles,defaultColor} from "../utility/themes";
import Icon from 'react-native-vector-icons/EvilIcons';


const RouterWithRedux = connect()(KKNavigator);
const middleware = [thunkMiddleware];
const createStoreWithMiddleware = compose(
    applyMiddleware(...middleware)
)(createStore);

export const store = createStoreWithMiddleware(reducer, undefined, autoRehydrate());
persistStore(store, {storage: AsyncStorage});


export default class App extends Component {

    componentDidMount() {
        //   this.props.dispatch(testAction())
    }

    render() {
        return (<Provider store={store}>
                <RouterWithRedux
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
            </Provider>
        );
    }
}
