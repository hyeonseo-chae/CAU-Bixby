module.exports.function = function todayL (where,meal) {
  
  var http = require('http')
  URL = 'https://mportal.cau.ac.kr/portlet/p005/p005.ajax'
  var headers = {  
    format : "json",  
    headers : {  
      "Content-Type":'application/json'  
    }} 
var params = { "tabs":"1","tabs2":"20","daily":0 };   
var result = http.postUrl(URL, params, headers);  
return result
  /*tabs2 = 10(조식)
20(중식)
40(석식)
daily = 0(오늘)
1(내일)*/
  
}
 

