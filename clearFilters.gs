// Risorse >> "Servizi avanzati di Google..." attivare "Google Sheets API"
// rimuove eventuali filtri presenti nel foglio

function clearFilters(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ssId = ss.getId();
  var requests = ss.getSheets().map(function(sheet){
    return {
      "clearBasicFilter": {
        "sheetId": sheet.getSheetId()
      }
    }
  });
  Sheets.Spreadsheets.batchUpdate({'requests': requests}, ssId);
}
