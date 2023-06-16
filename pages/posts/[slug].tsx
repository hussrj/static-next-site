import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import MainView from "../../components/main-view";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import { API, graphqlOperation } from "aws-amplify";
import { ExternalComponent, ListExternalComponentsQuery } from "src/API";
import { listExternalComponents } from "src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { GetStaticPropsContext } from "next";

type Props = {
  post: PostType;
  morePosts: PostType[];
  externalComponents: ExternalComponent[];
};

const Post = ({ post, morePosts, externalComponents }: Props) => {
  const router = useRouter();
  const title = `${post.title} | RJHUSS`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <MainView components={externalComponents}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </MainView>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: GetStaticPropsContext) {
  console.log('Params:', params);
  if (!params || !params['slug']) return { props: {} };
  const slug = params['slug'].toString();
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");
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
    props: {
      post: {
        ...post,
        content,
      },
      externalComponents,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
