/**
 * Created by yzw on 2017/3/29.
 */

import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Image,
    DeviceEventEmitter
} from 'react-native';

import {connect} from 'react-redux';
import KKNavigator from './navgation';
import {defaultColor,Size ,fontSizes} from '../utility/themes';
import DoneButton from './component/doneButton';
import {loginOut} from '../action/login.action'
import Icon from 'react-native-vector-icons/FontAwesome';
import {kLogout} from '../utility/helper';

@connect(({login})=>{
    return {
        userName:login.userName
    }
})

export  default class UserInfo extends Component {

    static propTypes={
        navigator:PropTypes.object.isRequired,
    }

    render(){
        return <View style={{flex:1,backgroundColor:'rgba(0,0,0,0)'}}>
            <View style={{marginHorizontal:0,height:Size(240),
            backgroundColor:defaultColor.grayColor,
            borderBottomColor:defaultColor.borderColor,
            borderBottomWidth:0.5,
            justifyContent:'center',
            alignItems:'center',
            paddingTop:20}}>

                <Icon name={'user-circle' }
                      size={Size(80)}
                      color={defaultColor.whiteColor}
                      backgroundColor={defaultColor.greenColor}
                    />

                <Text style={{color:defaultColor.whiteColor,
                fontSize:fontSizes.ft16,
                textAlign:'center',
                marginTop:15,
                fontWeight:'bold'}}>{this.props.userName}</Text>

            </View>

            <DoneButton text="退 出" onPress={()=>{
                this.props.dispatch(loginOut(()=>{
                DeviceEventEmitter.emit(kLogout,null);
      
                }))
            }}/>
        </View>
    }
}