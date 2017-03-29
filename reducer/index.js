/**
 * Created by yzw on 2017/3/28.
 */

import test from './test.reducer';
import login from './login.reducer';
import {combineReducers} from 'redux';
import  navigator from './navigator.reducer';

export default combineReducers({
    login
    ,test
    ,navigator
})