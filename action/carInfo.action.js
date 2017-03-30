/**
 * Created by yzw on 2017/3/29.
 */

import Request from "../network/request"


export function getCarList(callBack) {
    

    return function (dispatch) {
        let config = {
            url:"/carInfo/getCarList",
            type:'get'
        }

        Request(config).then((response) => {
            if (response.ok) {
            return response.json()
        }
         }).then((data) => {
            console.log("data = ",data)
       /* if (data.success) {

            if(callBack){
                callBack(data.success,data.data)
            }

        } else {

            if(callBack){
                callBack(data.success,data.msg)
            }
        }*/
    })
        .catch((err)=> {
            console.error(err)
    })
    };
}

