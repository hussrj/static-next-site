import MainView from "../components/main-view";
import Head from "next/head";
import Container from "../components/container";
import { getAllComponents, getAllPosts } from "../lib/api";
import Post from "../types/post";
import { ExternalComponent } from "src/API";
import { HOME_OG_IMAGE_URL } from "../lib/constants";

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
            <meta property="og:image" content={HOME_OG_IMAGE_URL} />
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

  let externalComponents: ExternalComponent[] = await getAllComponents();

  return {
    props: { allPosts, externalComponents },
  };
};
