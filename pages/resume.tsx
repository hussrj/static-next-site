import MainView from "../components/main-view";
import Head from "next/head";
import Container from "../components/container";
import { Document, Page, pdfjs } from "react-pdf";

const ResumeView = () => {
  if (process.env.NODE_ENV === "production") {
    // use minified verion for production
    pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
  } else {
    pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";
  }
  return (
    <MainView>
      <Head>
        <title>RJHUSS</title>
      </Head>
      <div className="mt-1">
        <Container>
          <Document file="./resume.pdf">
            <div className="block text-center mx-auto">
              <div className="overflow-hidden rounded-lg inline-flex border border-blue-900">
                <Page size="LETTER" pageNumber={1} />
              </div>
              <div className="overflow-hidden rounded-lg inline-flex border border-blue-900">
                <Page size="LETTER" pageNumber={2} />
              </div>
            </div>
          </Document>
        </Container>
      </div>
    </MainView>
  );
};

export default ResumeView;
