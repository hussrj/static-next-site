import MainView from "../components/main-view";
import Head from "next/head";
import Container from "../components/container";
import PostBody from "../components/post-body";
import CoverImage from "../components/cover-image";
import { ABOUT_CONTENT } from "../lib/constants";

const AboutView = () => {
  return (
    <MainView>
      <Container>
        <article className="mb-32">
          <Head>
            <title>About | RJHUSS</title>
            <meta property="og:image" content="/ogrjhuss.png" />
          </Head>
          <div className="mt-2 mb-4 md:mb-8 sm:mx-0">
            <CoverImage title="About" src="/assets/about.png" />
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
