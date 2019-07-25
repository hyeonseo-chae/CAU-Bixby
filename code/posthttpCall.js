module.exports.function = function posthttpCall () {
  
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
  
  /*for(var i = 0; i < booksInfo.length; i++){
    let url = null;
    let description = null;
    
    if(booksInfo[i].volumeInfo.imageLinks == undefined){
      url = "/icon/bixby.png";
    }else{
      url = booksInfo[i].volumeInfo.imageLinks.thumbnail;
    }
    
    if(booksInfo[i].volumeInfo.description != undefined){
      description = booksInfo[i].volumeInfo.description.replace(/(<([^>]+)>)/ig,"");
    }
    
    result.push(
      {
        kind: booksInfo[i].kind,
        id: booksInfo[i].id,
        detailLink: booksInfo[i].selfLink,
        volume:{
          title: booksInfo[i].volumeInfo.title,
          authors: booksInfo[i].volumeInfo.authors,
          description: description,
          imageLinks: url
        }
      }
    );
  }*/
}
 

