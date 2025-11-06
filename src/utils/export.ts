import { jsPDF } from 'jspdf';
import type { School } from '../types/school';

export const exportToCSV = (schools: School[], filename = 'schools.csv'): void => {
  const headers = ['Code', 'Name', 'Address', 'City', 'State', 'Zip', 'Province', 'Country', 'Postal Code'];
  const csvContent = [
    headers.join(','),
    ...schools.map(school => [
      school.code,
      `"${school.name}"`,
      `"${school.address}"`,
      school.city,
      school.state,
      school.zip,
      school.province,
      school.country,
      school.postalCode
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportToPDF = (schools: School[], filename = 'schools.pdf'): void => {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.height;
  let y = 20;

  // Add title
  doc.setFontSize(16);
  doc.text('Federal School Directory', 14, y);
  y += 10;

  // Add metadata
  doc.setFontSize(10);
  doc.text(`Total Schools: ${schools.length}`, 14, y);
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, 140, y);
  y += 10;

  // Add schools
  doc.setFontSize(9);
  schools.forEach((school, index) => {
    if (y > pageHeight - 30) {
      doc.addPage();
      y = 20;
    }

    doc.setFont('helvetica', 'bold');
    doc.text(`${index + 1}. ${school.name}`, 14, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.text(`Code: ${school.code}`, 20, y);
    y += 4;
    doc.text(`Address: ${school.address}, ${school.city}, ${school.state} ${school.zip}`, 20, y);
    y += 4;

    if (school.province !== 'N/A' || school.country !== 'N/A') {
      doc.text(`Province: ${school.province}, Country: ${school.country}`, 20, y);
      y += 4;
    }

    y += 3;
  });

  doc.save(filename);
};

export const exportToMarkdown = (schools: School[], filename = 'schools.md'): void => {
  const markdown = [
    '# Federal School Directory\n',
    `**Total Schools:** ${schools.length}  `,
    `**Generated:** ${new Date().toLocaleDateString()}\n`,
    '---\n',
    ...schools.map((school, index) => [
      `## ${index + 1}. ${school.name}`,
      `**Code:** ${school.code}  `,
      `**Address:** ${school.address}  `,
      `**City:** ${school.city}  `,
      `**State:** ${school.state}  `,
      `**Zip:** ${school.zip}  `,
      school.province !== 'N/A' ? `**Province:** ${school.province}  ` : '',
      school.country !== 'N/A' ? `**Country:** ${school.country}  ` : '',
      school.postalCode !== 'N/A' ? `**Postal Code:** ${school.postalCode}  ` : '',
      ''
    ].filter(Boolean).join('\n'))
  ].join('\n');

  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
