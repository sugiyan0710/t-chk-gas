function deleteSheets() {

  // スプレッドシートのIDは、https://docs.google.com/spreadsheets/d/ここがスプレッドシートのID/edit#gid=0
  var sheetFile = SpreadsheetApp.openById(fileid);
  teamArrs = getArray(sheetFile.getSheetByName('チームマスタ'));
  
  // チーム名の表記
  for (i=0; i < teamArrs.length;i++) {
    var sheet = sheetFile.getSheetByName(teamArrs[i]["シート用"]);
    sheetFile.deleteSheet(sheet);
  } 
}

function deleteTaemSheets() {
  var sheetFile = SpreadsheetApp.openById(fileid);
  var numSheets    = sheetFile.getNumSheets();
  
  for(var i = 5; i < numSheets; i++){
    var sheet     = sheetFile.getSheets()[i];
    var sheetName = sheet.getSheetName();
    var deleteSheet = sheetFile.getSheetByName(sheetName);
    
    
    sheetFile.deleteSheet(deleteSheet);
    
  }
}