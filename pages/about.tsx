import MainView from "../components/main-view";
import Head from "next/head";
import Container from "../components/container";
import PostBody from "../components/post-body";
import CoverImage from "../components/cover-image";
import { ABOUT_CONTENT } from "../lib/constants";
import { getAllComponents } from "../lib/api";
import { ExternalComponent } from "src/API";
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

export const getStaticProps = async () => {
  let externalComponents: ExternalComponent[] = await getAllComponents();

  return {
    props: { externalComponents },
  };
};