import MainView from "../components/main-view";
import Head from "next/head";
import Container from "../components/container";
import PostBody from "../components/post-body";
import CoverImage from "../components/cover-image";
import { ABOUT_CONTENT } from "../lib/constants";
import { ExternalComponent, ListExternalComponentsQuery } from "src/API";
import { API, graphqlOperation } from "aws-amplify";
import { listExternalComponents } from "src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { HOME_OG_IMAGE_URL } from "../lib/constants";

type Props = {
  externalComponents: ExternalComponent[];
};

const AboutView = ({ externalComponents }: Props) => {
  return (
    <MainView components={externalComponents}>
      <Container>
        <article className="mb-32">
          <Head>
            <title>About | RJHUSS</title>
            <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          </Head>
          <div className="mt-2 mb-4 md:mb-8 sm:mx-0">
            <CoverImage title="About" src="/assets/about.jpg" />
          </div>
          <PostBody
            content={ABOUT_CONTENT}
          />
        </article>
      </Container>
    </MainView>
  );
};

export default AboutView;

export const getServerSideProps = async () => {
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