import MainView from "../components/main-view";
import Head from "next/head";
import Container from "../components/container";
import { Document, Page, pdfjs } from "react-pdf";
import { API, graphqlOperation } from "aws-amplify";
import { ExternalComponent, ListExternalComponentsQuery } from "src/API";
import { listExternalComponents } from "src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { HOME_OG_IMAGE_URL } from "../lib/constants";

type Props = {
  externalComponents: ExternalComponent[];
};

const ResumeView =({ externalComponents }: Props) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  return (
    <MainView components={externalComponents}>
      <Head>
        <title>RJHUSS</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <div className="mt-1">
        <Container>
          <Document file="./resume.pdf">
            <div className="block text-center mx-auto">
              <div className="pt-3 overflow-hidden rounded-lg inline-flex border border-blue-900">
                <Page pageNumber={1} />
              </div>
              <div className="overflow-hidden rounded-lg inline-flex border border-blue-900">
                <Page pageNumber={2} />
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
          createdAt: "2021-04-10",
          updatedAt: "2021-04-10",
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