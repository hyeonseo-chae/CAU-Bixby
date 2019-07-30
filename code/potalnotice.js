module.exports.function = function potalnotice (where) {
  
  var http = require('http')
  URL = 'https://mportal.cau.ac.kr/system/admin/board/B0004/selectPostList.ajax'
  var headers = {  
    format : "json",  
    headers : {  
      "Content-Type":'application/json'  
    }} 
var params = {"bbsId": "B0004", "bbsType": "1", "categoryCd": "", "searchType": "title", "searchWord": ""};   
var result = http.postUrl(URL, params, headers);  
return result
  /*tabs2 = 10(조식)
20(중식)
40(석식)
daily = 0(오늘)
1(내일)*/
  
}
 

