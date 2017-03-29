/**
 * Created by yzw on 2017/3/13.
 */

export default function Request(conf) {

    if (!conf) {
        throw new Error("conf is required!");
    }

    if (!conf.url) {
        throw new Error("conf.url is required!");
    }

    let targetUrl = conf.url;

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

    if (method === "POST") {
        headers.append("content-type","application/json");
    }

    let options={method,headers};
    if(conf.data){
        options["body"]=JSON.stringify(conf.data);
    }
    // request
    return fetch(targetUrl,options);

}