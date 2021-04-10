import MainView from "../components/main-view";
import Head from "next/head";
import Container from "../components/container";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";
import { API, graphqlOperation } from "aws-amplify";
import { ExternalComponent, ListExternalComponentsQuery } from "src/API";
import { listExternalComponents } from "src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";

let externalComponents: ExternalComponent[];

type Props = {
  allPosts: Post[];
  externalComponents: ExternalComponent[];
};

const PostsView = ({ allPosts, externalComponents }: Props) => {
  return (
    <MainView components={externalComponents}>
      <Container>
        <article className="mb-32">
          <Head>
            <title>Posts | RJHUSS</title>
            <meta property="og:image" content="/ogrjhuss.png" />
          </Head>
          <div className="items-center justify-center mt-8 mb-4 md:mb-8 sm:mx-0 container mx-auto h-screen">
            {allPosts ? (
              allPosts.map((post: Post) => (
                <div key={post.slug} className="items-center justify-center container mx-auto">
                  <a href={`/posts/${post.slug}`}>{post.title}</a>
                  <br />
                </div>
              ))
            ) : (
              <a href="reddit.com">reddit</a>
            )}
          </div>
        </article>
      </Container>
    </MainView>
  );
};

export default PostsView;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
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
    props: { allPosts, externalComponents },
  };
};
