/**
 * Created by yzw on 2017/2/15.
 */
import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    Navigator,
    TouchableHighlight,
    Platform
} from 'react-native';


export default class Page3 extends Component {


    componentDidMount() {

    }

    render() {

        return (<View style={{backgroundColor:'white',flex:1,marginTop: Platform.OS === "ios" ? 64 : 54,}}>
                <Text>page3 abc</Text>
            </View>
        );
    }
}