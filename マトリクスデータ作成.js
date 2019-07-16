function dataCreate() {
  // スプレッドシートのIDは、https://docs.google.com/spreadsheets/d/ここがスプレッドシートのID/edit#gid=0
  var sheetFile = SpreadsheetApp.openById(fileid);
  teamArrs = getArray(sheetFile.getSheetByName('チームマスタ'));
  flgArrs = getArray(sheetFile.getSheetByName('マトリクス'));
  
  var sheet = sheetFile.getSheetByName('DB投入用');
  var datas = [];
  var cnt = 1;
  for( i=1; i < flgArrs.length; i++ ) {
    for(j=0; j <= teamArrs.length;j++) {
      var data = [];
      if (flgArrs[i][j] == "1") {
        data = [String(cnt++),flgArrs[i]["id"],String(j),flgArrs[i]["名前"], flgArrs[i]["フリガナ"]]
        datas.push(data);
      }
    }
  }
  
  sheet.getRange("A2:E" + String(datas.length + 1)).setValues(datas);
}

function getArray (sheet){
  var obj = {};
  var arr = [];
 range = sheet.getDataRange();
  
  if (this.getDisplayValues) {
    values = range.getDisplayValues();
  } else {
    values = range.getValues();
  }
  
  keys = values.shift();
  
  for (var i = 0; i < values.length; i++) {
    row = values[i];
    for (var j = 0; j < keys.length; j++) {
      key = keys[j];
      value = row[j];
      obj[key] = value;
    }
    
    arr.push(obj);
    obj = {};
  }
  return arr;
}