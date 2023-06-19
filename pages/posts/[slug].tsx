import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import MainView from "../../components/main-view";
import { getPostBySlug, getAllPosts, getAllComponents } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import { ExternalComponent } from "src/API";
import { GetStaticPropsContext } from "next";

type Props = {
  post: PostType;
  externalComponents: ExternalComponent[];
};

const Post = ({ post, externalComponents }: Props) => {
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
  let externalComponents: ExternalComponent[] = await getAllComponents();

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
  const posts = getAllPosts(["slug"]);

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
