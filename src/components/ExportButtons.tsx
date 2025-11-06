import React from 'react';
import type { School } from '../types/school';
import { exportToCSV, exportToPDF, exportToMarkdown } from '../utils/export';

interface ExportButtonsProps {
  schools: School[];
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ schools }) => {
  const handleExportCSV = () => {
    exportToCSV(schools, 'federal-schools.csv');
  };

  const handleExportPDF = () => {
    exportToPDF(schools, 'federal-schools.pdf');
  };

  const handleExportMarkdown = () => {
    exportToMarkdown(schools, 'federal-schools.md');
  };

  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <button className="mcf-btn" onClick={handleExportCSV}>
        Export CSV
      </button>
      <button className="mcf-btn" onClick={handleExportPDF}>
        Export PDF
      </button>
      <button className="mcf-btn" onClick={handleExportMarkdown}>
        Export Markdown
      </button>
    </div>
  );
};

export default ExportButtons;
