/**
 * Created by yzw on 2017/3/13.
 */

import Request from "../network/request"

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function loginAction(name,password,callBack) {
    return function (dispatch) {
        let config = {
            url:"http://localhost:3000/login",
            data:{
                name,
                password
            },
            type:'post'
        }

        Request(config).then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => {
                console.log(data)
                if (data.success) {

                    dispatch({
                        type:LOGIN_SUCCESS,
                        token:data.data.token,
                        name:name
                    })
                    if(callBack){
                        callBack(data.success,data.data)
                    }

                } else {

                    if(callBack){
                        callBack(data.success,data.msg)
                    }
                }
            })
            .catch((err)=> {
                console.error(err)
            })
    };


}

export const RIGISTER_SUCCESS = 'RIGISTER_SUCCESS';
export function registerAction(name,password,callBack) {

    return function (dispatch) {
        let config = {
            url: "http://localhost:3000/register",
            data: {
                name,
                password,
                type:2
            },
            type: 'post'
        }

        Request(config).then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => {
                console.log(data)
                if (data.success) {

                    dispatch({
                        type:RIGISTER_SUCCESS,
                        token:data.data.token,
                        name:name
                    })
                    if(callBack){
                        callBack(data.success,data.data)
                    }

                } else {

                    if(callBack){
                        callBack(data.success,data.msg)
                    }
                }
            })
            .catch((err)=> {
                console.error(err)
            })
    }
}


export const LOGIN_OUT = 'LOGIN_OUT';
export function loginOut(callBack) {

    return function (dispatch) {

        dispatch({
            type:LOGIN_OUT,
        })
        if(callBack){
            callBack()
        }
    }
}
