import Container from "./container";
import SiteComponents from "./site-components";

const Footer = () => {
  return (
    <footer className="h-16 lg:h-10 pt-1 sticky bottom-0 font-techMono items-center bg-gradient-to-br from-cyan-500 to-blue-700 border-t border-blue-900">
      <Container>
        <SiteComponents />
      </Container>
    </footer>
  );
};

export default Footer;
