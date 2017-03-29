/**
 * Created by yzw on 2017/3/28.
 */

export function isEmpty(str) {

    if(str==null || str == undefined || str.length == 0){
        return true;
    }

    if(str.replace(/(^s*)|(s*$)/g, "").length ==0){
        return true;
    }
    return false;
}