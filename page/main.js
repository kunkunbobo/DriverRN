/**
 * Created by yzw on 2017/3/28.
 */

import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    Navigator,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import KKNavigator from './navgation';
import BasePage from './base/basePage';
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/FontAwesome';
import {defaultColor} from '../utility/themes';
import CarTrack  from './carTrack';
import UserInfo from './userInfo';
import {getCarList} from '../action/carInfo.action';


@connect()
export default class Main extends Component {


    constructor(props){
        super(props);

        console.log("===========1")
        this.state = {
            selectedTabIndex:0
        }
    }

    componentDidMount() {
        console.log("===========2")
        this.props.dispatch(getCarList((success,list)=>{

            }));
    }


    tabBarSelect(index){
        this.setState({ selectedTabIndex: index });
    }


    render() {

        return  ( <View style={{flex:1,backgroundColor:'red'}}>
                <TabNavigator tabBarStyle={{ backgroundColor:defaultColor.backgroundColor }} style={{backgroundColor: defaultColor.backgroundColor}}>
                    <TabNavigator.Item
                        title="车辆追踪"
                        selected={this.state.selectedTabIndex === 0}
                        renderIcon={() => <Icon name={ 'car' } size={20} color={defaultColor.grayColor}/>}
                        renderSelectedIcon={() => <Icon name={ 'car' } size={20} color={defaultColor.greenColor}/>}
                        onPress={() =>this.tabBarSelect(0) }
                        titleStyle={{color:defaultColor.grayColor}}
                        selectedTitleStyle={{color:defaultColor.greenColor}}>
                        <CarTrack navigator={this.props.navigator}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="个人中心"
                        selected={this.state.selectedTabIndex === 1}
                        renderIcon={() => <Icon name={ 'user' } size={20} color={defaultColor.grayColor}/>}
                        renderSelectedIcon={() => <Icon name={ 'user' } size={20} color={defaultColor.greenColor}/>}
                        onPress={() => this.tabBarSelect(1)}
                        titleStyle={{color:defaultColor.grayColor}}
                        selectedTitleStyle={{color:defaultColor.greenColor}}>
                        <UserInfo navigator={this.props.navigator}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}
