function createSheets() {

  // スプレッドシートのIDは、https://docs.google.com/spreadsheets/d/ここがスプレッドシートのID/edit#gid=0
  var sheetFile = SpreadsheetApp.openById(fileid);
  teamArrs = getArray(sheetFile.getSheetByName('チームマスタ'));
  
  // チーム名の表記
  for (i=0; i < teamArrs.length;i++) {
    
    sheetFile.insertSheet(teamArrs[i]["シート用"], sheetFile.getSheets().length);
  }  
}
