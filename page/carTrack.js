/**
 * Created by yzw on 2017/3/29.
 */
import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    Navigator,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';

import {connect} from 'react-redux';
import KKNavigator from './navgation';
import {isEmpty} from '../utility/helper';
import {defaultColor } from '../utility/themes';



@connect(({login,navigator})=>{
    return {
        login,
        route:navigator.route
    }
})


export  default class CarTrack extends Component {

    static propTypes={
        navigator:PropTypes.object.isRequired,
    }
    
    render(){
        return <View style={{flex:1,backgroundColor:'rgba(0,0,0,0)'}}>

        </View>
    }
}