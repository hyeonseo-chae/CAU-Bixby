module.exports.function = function httpCall () {
  
  var http = require('http')
  URL = 'https://mportal.cau.ac.kr/portlet/p005/p005.ajax'
  var headers = {  
    format : "json",  
    headers : {  
      "Content-Type":'application/json'  
    }} 
var params = { "tabs":"1","tabs2":"10","daily":0 };   
var result = http.postUrl(URL, params, headers);  
return result
}
 /* var  options={}

  options.headers={
    "Content-Type":'application/json'
  }
options.body ={
 "tabs":"1","tabs2":"10","daily":0
}
options.url = "https://mportal.cau.ac.kr/portlet/p005/p005.ajax"
  var response = http.spsProxyPost(options)
  return response*/

