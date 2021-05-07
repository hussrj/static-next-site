import Container from "./container";
import SiteComponents from "./site-components";
import { ExternalComponent } from "../src/API";

type Props = {
  components: ExternalComponent[];
};

const Footer = ({ components }: Props) => {
  return (
    <footer className="h-16 lg:h-10 pt-1 sticky bottom-0 font-techMono items-center bg-gradient-to-br from-cyan-500 to-blue-700 border-t border-blue-900">
      <Container>
        <SiteComponents components={components} />
      </Container>
    </footer>
  );
};

export default Footer;