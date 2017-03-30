/**
 * Created by yzw on 2017/3/28.
 */

import {
    AsyncStorage
} from 'react-native';

export const kLogin_Success = "kLogin_Success";
export const kLogout = "kLogout";


export function isEmpty(str) {

    if(str==null || str == undefined || str.length == 0){
        return true;
    }

    if(str.replace(/(^s*)|(s*$)/g, "").length ==0){
        return true;
    }
    return false;
}

export function getToken() {
    return AsyncStorage.getItem("reduxPersist:login");
}



