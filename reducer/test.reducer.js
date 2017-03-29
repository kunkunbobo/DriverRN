/**
 * Created by yzw on 2017/2/13.
 */

import {TEST_ACTION}  from '../action/test.action'

const initialState = {
    loading: false
}


export default function test(state = initialState, action) {
    switch (action.type) {
        case TEST_ACTION:
            return Object.assign({}, state, {
                loading: true
            });
        default:
            return state;
    }
}