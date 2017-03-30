/**
 * Created by yzw on 2017/3/28.
 */

import {LOGIN_SUCCESS,RIGISTER_SUCCESS,LOGIN_OUT}  from '../action/login.action'

const initialState = {
    token: null,
    userName:null
}

export default function login(state = initialState, action) {

    console.log("action.type = ",action.type)

    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                token: action.token,
                userName:action.name
            });
        case RIGISTER_SUCCESS:
            return Object.assign({}, state, {
                token: action.token,
                userName:action.name
            });
        case LOGIN_OUT:
            return Object.assign({}, state, {
                token: null,
                userName:null
            });
        default:
            return state;
    }
}