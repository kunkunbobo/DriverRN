/**
 * Created by yzw on 2017/2/14.
 */
import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    Navigator,
    TouchableHighlight,
    Platform
} from 'react-native';

export default class Page1 extends Component {


    componentDidMount() {
        
    }

    render() {

       // console.log("this.props.navigator",this.props.navigator)

        return (<View style={{backgroundColor:'white',flex:1, marginTop: Platform.OS === "ios" ? 64 : 54,}}>
                <Text style={{padding:15,backgroundColor:'white',borderColor:'gray',borderWidth:0.5}} onPress={()=>this.props.navigator.push('page2')}>listView加载大数据</Text>
                <Text style={{padding:15,backgroundColor:'white',borderColor:'gray',borderWidth:0.5}} onPress={()=>this.props.navigator.present('page3')}>present</Text>
                <Text style={{padding:15,backgroundColor:'white',borderColor:'gray',borderWidth:0.5}} onPress={()=>this.props.navigator.present('page4')}>地图</Text>
                <Text style={{padding:15,backgroundColor:'white',borderColor:'gray',borderWidth:0.5}} onPress={()=>this.props.navigator.present('login')}>登录</Text>
            </View>
        );
    }
}
