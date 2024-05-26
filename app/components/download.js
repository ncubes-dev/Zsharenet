function downloadPDF(pdfUrl, pdfName) {
  fetch(pdfUrl)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = pdfName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Error downloading PDF: ', error);
    });
}
export default downloadPDF

