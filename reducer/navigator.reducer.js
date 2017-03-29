/**
 * Created by yzw on 2017/3/28.
 */

import {KKNAVIGATOR_INIT_FINISH}  from '../page/navgation'

const initialState = {
    route: null
}

export default function navigator(state = initialState, action) {
    
    switch (action.type) {
        case KKNAVIGATOR_INIT_FINISH:

            return Object.assign({}, state, {
                route: action.route
            });
        default:
            return state;
    }
}