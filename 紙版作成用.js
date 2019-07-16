function forPaper() {
  // スプレッドシートのIDは、https://docs.google.com/spreadsheets/d/ここがスプレッドシートのID/edit#gid=0
  var sheetFile = SpreadsheetApp.openById(fileid);
  teamArrs = getArray(sheetFile.getSheetByName('チームマスタ'));
  flgArrs = getArray(sheetFile.getSheetByName('マトリクス'));
  
  for( i = 0; i < teamArrs.length; i++) {
    var sheet = sheetFile.getSheetByName(teamArrs[i]["シート用"]);
    var datas = [];
    for( j = 1; j < flgArrs.length; j++ ) {
      var data = [];
      if (flgArrs[j][i] == "1") {
        data = [flgArrs[j]["名前"],flgArrs[j]["フリガナ"]]
        datas.push(data);
      }
    }
    if (datas.length > 0 ) {
      sheet.getRange("A1:B" + String(datas.length)).setValues(datas);
    }      
  }
}

function main() {
  deleteSheets();
  createSheets();
  forPaper();
}