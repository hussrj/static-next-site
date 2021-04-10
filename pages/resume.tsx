import MainView from "../components/main-view";
import Head from "next/head";
import Container from "../components/container";
import { Document, Page, pdfjs } from "react-pdf";
import { API, graphqlOperation } from "aws-amplify";
import { ExternalComponent, ListExternalComponentsQuery } from "src/API";
import { listExternalComponents } from "src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";

let externalComponents: ExternalComponent[];

type Props = {
  externalComponents: ExternalComponent[];
};

const ResumeView =({ externalComponents }: Props) => {
  if (process.env.NODE_ENV === "production") {
    // use minified verion for production
    pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
  } else {
    pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";
  }
  return (
    <MainView components={externalComponents}>
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

export const getStaticProps = async () => {
  const externalToolsResult = (await API.graphql(
    graphqlOperation(listExternalComponents, {
      filter: {
        tags: {
          contains: "rjhuss",
        },
      },
      authMode: "AWS_IAM",
    })
  )) as GraphQLResult<ListExternalComponentsQuery>;
  let externalComponents: ExternalComponent[] = [];
  if (
    externalToolsResult.data !== undefined &&
    externalToolsResult.data.listExternalComponents !== undefined &&
    externalToolsResult.data.listExternalComponents !== null
  ) {
    externalToolsResult.data.listExternalComponents.items?.map((extComp: ExternalComponent | null) => (
      externalComponents.push(
        extComp = extComp ? extComp : {
          __typename: "ExternalComponent",
          id: "1",
          name: "Loading...",
          href: "",
          tags: [""],
          _version: 1,
          _deleted: false,
          _lastChangedAt: 1,
          createdAt: "2020-04-10",
          updatedAt: "2020-04-10",
        })
      )
    );
  } else {
    externalComponents = [];
  }

  return {
    props: { externalComponents },
  };
};