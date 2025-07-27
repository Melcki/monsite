const PdfViewer = () => {
  return (
    <div>
      <h2>Mon CV en PDF</h2>
      <iframe
        src="/mon-fichier.pdf"
        width="100%"
        height="600px"
        title="CV"
      ></iframe>
    </div>
  );
};

export default PdfViewer;
