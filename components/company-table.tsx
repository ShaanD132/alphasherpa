import { Box } from "@chakra-ui/react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

var importedData = require("@/company_info.json")
const columnData = [{field: "Bloomberg"}, {field: "Side"}, {field: "Headline"}, {field: "PrimaryReporter"}]
var rowData: any = []
for (let i = 0; i < importedData.length; i++) {
  rowData.push({Bloomberg: importedData[i]["Bloomberg"], Side: importedData[i]["Side"], Headline: importedData[i]["Headline"], PrimaryReporter: importedData[i]["Primary Reporter"]})
}

export default function CompanyTable() {
  return(
    <div className="ag-theme-quartz" style={{height: 450}}>
      <AgGridReact columnDefs={columnData} rowData={rowData}  />
    </div>
  )
}
