/**
 * Created by yzw on 2017/3/28.
 */


import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Platform,
    StatusBar
} from 'react-native';

import {Size,defaultColor,fontSizes} from '../../utility/themes';

export default class BasePage extends Component {

    render(child){
        return <View style={{backgroundColor:defaultColor.backgroundColor,flex:1,marginTop: Platform.OS === "ios" ? 64 : 54,}}>
            <StatusBar barStyle="light-content"
            />
            {child}
            </View>
        }
}