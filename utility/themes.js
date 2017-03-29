/**
 * Created by yzw on 2017/3/28.
 */

import {
    StyleSheet,
    Platform,
    PixelRatio,
    Dimensions
} from "react-native";

const deviceSize=Dimensions.get("window");
const density=PixelRatio.get();

export function Size(value:Number,designDensity:Number=2,designScreenWidth:Number=375){
    let rate=deviceSize.width/designScreenWidth;
    return PixelRatio.roundToNearestPixel(value*rate);
}

export function FontSize(value:Number,designDensity:Number=2){
    switch (density){
        case 1:
            return Math.round(value-1);
        case 3:
            return Math.round(value+1);
        default:
            return Math.round(value);
    }
}


export const  defaultColor = {
    borderColor:"#e5e5e5",
    blackColor:"#606060",
    grayColor:'#555555',
    greenColor:'#27aa17',
    blueColor:'#78bdf9',
    whiteColor:'#ffffff',
    backgroundColor:'#f3f3f3',
    naviBarColor:'#555555',
}


export const fontSizes = {
    ft18:FontSize(18),
    ft17:FontSize(17),
    ft16:FontSize(16),
    ft15:FontSize(15),
    ft14:FontSize(14),
    ft13:FontSize(13),
    ft12:FontSize(12),
    ft11:FontSize(11)
}

export const navigationStyles = StyleSheet.create({
    navigationBar: {
        backgroundColor: defaultColor.grayColor,
        //...shadow()
        ...Platform.select({
            android: {
                height: 44,
                borderColor:defaultColor.borderColor,
                borderBottomWidth:0.5
            }
        }),
    },
    titleView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        ...Platform.select({
            android:{
                width:deviceSize.width-72*2
            }
        })
    },
    title: {
        color: defaultColor.whiteColor,
        fontWeight:"bold",
        ...Platform.select({
            android:{
                fontSize:fontSizes.ft18,
                textAlignVertical: "center",
                marginTop: 12,
            },
            ios:{
                fontSize:fontSizes.ft18,
            }
        }),
    },
    leftButton: {
        width: Size(50),
        height: 44 ,
    },
    rightButton: {
        color: defaultColor.blackColor,
        fontSize:fontSizes.ft14 ,
    }
});
