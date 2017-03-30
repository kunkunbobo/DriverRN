/**
 * Created by yzw on 2017/3/28.
 */
/**
 * Created by yzw on 2017/3/13.
 */
import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    Navigator,
    TouchableHighlight,
    Platform,
    TextInput,
    StatusBar,
    Alert,
    DeviceEventEmitter
} from 'react-native';
import {registerAction} from "../action/login.action"
import {defaultColor,Size,fontSizes} from '../utility/themes'
import DoneButton from './component/doneButton';
import BasePage from './base/basePage';
import {connect} from "react-redux";
import {kLogin_Success} from '../utility/helper';

@connect()
export default class Register extends BasePage {

    constructor(props){
        super(props);
        this.state = {
            name:null,
            password:null,
            noticeText:null
        }

    }

    done() {

        this.props.dispatch(registerAction(this.state.name,this.state.password,(success,info)=>{
            if(success){
                Alert.alert("提示","注册成功")
                DeviceEventEmitter.emit(kLogin_Success,null)
            }
            else{
                this.setState({noticeText:info});
            }
        }));

    }

    componentDidMount() {


    }

    render() {
        return  super.render(
            <View>
                <View style={{height: Size(44), borderColor: defaultColor.borderColor, borderWidth: 1,margin:15,marginTop:30}}>
                    <TextInput
                        placeholder="名字"
                        style={{margin:0,marginLeft:10,flex:1}}
                        onChangeText={(text) => this.setState({name:text,noticeText:null})}
                        value={this.state.name}
                        clearButtonMode="while-editing"
                    />
                </View>

                <View  style={{height: Size(44), borderColor: defaultColor.borderColor, borderWidth: 1,margin:15}}>
                    <TextInput
                        placeholder="密码"
                        style={{margin:0,marginLeft:10,flex:1}}
                        onChangeText={(text) => this.setState({password:text,noticeText:null})}
                        value={this.state.password}
                        clearButtonMode="while-editing"
                    />
                </View>

                <DoneButton onPress={()=>{
                     this.done();
                }} text="注册"/>

                {this.state.noticeText && <Text style={{color:'red',margin:15,textAlign:'center',fontSize:fontSizes.ft12}}>{this.state.noticeText}</Text>}

            </View>
        )
    }
}