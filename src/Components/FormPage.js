// frontend/src/components/FormPage.js
import React, { useState } from 'react';
import './FormPage.css';
import ExcelJS from 'exceljs';

function FormPage({ policy }) {
  const [formData, setFormData] = useState({});
  const [entries, setEntries] = useState([]);

  const headers = [
    "Invoice Number", "Invoice Date (DD-MM-YY FORMAT)", "Zone", "DO Name", "Do Code", "BRANCH CODE",
    "TYPE OF BATCH", "BATCH NO", "CSV file Receipt Date (DD-MM-YY FORMAT)", "CSV file Receipt Time (24 HR FORMAT)",
    "Date of Docket Recieved from Logistics (DD-MM-YY FORMAT)", "Time of Docket Recieved from Logistics (24 HR FORMAT)",
    "TAT-1 Start Date (DD-MM-YY)", "Modified TAT-1 start date (DD/MM/YY) (for Bulk Pickup batches only)",
    "Date of Batch Inward (DD-MM-YY FORMAT)", "Time of Docket Inwarded (24 HR FORMAT)",
    "Date of Batch submitted for QC (DD-MM-YY FORMAT)", "Time of Batch submitted for QC (24 HR FORMAT)",
    "Date of QC Out (DD-MM-YY FORMAT)", "Time of QC Out (24 HR FORMAT)",
    "Date of Scanning Completion (DD-MM-YY FORMAT)", "Time of Scanning Completion (24 HR FORMAT)",
    "Date of DVD Handed over to DO upload (DD-MM-YY FORMAT)", "Time of DVD Handed over to DO upload (24 HR FORMAT)",
    "DO Upload Completion Date (pls collect the details from System Admn) (DD-MM-YY FORMAT)",
    "DO Upload Completion Time (pls collect the details from System Admn)", "Date of RMF Delivery (DD/MM/YY)",
    "Number of Sunday/Holidays/ Strike etc including for DO upload(Pick from scanning ATP) [Sum total of Delay for scanning and DO upload]",
    "Actual TAT (Difference of H and N; Minus QC delay K and L; Minus Holidays 'o')",
    "Total number of Policies picked up as per Logistics Manifest (Enter data as captured in Logistics ATP)",
    "Actual No of Policies in Batch received from Logistics",
    "No of HOLD policies - (Dummy/Empty/Mismatch/Extra/Others) (Policy number details to be captured on ATP)",
    "No of Policies on hold (Policy number details to be captured on ATP)",
    "Not Collected Policy Count (Enter data as captured in Logistics ATP)", "Total No. of Dockets in Batch",
    "No of Policies Scanned", "Total No of Agency Docket Scanned", "Total No of Images Scanned Gross",
    "Total No of Images Net (Billable Images)", "No of Policies handover to Logistics",
    "Total no. of flat files In the batch", "Total no of transcation units in the batch",
    "Total no. of incremental papers/ pages in the batch", "Total No of Policies Uploaded",
    "Total No of Images Uploaded at DO", "Do uploaded Date (DD-MM-YY FORMAT)"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addEntry = () => {
    const entryWithType = { ...formData, "TYPE OF BATCH": policy };
    setEntries([...entries, entryWithType]);
    setFormData({});
  };

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Entries");

    // Add header row with styles
    const headerRow = worksheet.addRow(headers);
    headerRow.eachCell((cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFF" } };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "0070C0" },
      };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // Add data rows
    entries.forEach((entry) => {
      const rowValues = headers.map(header => entry[header] || '');
      worksheet.addRow(rowValues);
    });

    // Auto-fit columns based on header length
    worksheet.columns.forEach((column, index) => {
      const maxLength = headers[index].length + 5; // Padding for readability
      column.width = maxLength < 20 ? 20 : maxLength;
    });

    // Export the file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Entries.xlsx";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="form-page">
      <h2>Fill Details for {policy}</h2>
      <form className="policy-form">
        {headers.map((header, index) => (
          <div key={index} className="form-group">
            <label>{header}</label>
            <input
              type="text"
              name={header}
              value={header === "TYPE OF BATCH" ? policy : formData[header] || ''}
              onChange={header === "TYPE OF BATCH" ? null : handleChange}
              readOnly={header === "TYPE OF BATCH"}
            />
          </div>
        ))}
        <button type="button" onClick={addEntry}>
          Add Entry
        </button>
      </form>
      <button onClick={exportToExcel} className="export-btn">
        Download Entries
      </button>
    </div>
  );
}

export default FormPage;
