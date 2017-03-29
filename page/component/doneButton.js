/**
 * Created by yzw on 2017/3/28.
 */

import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import {Size,defaultColor,fontSizes} from '../../utility/themes';

export default class DoneButton extends Component {

    static propTypes = {
            onPress:PropTypes.func.isRequired,
            text:PropTypes.string.isRequired,
            style:PropTypes.object,
            textStyle:PropTypes.object,
    }

    static defaultProps = {
        textStyle: {},
        style:{}
    }


    render(){
        return   <TouchableOpacity style={[{justifyContent:'center',marginTop:20,marginHorizontal:15,height:Size(45),backgroundColor:defaultColor.greenColor},this.props.style]}
        onPress={()=>{
            if(this.props.onPress){
                this.props.onPress()
            }
        }}>
            <Text style={[{textAlign:'center',color:defaultColor.whiteColor,fontSize:fontSizes.ft16},this.props.textStyle]}>{this.props.text}</Text>

        </TouchableOpacity>
    }
}