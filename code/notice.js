module.exports.function = function notice (where) { //공지사항
  var http = require('http')
  var result = http.getUrl("https://www.cau.ac.kr/ajax/FR_SVC/BBSViewList2.do?pageNo=1&pagePerCnt=20&MENU_ID=100&SITE_NO=2&BOARD_SEQ=4&BOARD_TYPE=C0301",{format : 'json'})

  return result
} 