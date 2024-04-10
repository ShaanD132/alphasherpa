import { AgGridReact  } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

var importedData = require("@/data/news_data.json")
const columnData = [{field: "Bloomberg", flex: 1}, {field: "Side", flex: 1}, {field: "Headline", flex: 1}, {field: "PrimaryReporter", flex: 1}, {field: "NewsType", flex: 1}, {field: "ExchangeRegion", flex: 1}, {field: "Prediction", flex: 1}]
var rowData: any = []

for (let i = 0; i < importedData.length; i++) {
  rowData.push({Bloomberg: importedData[i]["Bloomberg"], Side: importedData[i]["Side"], Headline: importedData[i]["Headline"], PrimaryReporter: importedData[i]["Primary Reporter"],
    NewsType: JSON.stringify(importedData[i]["News Type"]), ExchangeRegion: importedData[i]["Exchange Region"], Prediction: importedData[i]["Prediction"]
  })
}

interface SizeColumnsToContentStrategy {
  type: 'fitCellContents';
  /** If true, the header won't be included when calculating the column widths. */
  skipHeader?: boolean;
  /** If not provided will auto-size all columns. Otherwise will size the specified columns. */
  colIds?: string[];
}


const autoSizeStrategy: SizeColumnsToContentStrategy = {
  type: 'fitCellContents',

  skipHeader: true
};

export default function NewsTable() {
  return(
    <div className="ag-theme-quartz" style={{height: 450}}>
      <AgGridReact columnDefs={columnData} rowData={rowData}  autoSizeStrategy={autoSizeStrategy}/>
    </div>
  )
}