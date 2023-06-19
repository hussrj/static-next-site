import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import MainView from "../components/main-view";
import { getAllPosts, getAllComponents } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";
import { ExternalComponent } from "src/API";

type Props = {
  allPosts: Post[];
  externalComponents: ExternalComponent[];
};

function Index({ allPosts, externalComponents }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <MainView components={externalComponents}>
        <Head>
          <title>RJHUSS</title>
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </MainView>
    </>
  );
};

export default Index;

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
