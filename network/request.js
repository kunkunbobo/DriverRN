/**
 * Created by yzw on 2017/3/13.
 */

import {getToken,isEmpty} from '../utility/helper';

export default function Request(conf) {

    if (!conf) {
        throw new Error("conf is required!");
    }

    if (!conf.url) {
        throw new Error("conf.url is required!");
    }

    return getToken().then(result=>{

    let token =  isEmpty(result)?null: JSON.parse(result).token;
    let targetUrl = window.$config.host + conf.url;

    // request method
    let method = (conf.type || "get").toUpperCase();
    //set headers
    let headers ;
    if(conf.headers){
        headers=new Headers(conf.headers);
    }
    else{
        headers=new Headers();
    }
    if(!isEmpty(token)){
        headers.append("token",token);
    }

    if (method === "POST") {
        headers.append("content-type","application/json");
    }

    let options={method,headers};
    if(conf.data){
        options["body"]=JSON.stringify(conf.data);
    }
    // request
    return fetch(targetUrl,options);


});


}