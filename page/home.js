/**
 * Created by yzw on 2017/3/28.
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
import {KKNAVIGATOR_INIT_FINISH } from './navgation';

@connect(({login,navigator})=>{
    return {
        login,
        route:navigator.route
    }
})

export default class Home extends Component {

    componentDidMount() {

    }

    componentWillReceiveProps(props){


        if(props.route){

            // AsyncStorage.getAllKeys((error, keys)=>{
            //
            //     console.log("AsyncStorage keys",keys)
            // })
            AsyncStorage.getItem("reduxPersist:login",(error, result)=>{
                
                if(!isEmpty(result) && !isEmpty(JSON.parse(result).token) ){
                    this.props.navigator.replace('main')

                }
                else{
                    this.props.navigator.replace('login')
                }
                this.props.dispatch({
                    type:KKNAVIGATOR_INIT_FINISH,
                    route:null
                })
            });

        }
    }
 
    render() {

        return (
             <View>

            </View>
        );
    }
}